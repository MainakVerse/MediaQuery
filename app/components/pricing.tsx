import React from "react";

const Pricing = () => {
  return (
    <div className="font-[sans-serif] text-[#333] relative before:absolute before:w-full before:h-1/2 max-lg:before:h-1/4 before:bg-gradient-to-r before:from-gray-700 before:via-purple-700 before:to-gray-700 before:z-10">
      <div className="max-w-6xl mx-auto py-10 px-4 relative z-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Choose a Subscription
          </h2>
          <p className="text-sm text-white">
            choose a plan tailored to your needs
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 max-sm:max-w-sm max-sm:mx-auto">
          <div className="bg-white rounded shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-6 lg:scale-95">
            <div className="flex items-start">
              <h3 className="text-lg font-extrabold border-b-2 border-orange-500 pb-1">
                Starter
              </h3>
              <div className="ml-auto">
                <h3 className="text-lg font-extrabold">$15.00/Mon</h3>
                <p className="text-xs">7-Day Free Trial</p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-base font-bold mb-4">Plan Includes</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  500 Post generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  500 Credits
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Monthly 100 Credits Free
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Dedicated Server
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Priority Generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  50GB Cloud Storage
                </li>
              </ul>
              <button
                type="button"
                className="w-full mt-10 px-2 py-2 text-sm  border border-gray-700 hover:border-orange-500 bg-transparent rounded"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="bg-white rounded shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-6 lg:scale-105">
            <div className="flex items-start">
              <h3 className="text-lg font-extrabold border-b-2 border-orange-500 pb-1">
                Business
              </h3>
              <div className="ml-auto">
                <h3 className="text-lg font-extrabold">$45.00/Mon</h3>
                <p className="text-xs">7-Day Free Trial</p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-base font-bold mb-4">Plan Includes</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  5000 Post generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  4000 Credits
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Monthly 2000 Credits Free
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Dedicated Server
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Priority Generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  1000GB Cloud Storage
                </li>
              </ul>
              <button
                type="button"
                className="w-full mt-10 px-2 py-2 text-sm  border border-gray-700 hover:border-orange-500 bg-transparent rounded"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="bg-white rounded shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] p-6 lg:scale-95">
            <div className="flex items-start">
              <h3 className="text-lg font-extrabold border-b-2 border-orange-500 pb-1">
                Pro
              </h3>
              <div className="ml-auto">
                <h3 className="text-lg font-extrabold">$20.00/Mon</h3>
                <p className="text-xs">7-Day Free Trial</p>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-base font-bold mb-4">Plan Includes</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  30000 Post generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  2000 Credits
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Monthly 1000 Credits Free
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Customer Support
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Dedicated Server
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  Priority Generations
                </li>
                <li className="flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    className="mr-4 fill-green-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                  500GB Cloud Storage
                </li>
              </ul>
              <button
                type="button"
                className="w-full mt-10 px-2 py-2 text-sm  border border-gray-700 hover:border-orange-500 bg-transparent rounded"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
