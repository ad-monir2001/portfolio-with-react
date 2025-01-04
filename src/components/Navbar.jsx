import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = (
    <div className="flex items-center  gap-3 lg:flex-row flex-col">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-red-500 text-[#00ADB5] font-heading text-lg'
            : 'text-white font-heading text-lg'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="#education"
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-red-500 text-[#00ADB5] font-heading text-lg'
            : 'text-white font-heading text-lg'
        }
      >
        Education
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-red-500 text-[#00ADB5] font-heading text-lg'
            : 'text-white font-heading text-lg'
        }
      >
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-red-500 text-[#00ADB5] font-heading text-lg'
            : 'text-white font-heading text-lg'
        }
      >
        Projects
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? 'border-b-2 border-red-500 text-[#00ADB5] font-heading text-lg'
            : 'text-white font-heading text-lg'
        }
      >
        Contact
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-[#212428] text-white">
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
        <Link className="text-2xl font-heading">
          <span className="font-bold text-3xl text-[#00ADB5]">M.</span>Monir
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#00adb5] text-white border-none" download href="/src/assets/Resume-demo.pdf">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
