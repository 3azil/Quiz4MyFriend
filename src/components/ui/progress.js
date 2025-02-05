const Progress = ({ value, className }) => {
  return (
    <div className={`relative pt-1 w-full ${className}`}>
      <div className="flex mb-2 items-center justify-between">
        <span className="font-semibold inline-block py-1 text-xs uppercase">
          {Math.round(value)}%
        </span>
      </div>
      <div className="flex mb-2">
        {/* Контейнер с обводкой:
            - h-[36px] — общая высота контейнера,
            - border-[5px] — толщина границы 5px,
            - box-border — учитываем границу во внутренних размерах,
            - rounded-full — скругление краёв */}
        <div className="w-full bg-gray-100 rounded-full border-[3px] border-[#25d031] box-border h-[36px]">
          {/* Индикатор прогресса:
              - h-full — займет всю доступную высоту внутренней области (26px),
              - rounded-full для ровного скругления */}
          <div
            className="bg-green-500 rounded-full h-full"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
