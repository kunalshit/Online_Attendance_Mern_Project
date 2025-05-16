import React from 'react'
import jobimage from '/src/Images/job.png';
import Logoweb from '/src/Images/Logoweb.png';

const HeaderSelection = () => {
    return <>

        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
            {/* Left side with image and overlay */}
            <div className="relative w-full md:w-1/2 h-96 md:h-auto">
                <img
                    src={jobimage}
                    alt="Support team"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 mix-blend-multiply opacity-60"></div>
            </div>

            {/* Right side content */}

            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
                <div className="max-w-xl">
                    <img
                        src={Logoweb}
                        alt="Support team"
                        className=" w-48 h-full object-cover"
                    />
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to S.L pvt.ltd
                    </h3>
                    <p className="text-gray-250 mb-6">
                        to our group! We hope for a long and successful journey with you.
                        We hope you'll feel right at home with us. Never feel shy about sharing your thoughts and ideas and let's solve those problems together!
                    </p>
                    <button className="bg-blue-900 hover:bg-gray-300 hover:text-black px-6 py-3 rounded-lg font-medium text-white transition">
                        Start
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default HeaderSelection