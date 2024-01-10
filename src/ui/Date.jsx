function Date({ date }) {
  const dots = Array.from({ length: 16 }, (_, i) => (
    <span key={i}>&middot;</span>
  ));
  return (
    <div className='grid grid-cols-[2fr_6fr_2fr] grid-rows-1 gap-2 items-center justify-items-center text-gray-400'>
      <p className='overflow-hidden'>{dots}</p>
      <p className='uppercase font-bold text-sm tracking-[0.15rem]'>{date}</p>
      <p className='overflow-hidden'>{dots}</p>
    </div>
  );
}

export default Date;
