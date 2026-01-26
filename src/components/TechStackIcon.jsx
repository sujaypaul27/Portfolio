import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
     
<div className="flex flex-col items-center justify-center text-center gap-1 min-h-[4.5rem]">
  {/* Title */}
  <span className="text-slate-300 font-semibold text-sm md:text-base leading-tight">
    {Language.split(" (")[0]}
  </span>

  {/* Description */}
  {Language.includes("(") && (
    <span className="text-slate-400 text-xs md:text-sm leading-tight">
      ({Language.split("(")[1]}
    </span>
  )}
</div>



    </div>
  );
};

export default TechStackIcon; 