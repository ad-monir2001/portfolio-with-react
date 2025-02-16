import AnimatedContent from './AnimatedContent';
const Skills = () => {
  return (
    <section id="skills">
      <div className="my-8 py-3 w-11/12 mx-auto space-y-4 px-2">
        <h1 className="font-heading text-white font-bold text-4xl text-center italic">
          <span className="border-b border-[#00adb5]">Skills</span>{' '}
        </h1>

        {/* Frontend */}
        <p className="italic text-center pt-2 text-3xl font-body text-[#00adb5]">
          Frontend:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            {/* card */}
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/react.png"
                  alt="react"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                React.js
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/tailwind.png"
                  alt="react"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                Tailwind CSS
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/es6.png"
                  alt="JavaScript"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                JavaScript (ES6+)
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/html.jpg"
                  alt="Html"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                HTML5
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/css.png"
                  alt="css"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                CSS3
              </p>
            </div>
          </AnimatedContent>
        </div>

        {/* Backend and database */}
        <p className="italic text-center pt-2 text-3xl font-body text-[#00adb5]">
          Backend & Database:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/firebase.png"
                  alt="Firebase"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                Firebase
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/mongodb.png"
                  alt="mongodb"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                MongoDB
              </p>
            </div>
          </AnimatedContent>
        </div>
        {/* version control */}
        <p className="italic text-center pt-2 text-3xl font-body text-[#00adb5]">
          Version Control:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/git.png"
                  alt="git"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                Git
              </p>
            </div>
          </AnimatedContent>
          {/* card */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg w-[250px] md:w-full  mx-auto border border-gray-200">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
                <img
                  src="/github.jpg"
                  alt="github"
                  className="w-24 h-24 relative group-hover:scale-110 transition-transform duration-500 z-10"
                />
              </div>

              <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
                GitHub
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Skills;
