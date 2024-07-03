import React from 'react';

function Centre() {
  return (
    <div className="p-4">
      <div className="lg:flex lg:flex-row lg:space-x-8">
        <div className="flex-1 ml-4 sm:ml-20 mt-16">
          <h3 className="font-bold text-xl sm:text-4xl mt-4 sm:mt-10">
            Ready to dive into
            <span className='text-blue-950 ml-2 sm:ml-3'>HABOT?</span>
          </h3>
          <h2 className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl lg:text-lg">
            Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.
          </h2>
          <button className="w-full sm:w-64 mt-4 sm:mt-6 font-bold bg-green-700 text-white px-4 py-2 rounded">
            Sign up Today! →
          </button>
        </div>

        <div className="hidden lg:flex flex-col space-y-4 mt-8 lg:mt-0 lg:ml-auto lg:w-112">
          <div className="flex flex-wrap space-x-6 justify-center lg:justify-end lg:mr-20 lg:mt-20">
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-6 rounded">
              <span>Abu Dhabi</span>
            </button>
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
              <span>Dubai</span>
            </button>
          </div>
          <div className="flex flex-wrap space-x-6 justify-center lg:justify-end lg:mr-20 lg:mt-20">
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
              <span>Sharjah & Ajman</span>
            </button>
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
              <span>Fujairah</span>
            </button>
          </div>
          <div className="flex flex-wrap space-x-6 justify-center lg:justify-end lg:mr-20 lg:mt-20">
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
              <span>Ras AI Khaimah</span>
            </button>
            <button className="w-40 sm:w-48 lg:w-64 h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
              <span>Umm AI Quwain</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden mt-8">
        <div className="grid grid-cols-1 gap-4">
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Abu Dhabi</span>
          </button>
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Dubai</span>
          </button>
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Sharjah & Ajman</span>
          </button>
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Fujairah</span>
          </button>
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Ras AI Khaimah</span>
          </button>
          <button className="w-full h-12 sm:h-14 border-2 border-yellow-500 text-black hover:bg-orange-400 hover:text-white font-semibold py-2 px-4 rounded">
            <span>Umm AI Quwain</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Centre;
