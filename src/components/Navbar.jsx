import { FiDownload } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const links = (
    <div className="flex items-center  gap-3 lg:flex-row flex-col">
      <NavLink
        to="#about_me"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about_me');
        }}
        className=" text-[#00ADB5] 
             font-heading text-lg hover:transform transition duration-300 hover:scale-110"
      >
        About me
      </NavLink>
      <NavLink
        to="#skills"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('skills');
        }}
        className=" text-[#00ADB5] 
             font-heading text-lg hover:transform transition duration-300 hover:scale-110"
      >
        Skills
      </NavLink>
      <NavLink
        to="#projects"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}
        className=" text-[#00ADB5] 
             font-heading text-lg hover:transform transition duration-300 hover:scale-110"
      >
        Projects
      </NavLink>
      <NavLink
        to="contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}
        className=" text-[#00ADB5] 
             font-heading text-lg hover:transform transition duration-300 hover:scale-110"
      >
        Contact
      </NavLink>
    </div>
  );
  return (
    <div className=" bg-[#212428] text-white sticky z-50 top-0 border-b">
      <div className="w-11/12 mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#212428] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-heading">
            <span className="font-bold md:text-3xl text-[#00ADB5]">M.</span>
            Monir
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            className="rounded px-3 font-semibold py-2 bg-[#00adb5] text-white border-none text-sm md:text-lg flex items-center gap-1 hover:transform transition duration-300 hover:scale-110"
            download
            href="/src/assets/Resume-demo.pdf"
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
