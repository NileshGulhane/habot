import React from 'react';

function Link() {
  return (
    <div className='flex items-center justify-center'>  
      <div className="bg-sky-950 rounded-md overflow-hidden w-5/6  h-auto mt-16 ">
        <div className="flex flex-col md:flex-row items-center justify-start p-4 md:pl-12 py-8 md:py-12 ">
        <a href="https://www.youtube.com/" className="inline-block mx-4 md:mx-0 mb-8">
        <img
          src="youtube.png"
          alt="logo"
          className="rounded-md w-full md:w-96 h-auto mt-4"
        />
      </a>
          <div className="ml-4 md:ml-12 flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="flex flex-col items-center mr-4 md:mr-8 mt-4">
                <h2 className="text-orange-500 mb-0 font-bold text-xl ml-12">Buyer</h2>
                <img
                  src="ln.png"
                  className="w-32 h-1 mt-2 mb-3 md:mb-0 ml-12"
                  alt="lines"
                
                />
              </div>
              <h2 className="text-white font-bold text-xl mb-6  mt-4 ml-10">Supplier</h2>
            </div>
            <div className="flex flex-col mb-6 ml-16">
              <div className="flex items-center mb-4">
                <img
                  src="right.png"
                  className="h-5 w-5 mr-2"
                  alt="logo"
                />
                <p className="text-white text-lg">Post your requirements.</p>
              </div>
              <div className="flex items-center mb-4">
                <img
                  src="right.png"
                  className="h-5 w-5 mr-2"
                  alt="logo"
                />
                <p className="text-white text-lg">Sit back for multiple suppliers to contact you.</p>
              </div>
              <div className="flex items-center">
                <img
                  src="right.png"
                  className="h-5 w-5 mr-2"
                  alt="logo"
                />
                <p className="text-white text-lg">Choose among the suppliers based on the ratings and reviews.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Link;
