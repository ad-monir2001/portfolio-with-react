const Skills = () => {
  return (
    <div className="my-8 py-3 w-11/12 mx-auto space-y-4 px-2" id="about_me">
      <h1 className="font-heading text-white font-bold text-4xl text-center italic">
        <span className="border-b border-[#00adb5]">Skills</span>{' '}
      </h1>

      {/* Frontend */}
      <p className="italic text-center pt-2 text-4xl font-body text-[#00adb5]">
        Frontend:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/react.png"
              alt="react"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            React.js
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '85%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                85%
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/tailwind.png"
              alt="react"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Tailwind CSS
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '95%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                95%
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/es6.png"
              alt="JavaScript"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            JavaScript (ES6+)
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '90%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                90%
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/html.jpg"
              alt="Html"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            HTML5
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '96%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                96%
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/css.png"
              alt="css"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            CSS3
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '95%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                95%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Backend and database */}
      <p className="italic text-center pt-2 text-4xl font-body text-[#00adb5]">
        Backend & Database:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/firebase.png"
              alt="Firebase"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Firebase
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '89%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                89%
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/mongodb.png"
              alt="mongodb"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            MongoDB
          </p>

          <div className="flex flex-col items-center w-full space-y-2">
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                style={{ width: '82%' }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold text-lg">
                82%
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* version control */}
      <p className="italic text-center pt-2 text-4xl font-body text-[#00adb5]">
        Version Control:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/git.png"
              alt="git"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Git
          </p>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/github.jpg"
              alt="github"
              className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            GitHub
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
