export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center gap-4 min-h-[86vh]'>
      <span className='loading loading-ring w-24'></span>
      <h2 className='text-xl text-gray-400'>Loading News...</h2>
    </div>
  );
}
