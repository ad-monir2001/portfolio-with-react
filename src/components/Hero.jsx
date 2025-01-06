import { FiDownload } from 'react-icons/fi';

import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import BlurText from './BlurText';
import SplitText from './SplitText';

const Hero = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className=" mx-auto w-11/12 gap-10 px-2">
      

      <div className="flex flex-col justify-between md:flex-row items-center gap-8 mx-auto my-4">
        {/* tests and links*/}
        <div className="text-white space-y-4 md:w-[700px]">
          <BlurText
            text="Welcome to my portfolio!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl"
          />
          

          <SplitText
            text="I'm Moniruzzaman Monir,"
            className="text-5xl font-semibold font-heading  text-center bg-gradient-to-br from-red-500 to-purple-600 bg-clip-text "
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <br />
          <span className="md:text-2xl text-xl font-body italic text-[#00ADB5]">
            <Typewriter
              words={['Frontend Developer', 'MERN Stack Developer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </span>
          <div className="flex gap-4 pt-4">
            <a
              className="rounded px-3 font-semibold py-2 bg-[#00adb5] flex items-center gap-1 justify-center text-white border-none text-sm md:text-lg "
              download
              href="/Resume-demo.pdf"
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
        {/* images */}
        <div>
          <img className="" src="/monir.png" alt="Moniruzzaman Monir" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
