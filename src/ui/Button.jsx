function Button({ type = 'cancel' }) {
  const color =
    (type === 'cancel' && 'bg-red-400') ||
    (type === 'minimise' && 'bg-amber-400') ||
    (type === 'full-screen' && 'bg-green-400');

  const hoverColor =
    (type === 'cancel' && 'hover:bg-red-500') ||
    (type === 'minimise' && 'hover:bg-amber-500') ||
    (type === 'full-screen' && 'hover:bg-green-500');

  return (
    <button
      className={`w-5 h-5 rounded-full ${color} ${hoverColor} outline-none`}
    ></button>
  );
}

export default Button;
