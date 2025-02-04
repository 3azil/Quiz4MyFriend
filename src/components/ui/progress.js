const Progress = ({ value, className }) => {
  return (
    <div className={`relative pt-1 w-full ${className}`}>
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="font-semibold inline-block py-1 text-xs uppercase">
            {Math.round(value)}%
          </span>
        </div>
      </div>
      <div className="flex mb-2">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
