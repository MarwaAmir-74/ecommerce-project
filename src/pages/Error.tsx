
import { Link } from "react-router-dom";
import {LottieHandler} from "@/component/feedback/lottieHandler/lottieHandler";

const Error = () => {
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
       <LottieHandler type='error'/>
       <Link to='/' replace={true}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
        Go Back to Safety
      </Link>
    </div>
  );
};

export default Error;
