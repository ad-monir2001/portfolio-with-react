import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='bg-[#212428]'>
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-132px)]'>
         <Hero></Hero>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
