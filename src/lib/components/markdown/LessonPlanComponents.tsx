const H1 = ({ ...props }) => (
  <h1
    className="print-text mb-4 border-b-4 border-slate-300 pb-3 text-2xl font-bold text-slate-900 dark:border-navy-600 dark:text-navy-50 print:max-w-xl print:border-b xl:text-3xl"
    {...props}
  />
);

const H2 = ({ ...props }) => (
  <h2
    className="print-text pb-2 text-xl font-bold text-slate-800 dark:text-navy-100 md:text-2xl xl:text-3xl"
    {...props}
  />
);

const H3 = ({ ...props }) => (
  <h3
    className="print-text pb-1 text-lg font-semibold text-slate-800/90 dark:text-navy-50/80 md:text-xl xl:text-2xl"
    {...props}
  />
);

const H4 = ({ ...props }) => (
  <h4
    className="print-text font-medium text-green-600 dark:text-green-500 md:text-lg xl:text-xl"
    {...props}
  />
);

const H5 = ({ ...props }) => (
  <h5
    className="print-text font-medium text-blue-600 dark:text-blue-500 xl:text-lg"
    {...props}
  />
);

const H6 = ({ ...props }) => (
  <h6
    className="print-text font-medium text-green-600 md:text-lg xl:text-xl"
    {...props}
  />
);

const P = ({ ...props }) => (
  <p className="print-text py-2 text-slate-700 dark:text-navy-100" {...props} />
);

const A = ({ ...props }) => (
  <a className="print-text text-blue-600 dark:text-blue-400" {...props} />
);

const UL = ({ ordered, ...props }: any) => (
  <ul
    className="mb-3 list-outside list-disc pl-4 text-slate-700 dark:text-navy-200"
    {...props}
  />
);

const OL = ({ ordered, ...props }: any) => (
  <ol
    className="my-3 list-inside list-decimal pl-4 text-slate-700 dark:text-navy-200"
    {...props}
  />
);

const LI = ({ ordered, ...props }: any) => (
  <li className="list-disc" {...props} />
);

const Blockquote = ({ ...props }) => (
  <blockquote
    className="border-l-4 border-slate-300 pl-2 text-slate-700 dark:border-navy-600 dark:text-navy-200"
    {...props}
  />
);

const DIV = ({ ...props }) => (
  <div className="space-y-2 text-slate-700 dark:text-navy-200" {...props} />
);

export const lessonPlanComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: Blockquote,
  div: DIV,
};
