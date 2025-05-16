import React from 'react'

const HeaderSelection = () => {
    return <>

         <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Left side with image and overlay */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto">
        <img
          src="/b0c8da52-ad6c-4754-8866-357982ae7bcc.png"
          alt="Support team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply opacity-60"></div>
      </div>

      {/* Right side content */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-xl">
          <p className="text-indigo-400 text-sm font-semibold mb-2">
            Award winning support
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We’re here to help
          </h1>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium text-white transition">
            Visit the help center
          </button>
        </div>
      </div>
    </div>

    </>
}

export default HeaderSelection