import { useState, useRef, useEffect } from "react";
import { Undo2 } from 'lucide-react';
import spy1 from '../../assets/photo/PageSpy/spy1.png';
import spy2 from '../../assets/photo/PageSpy/spy2.png';

import back from '../../assets/photo/PageSpy/back.png'

import button from '../../assets/photo/PageSpy/button.png'

export default function App() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <div className="flex flex-col gap-36 items-center justify-center h-screen w-screen bg-cover bg-center bg-no-repeat relative"
    style={{ backgroundImage: `url(${back})` }}>
        <img src={spy1} className='absolute bottom-0 left-0 z-20'></img>
        <img src={spy2} className='absolute bottom-0 right-0 z-20'></img>
        <div className='flex flex-col gap-7.5 items-center justify-center relative z-30'>
            <p className='text-[24px] font-bold text-white'>Шпион</p>
            <div className='flex flex-col gap-2.5'>
                <div
                    className="group relative w-90.5 h-12.5"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className="absolute inset-0 bg-[#1E1E1E] rounded-[10px] transition-all duration-300 cursor-pointer border-[#9A0D1B] border-2"></div>
                    <div
                    className="absolute inset-0 rounded-[10px] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    style={{ backgroundImage: `url(${button})` }}></div>
                    <button className="relative w-full h-full text-white text-[18px] font-bold cursor-pointer">
                    Однопользовательская
                    </button>
                </div>
                <button className='bg-[#1E1E1E] w-90.5 h-12.5 border-2 text-white text-[18px] rounded-[10px] cursor-no-drop border-black'>Многопользовательская(скоро)</button>
                <button className='bg-[#1E1E1E] w-90.5 h-12.5 border-2 text-white text-[18px] rounded-[10px] cursor-no-drop border-black'>Настройки(скоро)</button>
            </div>
        </div>
        <button className='flex text-white text-[18px] gap-0.5 w-90.5 h-12.5 border-2 border-white rounded-[10px] items-center justify-center cursor-pointer relative z-30 hover:text-black hover:bg-white duration-300'>Назад <Undo2/></button>
    </div>
  );
}