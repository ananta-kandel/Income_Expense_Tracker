import React from 'react'
import { Link } from 'react-router-dom';
import background from "../image/background.png"
export default function Home() {
  return (
    <>
    <div className='hero-section md:flex  p-[4rem] justify-center items-center'>
       <div class="hero-para flex flex-column justify-center  items-center text-white"> 
        <p className='text-center'>Explore Our Product | <Link to ="/about">Explore</Link></p>
        <h1>Managing Money IsNot Easy</h1>
       </div>
       <div className='hero-image md:h-[3
        0rem] md:ml-[13rem] md:w-[40rem] w-[15rem] h-[15rem] overflow-hidden m-[20px] rounded-t bg-white'>
                <img className='w-[100%] h-[100%]' src={background} alt="image" />
       </div>
    </div>
    </>
  )
}
