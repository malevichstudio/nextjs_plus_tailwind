export const Section = ({ children }) => {
  return <section className='flex justify-center xl:pt-12'>{children}</section>;
};

export const Plate = ({ children }) => {
  return <div className='w-full max-w-3xl rounded-xl border bg-white p-6'>{children}</div>;
};

export const Divider = () => {
  return (
    <div className='flex w-full items-center justify-between py-4'>
      <div className='h-px w-full bg-slate-300'></div>
      <span className='mx-6 uppercase text-gray-400'>Or</span>
      <div className='h-px w-full bg-slate-300'></div>
    </div>
  );
};
