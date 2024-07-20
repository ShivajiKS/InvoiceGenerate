"use client";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] ">
      <div className="text-center">
        <h1 className="text-xl md:text-4xl font-bold mb-4 underline decoration-wavy decoration-orange-500	">
          404 - Page Not Found
        </h1>
        <p className="font-bold text-sm md:text-base mb-6">
          The page you are looking for does not exist..
        </p>
        <div>
          <button
            onClick={() => window.history.back()}
            className="hover:bg-zinc-700 text-black hover:text-white font-semibold py-2 px-12 ml-10 lg:ml-20 rounded-xl text-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 flex items-center space-x-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            <div> go back</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
