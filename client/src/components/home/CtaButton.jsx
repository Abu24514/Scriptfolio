import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
const CtaButton = () => {
  return (
    
     <Link to ='/app'
      className=" mt-5 sm:mt-8
      inline-flex items-center bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-800 text-slate-100 pl-2 pr-6 sm:pr-8 py-2 rounded-full text-sm sm:text-base font-medium transition-colors group capitalize"
    >
      {/* Icon Circle */}
      <div className="size-8 sm:size-9 rounded-full bg-white text-indigo-600 mr-3 sm:mr-4 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors  ">
        <MoveRight size={18} strokeWidth={2} />
      </div>

      Build my resume
    </Link>
  );
};

export default CtaButton;