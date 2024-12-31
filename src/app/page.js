'use client';
import { useState } from 'react';
import SecondSection from '@/components/SecondSection';
import FirstSection from '@/components/FirstSection';
import ThirdySection from '@/components/ThirdySection';
import WorkSection from '@/components/FourSection';
import FifthSection from '@/components/FiveSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>

    <FirstSection/>
   
    <ThirdySection/>
    <WorkSection/>
    <FifthSection/>
    <Footer/>
    </>

  ) 
}