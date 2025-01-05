import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="my-8 py-3 w-11/12 mx-auto space-y-4 px-2" id="about_me">
      <h1 className="font-heading text-white font-bold text-4xl text-center italic">
        <span className="border-b border-[#00adb5]">Projects</span>{' '}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4">
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/rent_car.png"
              alt="Rent a car"
              className="w-full relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Car Rent Service
          </p>
          <Link
            to="details/1"
            className="rounded-lg px-3 font-semibold py-2 bg-[#00adb5] text-white border-none text-sm md:text-lg  "
          >
            View Details
          </Link>
        </div>

        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/chillgamer.png"
              alt="Chill gamer"
              className="w-full relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Game reviews
          </p>
          <Link
            to="details/2"
            className="rounded-lg px-3 font-semibold py-2 bg-[#00adb5] text-white border-none text-sm md:text-lg  "
          >
            View Details
          </Link>
        </div>
        {/* card */}
        <div className="group bg-gradient-to-br from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-500 flex flex-col items-center rounded-xl p-6 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl shadow-lg md:w-full  mx-auto border border-gray-200">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur" />
            <img
              src="/public/coupon.png"
              alt="Coupon"
              className="w-full relative group-hover:scale-110 transition-transform duration-500 z-10"
            />
          </div>

          <p className="text-gray-800 font-semibold text-xl mt-4 mb-3 font-body">
            Coupon collector
          </p>
          <Link
            to="details/3"
            className="rounded-lg px-3 font-semibold py-2 bg-[#00adb5] text-white border-none text-sm md:text-lg  "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
