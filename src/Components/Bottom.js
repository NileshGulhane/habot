import React from 'react';

function Bottom() {
    return (
        <div>
            <div className='bg-cyan-50 h-auto md:h-36 w-full mt-20 p-4 md:p-0 mb-10'>
                <div className='flex flex-col md:flex-row items-center md:justify-between'>
                    <p className='flex font-bold text-2xl mt-4 md:mt-8 text-center md:text-left md:ml-32 mb-4'>
                        Let Suppliers  <p className=''>Find You
                            <img
                                src='ln.png'
                                alt='logo'
                                className='h-1 w-24 ml-3'
                            />
                        </p>
                    </p>
                    <button className="bg-orange-400 border border-orange-400 font-bold w-36 mb-4 md:mb-10 px-4 py-2 text-white rounded mt-4 md:mt-16 md:mr-32">
                        Get Verified
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
