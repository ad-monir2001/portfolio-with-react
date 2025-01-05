import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className='bg-[#212428]'>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-132px)]'>
         <Hero></Hero>
         <About></About>
         <Skills></Skills>
         <Projects></Projects>
         <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
