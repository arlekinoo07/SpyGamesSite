import { useState } from "react";
import { Undo2 } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

import spy1 from '../../assets/photo/PageSpy/spy1.png';
import spy2 from '../../assets/photo/PageSpy/spy2.png';
import back from '../../assets/photo/PageSpy/back.png'

import button from '../../assets/photo/PageSpy/button.png'

export default function CardSlider() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < 2) setStep(step + 1);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black gap-6"
    style={{ backgroundImage: `url(${back})` }}>
      <img src={spy1} className="absolute left-0 bottom-0"></img>
      <img src={spy2} className="absolute right-0 bottom-0"></img>
      <div class="absolute inset-0 bg-black/60"></div>
      <div className="flex justify-center items-center gap-10 h-150 relative">
        {step === 0 && (
          <div className="w-117.75 h-139.5 rounded-[10px] flex flex-col items-center justify-center text-white bg-[#222222] transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn gap-36">
            <div className="flex flex-col items-center justify-center gap-7.5">
              <p className="text-[24px] font-bold">Шпион</p>
              <div className="gap-2.5 flex flex-col">
                <div
                    className="group relative w-90.5 h-12.5"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
                    <div className="absolute inset-0 bg-[#1E1E1E] rounded-[10px] transition-all duration-300 cursor-pointer border-[#9A0D1B] border-2"></div>
                    <div
                    className="absolute inset-0 rounded-[10px] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    style={{ backgroundImage: `url(${button})` }}></div>
                    <button className="relative w-full h-full text-white text-[18px] font-bold cursor-pointer"
                    onClick={next}>
                    Однопользовательская
                    </button>
                </div>
                <button className="border border-black w-90.5 h-12.5 bg-[#1E1E1E] cursor-no-drop rounded-[10px] text-[18px]">Многопользовательская(скоро)</button>
                <button className="border border-black w-90.5 h-12.5 bg-[#1E1E1E] cursor-no-drop rounded-[10px] text-[18px]">Настройки(скоро)</button>
              </div>
            </div>
            <button className="text-[18px] w-90.5 h-12.5 border border-white rounded-[10px] cursor-pointer hover:text-black hover:border-black hover:bg-white duration-300 flex gap-0.5 items-center justify-center">Назад <Undo2/></button>
          </div>
        )}

        {step === 1 && (
          <div className="w-117.75 h-139.5 rounded-[10px] flex flex-col items-center justify-center text-white bg-[#222222] transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn gap-8.75">
            <div className="flex flex-col items-center justify-center gap-10">
              <p className="text-[24px] font-bold">Настройки игры</p>
              <div className="flex flex-col gap-3">
                <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Категория <ChevronDown/></button>
                <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Кол-во игроков <ChevronDown/></button>
                <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Кол-во шпионов <ChevronDown/></button>
              </div>
            </div>
            <div className="flex gap-2.5 items-center justify-center">
              <button className="text-[16px] w-39.75 h-10.5 border border-white rounded-[10px] flex gap-0.5 items-center justify-center cursor-pointer hover:bg-white bg-[#1E1E1E] hover:border-black hover:text-black duration-300"
              onClick={prev}>Назад <Undo2/></button>
              <button className="text-[16px] w-39.75 h-10.5 border border-white rounded-[10px] flex gap-0.5 items-center justify-center cursor-pointer hover:bg-white bg-[#1E1E1E] hover:border-black hover:text-black duration-300"
              onClick={next}>Далее <ArrowBigRight/></button>
            </div>
          </div>
        )}

        {step === 2 && (
          <>
            <div className="w-117.75 h-139.5 rounded-[10px] flex flex-col items-center justify-center text-white bg-[#222222] transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn gap-8.75">
              <div className="flex flex-col items-center justify-center gap-10">
                <p className="text-[24px] font-bold">Настройки игры</p>
                <div className="flex flex-col gap-3">
                  <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Категория <ChevronDown/></button>
                  <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Кол-во игроков <ChevronDown/></button>
                  <button className="text-[18px] flex gap-1.25 w-82 h-14.25 bg-[#1E1E1E] border border-black rounded-[10px] items-center justify-center cursor-pointer hover:bg-[#363636] duration-300">Кол-во шпионов <ChevronDown/></button>
                </div>
              </div>
              <div className="flex gap-2.5 items-center justify-center">
                <button className="text-[16px] w-82 h-10.5 border border-white rounded-[10px] flex gap-0.5 items-center justify-center cursor-pointer hover:bg-white bg-[#1E1E1E] hover:border-black hover:text-black duration-300"
                onClick={prev}>Назад <Undo2/></button>
              </div>
            </div>
            <div className="w-117.75 h-139.5 rounded-xl flex flex-col items-center justify-center text-white text-xl bg-[#222222] transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn gap-5">
              <p className="text-[24px] font-bold">Имена игроков</p>
              <div className="items-center justify-center flex flex-col gap-3">
                <button className="border-black border bg-[#1E1E1E] w-[256px] h-11.5 rounded-[10px]"><input placeholder="Игрок 1" className="border-none focus:outline-2 focus:outline-black bg-transparent rounded-[10px] w-full h-full px-4"></input></button>
                <button className="border-black border bg-[#1E1E1E] w-[256px] h-11.5 rounded-[10px]"><input placeholder="Игрок 2" className="border-none focus:outline-2 focus:outline-black bg-transparent rounded-[10px] w-full h-full px-4"></input></button>
                <button className="border-black border bg-[#1E1E1E] w-[256px] h-11.5 rounded-[10px]"><input placeholder="Игрок 3" className="border-none focus:outline-2 focus:outline-black bg-transparent rounded-[10px] w-full h-full px-4"></input></button>
                <button className="border-black border bg-[#1E1E1E] w-[256px] h-11.5 rounded-[10px]"><input placeholder="Игрок 4" className="border-none focus:outline-2 focus:outline-black bg-transparent rounded-[10px] w-full h-full px-4"></input></button>
                <button className="border-black border bg-[#1E1E1E] w-[256px] h-11.5 rounded-[10px]"><input placeholder="Игрок 5" className="border-none focus:outline-2 focus:outline-black bg-transparent rounded-[10px] w-full h-full px-4"></input></button>
              </div>
              <button className="w-[256px] h-11.5 bg-[#1E1E1E] rounded-[10px] text-[18px] border border-white hover:border-black hover:bg-white hover:text-black duration-300 cursor-pointer">Начать игру</button>
            </div>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s forwards;
          }
        `}
      </style>
    </div>
  );
}