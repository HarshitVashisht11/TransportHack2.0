import React from 'react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Nav from './Top';
import road from './77.jpg';

const Dashboard = () => {
  return (
    <>
      <Nav />
      <section
        id='report-page'
        className='w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container'
      >
        <div className='w-full xl:w-2/5 max-xl:padding-x pt-28'>
          <h1 className='font-palanquin text-5xl font-bold text-coral-red'>
            Submit a Road Condition Report
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Help us make your community's roads safer by reporting any road defects or hazards you encounter.
          </p>
          <Link to='/submit-report'>
            <Button label='Submit a Report' />
          </Link>
        </div>
        <div className='hidden xl:block xl:w-3/5 xl:h-auto'>
          <img
            src={road}
            alt='Road'
            className='w-full h-auto max-h-[400px] rounded-lg'
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
