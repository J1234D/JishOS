import React from "react";

function WindowGUI({ title, onClose, children }) {
  return (
    <div className="w-md bg-sky-100/10
                    backdrop-blur-2xl
                    backdrop-saturate-150
                    border border-white/20
                    ring-1 ring-white/10
                    rounded-3xl
                    shadow-2xl shadow-sky-900/10
                    overflow-hidden
                    transition-all duration-300
                    ">
      <div className="flex items-center justify-between text-3xl border-b border-white/20">
        <div className="bg-white/10
                        backdrop-blur-xl
                        border-b border-white/15">{title}</div>
        <button className="hover:bg-red-600 p-4 rounded" onClick={()=>onClose()}>
          X
        </button>
      </div>
      <div className="p-8">
       {children}
      </div>
    </div>
  );
}

export default WindowGUI;
