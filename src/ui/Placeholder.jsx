function Placeholder() {
  return (
    <div className='h-[75%] opacity-30 border-t-[0.5px] border-gray-900'>
      <video className='object-cover' autoPlay muted loop>
        <source src='./home-screen.mp4' type='video/mp4' />
        Your browser is not supported!
      </video>
    </div>
  );
}

export default Placeholder;
