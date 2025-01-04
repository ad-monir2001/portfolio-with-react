import { FiDownload } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className=" mx-auto w-11/12 gap-10 px-2">
      <div className="flex flex-col justify-between md:flex-row items-center mx-auto my-4">
        {/* tests and links*/}
        <div className="text-white space-y-4 w-[590px]">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold bg-gradient-to-br from-[#df8908] to-purple-600 bg-clip-text text-transparent">
            I'm Moniruzzaman Monir,
          </h1>
          <span className="md:text-2xl text-xl font-body italic text-[#00ADB5]">
            Frontend Developer
          </span>
          <p className="font-body">
            {' '}
            A passionate front-end developer with experience creating
            responsive, user-friendly websites. Proficient in HTML, CSS,
            JavaScript, React js, and frameworks like Tailwind CSS, I specialize
            in crafting clean, modern, and intuitive interfaces. Whether you're
            looking to bring your design to life or improve your website's
            performance, I'm here to help!"
          </p>
        </div>
        {/* images */}
        <div>
          <img className="" src="/public/39.png" alt="Moniruzzaman Monir" />
        </div>
      </div>
      <div className="flex gap-4">
        <a
          className="rounded px-3 font-semibold py-2 bg-[#00adb5] flex items-center gap-1 justify-center text-white border-none text-sm md:text-lg "
          download
          href="/src/assets/Resume-demo.pdf"
        >
          <FiDownload />
          Resume
        </a>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/ad-monir2001"
          className="text-white text-xl p-3 rounded-lg bg-[#00abd5]"
        >
          <GrLinkedin />
        </Link>
        <Link
          target="_blank"
          to="https://github.com/ad-monir2001"
          className="text-white text-xl p-3 rounded-lg bg-[#00abd5]"
        >
          <FaGithub />
        </Link>
        <Link
          target="_blank"
          to="https://www.facebook.com/mdmoniruzzaman.monir.73700"
          className="text-white text-xl p-3 rounded-lg bg-[#00abd5]"
        >
          <FaFacebookF />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
