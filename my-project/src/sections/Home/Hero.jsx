import Button from "../../components/Button";
import { arrowRight } from "../../assets/icons";
import Nav from "../../components/Nav";
import {Link} from "react-router-dom";
const Hero = () => {
  return (
    <>
    <Nav />
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container'
    >
      <div className='w-full max-xl:padding-x pt-28'>
        <h1 className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold text-coral-red'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            Fix The Road
          </span>
          <br />
          <span className='inline-block mt-3'>With</span>
          <br />
          <span className=' text-cyan-400 inline-block'>Fix It</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Help improve road safety by reporting and fixing road defects in your community.
        </p>
        <Link to="/Login"><Button label='Get Started'/></Link>
      </div>
      <div className='hidden xl:block xl:w-3/5 xl:h-auto'>

      </div>
    </section>
    </>
  );
};

export default Hero;
