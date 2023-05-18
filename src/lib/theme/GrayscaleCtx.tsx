'use client';

// * Imports
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

// * Initialization
// Props
interface ICtxProps {
  isGrayscale: boolean;
  toggle: () => void;
}

// Initial State
const initialState: ICtxProps = {
  isGrayscale: false,
  toggle: () => {},
};

// Context
const GrayscaleContext = createContext<ICtxProps>(initialState);

// * Provider
export const GrayscaleProvider = ({ children }: PropsWithChildren) => {
  const [isGrayscale, setGrayscale] = useState(false); // Create state to hold the theme

  // On mount, read the preferred theme from the persistence
  useEffect(() => {
    const isGray = localStorage.getItem('grayscale') === 'true' || false;
    setGrayscale(isGray);

    isGray
      ? (document.body.dataset.grayscale = 'true')
      : delete document.body.dataset.grayscale;
  }, [isGrayscale]);

  // To toggle between grayscale
  const toggle = () => {
    const isGray = !isGrayscale;

    localStorage.setItem('grayscale', JSON.stringify(isGray));

    setGrayscale(isGray);
  };

  return (
    <GrayscaleContext.Provider value={{ isGrayscale, toggle }}>
      {children}
    </GrayscaleContext.Provider>
  );
};

export const useGrayscale = () => useContext(GrayscaleContext);
