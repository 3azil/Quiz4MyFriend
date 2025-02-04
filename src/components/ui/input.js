const Input = ({ value, onChange, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`border p-2 rounded w-full text-center ${className}`}
    />
  );
};

export default Input;
