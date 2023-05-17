// * Imports
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import FormItem from './FormItem';
import cn from '@/lib/common/cn';
import {
  areas,
  defaultStyles,
  fills,
  roundeds,
  shadows,
  variants,
} from './formItemPropStyles';
import { TFill, TIcon, TSize, TVariant } from '@/assets/typescript/ui';
import capitalize from '@/lib/common/capitalize';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { IOption, TSelection } from '@/assets/typescript/form';

// * Props
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  values: TSelection[];
  setValues: Dispatch<SetStateAction<TSelection>>[];
  options: IOption[];
  label: string;
  labelHidden?: boolean;
  cols?: number;
  icon?: TIcon;
  area?: TSize;
  variant?: TVariant;
  fill?: TFill;
  shadow?: TSize;
  rounded?: TSize | 'full';
  className?: string;
}

// * Component
export default function DrilldownSelect({
  values,
  setValues,
  options,
  label,
  labelHidden = false,
  cols = 1,
  icon,
  area = 'md',
  variant = 'primary',
  fill = 'solid',
  shadow = 'xs',
  rounded = 'md',
  className,
}: // ...props
IProps) {
  // * Refs / Hooks
  const containerRef = useRef<HTMLDivElement>(null);

  // * State
  const [path, setPath] = useState<(IOption | undefined)[]>([undefined]);
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemTopPositions, setItemTopPositions] = useState<number[]>([0]);
  const [windowWidth, setWindowWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024;
  });
  const [indices, setIndices] = useState<number[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [parentMenuVisible, setParentMenuVisible] = useState(true);

  // * Handlers
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  const handleItemClick = useCallback(
    (option: IOption, level: number, index: number, e: MouseEvent) => {
      const element = e.target as HTMLElement;
      const clickedItemTop = element.offsetTop;
      const clickedItemHeight = element.offsetHeight;
      const menuHeight = option.children
        ? option.children.length * clickedItemHeight
        : 0;
      const totalHeight = options.length * clickedItemHeight;

      const topHalf = clickedItemTop + clickedItemHeight / 2 < totalHeight / 2;
      const topPosition = topHalf
        ? clickedItemTop
        : clickedItemTop + clickedItemHeight - menuHeight;

      setItemTopPositions((oldTopPositions) => {
        let newTopPositions = [...oldTopPositions];

        // If we have children, adjust the position of the next level
        if (option.children) {
          newTopPositions[level + 1] = topPosition;
        }

        // If we're going back in levels, trim off the excess
        if (newTopPositions.length - 1 > level + 1) {
          newTopPositions = newTopPositions.slice(0, level + 2);
        }

        return newTopPositions;
      });

      // Update the indices state to reflect the index of the selected option
      const optionsAtLevel = level === 0 ? options : path[level - 1]?.children;

      setIndices((oldIndices) => {
        let newIndices = [...oldIndices];
        newIndices[level] =
          optionsAtLevel?.findIndex((opt) => opt.id === option.id) ?? 0;
        return newIndices;
      });

      // Hide parent menu if submenu has more items than the parent
      if (
        windowWidth <= 1024 &&
        optionsAtLevel &&
        option.children &&
        option.children.length > optionsAtLevel.length
      ) {
        setItemTopPositions((oldTopPositions) => {
          let newTopPositions = [...oldTopPositions];
          newTopPositions[level] = -totalHeight;
          return newTopPositions;
        });
      }

      setPath((oldPath) => {
        let newPath = [...oldPath];
        newPath[level] = option;

        // If we're going back in levels, trim off the excess
        if (newPath.length - 1 > level) {
          newPath = newPath.slice(0, level + 1);
        }

        // If we have children, add a new level
        if (option.children) {
          newPath.push(undefined);
          setCurrentLevel(level + 1); // Update the currentLevel state
        } else {
          // Destructure the id and name for the path and setValues
          const results = newPath.map((item) => ({
            id: item?.id!,
            name: item?.name.includes('Level:')
              ? item.name.split('Level: ')[1]
              : item?.name!,
          }));

          // Loop over the setValues setters and set the values
          setValues.forEach((setValue, i) => {
            setValue(results[i]);
          });

          setInputValue(
            `${option.name} (${newPath[1]?.name} ${results[0].name})`,
          );
          setMenuOpen(false);
        }

        return newPath;
      });
    },
    [options, path, setMenuOpen, setInputValue, setValues, windowWidth],
  );

  // Handle Key Down
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      // Get the current level and index
      const level = path.length - 1;
      const index = indices[level] ?? 0; // Use indices state to get the current index

      const optionsAtLevel = level === 0 ? options : path[level - 1]?.children;

      // Handle the different keys
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          // If the menu is not open, open it
          if (!menuOpen) {
            setMenuOpen(true);
          } else if (optionsAtLevel && index < optionsAtLevel.length - 1) {
            // If the menu is open, and there's an option below the current one, select it
            const nextOption = optionsAtLevel[index + 1];
            handleOptionChange(nextOption, level, index + 1);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          // If the menu is open, and there's an option above the current one, select it
          if (menuOpen && optionsAtLevel && index > 0) {
            const previousOption = optionsAtLevel[index - 1];
            handleOptionChange(previousOption, level, index - 1);
          }
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          // If the menu is open and an option is selected, close the menu
          if (menuOpen && optionsAtLevel && index >= 0) {
            const selectedOption = optionsAtLevel[index];
            handleItemClick(selectedOption, level, index, event as any);
          } else if (!menuOpen) {
            setMenuOpen(true);
          }
          break;
        case 'Escape':
          event.preventDefault();
          // Close the menu
          setMenuOpen(false);
          break;
        default:
          break;
      }
    },
    [menuOpen, options, path, indices, handleItemClick],
  );

  // Handle Option Change
  const handleOptionChange = (
    option: IOption,
    level: number,
    index: number,
  ) => {
    // Update the indices state to reflect the index of the selected option
    setIndices((oldIndices) => {
      let newIndices = [...oldIndices];
      newIndices[level] = index;
      return newIndices;
    });

    setPath((oldPath) => {
      let newPath = [...oldPath];
      newPath[level] = option;

      // If we're going back in levels, trim off the excess
      if (newPath.length - 1 > level) {
        newPath = newPath.slice(0, level + 1);
      }

      return newPath;
    });
  };

  //   * Effects
  // Close menu on click outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    console.log('values:', values);
    if (values[0] === null) {
      setPath([undefined]);
      setInputValue('');
      setItemTopPositions([0]);
      setIndices([]);
      setCurrentLevel(0);
      setParentMenuVisible(true);
    } else {
      if (!inputValue) {
        setInputValue(
          `${values[2]?.name} (${values[1]?.name} ${values[0]?.name})`,
        );
      }
    }
  }, [values, inputValue]);

  // * Render
  return (
    <FormItem
      label={label}
      cols={cols}
      icon={icon}
      labelHidden={labelHidden}
      className={className}
    >
      <div
        className={cn(
          'relative flex w-full items-center justify-between group',
          defaultStyles,
          areas[area],
          variants[variant],
          fills[fill],
          shadows[shadow],
          roundeds[rounded],
          icon ? 'pl-10' : 'pl-3',
        )}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={menuOpen}
        aria-labelledby="listbox-label"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
      >
        {/* Input Container */}
        <div className="block w-full cursor-pointer flex-nowrap overflow-hidden text-ellipsis">
          <span
            className={cn(
              inputValue
                ? 'text-slate-900 dark:text-navy-50'
                : 'text-slate-500/70 dark:text-navy-200/70 font-light',
              'block truncate text-sm sm:text-base flex-nowrap overflow-hidden',
            )}
          >
            {inputValue ? capitalize(inputValue) : 'Select an option'}
          </span>
        </div>

        {/* Input Trigger */}
        <div className="flex items-center justify-end cursor-pointer h-full bg-transparent px-2 -mr-2">
          {menuOpen ? (
            <ChevronUpIcon className="h-5 w-5 mt-0.5 text-slate-400 group-hover:text-slate-300 group-focus:text-slate-300 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 mt-0.5 text-slate-400 group-hover:text-slate-300 group-focus:text-slate-300 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200" />
          )}
        </div>

        {menuOpen && (
          <>
            <div
              className={cn(
                'absolute right-0 top-10 z-20 mt-1 w-full',
                roundeds[rounded],
                shadows[shadow],
                variants[variant],
              )}
            >
              {path.map(
                (selectedOption, level) =>
                  level <= currentLevel && (
                    <ul
                      className={cn(
                        'absolute bg-white dark:bg-navy-700 dark:border-navy-600 dark:divide-navy-600 border border-slate-200 divide-y divide-slate-200 shadow-lg w-full lg:w-64 z-10',
                        roundeds[rounded],
                      )}
                      style={{
                        left: windowWidth <= 1024 ? '0px' : `${level * 256}px`,
                        top:
                          windowWidth > 1024
                            ? `${itemTopPositions[level]}px`
                            : '0px',
                      }}
                      role="listbox"
                      aria-labelledby={label}
                      aria-activedescendant={selectedOption?.id}
                      key={level}
                    >
                      {windowWidth <= 1024 && level > 0 && (
                        <li
                          className={cn(
                            'cursor-pointer shadow px-3 py-2 hocus:bg-slate-100 bg-slate-50 dark:bg-navy-900/70 dark:hocus:bg-navy-600 text-slate-500 dark:text-navy-300 text-xs sm:text-sm rounded-t-md border-2 border-slate-300/90',
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Navigate back up one level
                            setPath((oldPath) => {
                              let newPath = [...oldPath];
                              newPath = newPath.slice(0, newPath.length - 1);
                              setCurrentLevel(newPath.length - 1);
                              return newPath;
                            });
                            setItemTopPositions((oldTopPositions) => {
                              let newTopPositions = [...oldTopPositions];
                              newTopPositions = newTopPositions.slice(
                                0,
                                newTopPositions.length - 1,
                              );
                              return newTopPositions;
                            });
                          }}
                        >
                          Back
                        </li>
                      )}
                      {(level === 0 ? options : path[level - 1]?.children)?.map(
                        (option, index) => (
                          <li
                            key={option.id}
                            className={cn(
                              'cursor-pointer px-3 py-2 shadow text-sm sm:text-base font-medium text-slate-800 dark:text-navy-100',
                              selectedOption?.id === option.id
                                ? 'bg-green-100 dark:bg-green-700'
                                : 'hocus:bg-slate-100 dark:hocus:bg-navy-600',
                              // If it's the last item for this level, add rounded bottom corners
                              level === path.length - 1 && 'rounded-b-md',
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleItemClick(option, level, index, e as any);
                            }}
                          >
                            {option.name}
                          </li>
                        ),
                      )}
                    </ul>
                  ),
              )}
            </div>

            {/* Backdrop blur */}
            {/* <div
              className="fixed inset-0 z-10 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            /> */}
          </>
        )}
      </div>
    </FormItem>
  );
}

// TSK: Accesibility | Keyboard Navigation | Animations | Typescript | Refactor
// I am proud of this. There are things we can make better for sure, but I need to move on for now as I spent way too much time on this already. I will come back to it later.
