
import FreeDomainPage from "./FreeDomainPage"
// import Mobial from "./Mobial"
import { Link } from 'react-router-dom';

   


const GetStartedSteps = () => {
  return (
  <>
    <div className="bg-[#f6f5f8] py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Build Your Site Anytime, Anywhere On Web <br className="hidden md:block" />
        Or Mobile App <span className="underline font-semibold">And Go Live Instantly</span>
      </h2>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-start gap-10 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center max-w-sm">
          <img src="/girl.webp" alt="Step 1" className="h-40" />
          <p className="mt-4 px-4 py-1 bg-yellow-400 text-black font-semibold rounded">
            Step 1
          </p>
          <p className="mt-2 text-gray-700">
            Get started for free by filling out the registration form. It only takes a minute.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center max-w-sm">
          <img src="/lep.webp" alt="Step 2" className="h-40" />
          <p className="mt-4 px-4 py-1 bg-yellow-400 text-black font-semibold rounded">
            Step 2
          </p>
          <p className="mt-2 text-gray-700">
            Fill out your basic business information like name of business and contact details
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center max-w-sm">
          <img src="/aro.webp" alt="Step 3" className="h-40" />
          <p className="mt-4 px-4 py-1 bg-yellow-400 text-black font-semibold rounded">
            Step 3
          </p>
          <p className="mt-2 text-gray-700">
            Click the "View my Site" button on the top menu and view your live website instantly.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10">
      <Link to={'/signUpPage'}>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md text-lg">
          Get Started For Free
        </button>
        </Link>
        <p className="text-sm text-gray-500 mt-2">No credit card required.</p>
      </div>
   
    </div>
   {/* <Mobial /> */}
    
    <FreeDomainPage />

    </>
  );
};

export default GetStartedSteps;










