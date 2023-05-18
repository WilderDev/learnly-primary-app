import cn from '@/lib/common/cn';

// * Components
// Default Props
interface IProps {
  children: React.ReactNode;
  className?: string;
}

// Table Component
export function Table({ children, className }: IProps) {
  return (
    <table className={cn('min-w-full overflow-x-auto text-left', className)}>
      {children}
    </table>
  );
}

// Table Head Component
Table.Head = function TableHead({ children, className }: IProps) {
  return <thead className={cn('', className)}>{children}</thead>;
};

// Table Body Component
Table.Body = function TableBody({ children, className }: IProps) {
  return <tbody className={cn('', className)}>{children}</tbody>;
};

// Table Row Component
Table.Row = function TableRow({ children, className }: IProps) {
  return (
    <tr className={cn('border-y border-transparent', className)}>{children}</tr>
  );
};

// Table Header Component Props
interface ITableHeaderProps {
  children: React.ReactNode;
  isFirst: boolean;
  isLast: boolean;
  className?: string;
}

// Table Header Component
Table.Header = function TableHeader({
  children,
  isFirst,
  isLast,
  className,
}: ITableHeaderProps) {
  return (
    <th
      className={cn(
        'whitespace-nowrap bg-slate-200 px-4 py-3 text-sm font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5',
        isFirst && 'rounded-tl-lg',
        isLast && 'rounded-tr-lg',
        className,
      )}
    >
      {children}
    </th>
  );
};

// Table Cell Component Props
interface ITableCellProps {
  children: React.ReactNode;
  className?: string;
  type?: 'text' | 'tags';
}

// Table Cell Component
Table.Cell = function TableCell({
  children,
  type = 'text',
  className,
}: ITableCellProps) {
  return (
    <td
      className={cn(
        'px-4 py-3 sm:px-5',
        type === 'text' && 'font-medium text-slate-700 dark:text-navy-100',
        type === 'tags' && 'space-x-1',
        className,
      )}
    >
      {children}
    </td>
  );
};
