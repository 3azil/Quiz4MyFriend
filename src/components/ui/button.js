const Button = ({ onClick, children, className, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
