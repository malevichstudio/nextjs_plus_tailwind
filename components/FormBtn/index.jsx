import { FiLock } from 'react-icons/fi';
import { BeatLoader } from 'react-spinners';

export default function FormBtn({ title, submitting }) {
  return (
    <button
      type='submit'
      disabled={submitting}
      className='mt-4 flex h-10 w-full items-center justify-center overflow-hidden rounded-md border-none bg-primary px-8 hover:bg-primaryHover'
    >
      {submitting ? (
        <BeatLoader color='#fff' size={16} />
      ) : (
        <>
          <FiLock className='text-white' />
          <span className='pl-2 font-medium text-white'>{title}</span>
        </>
      )}
    </button>
  );
}
