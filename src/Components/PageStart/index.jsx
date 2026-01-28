import { useState, useRef, useEffect } from "react";
import { ChevronDown } from 'lucide-react';
import cloud1 from '../../assets/photo/PageStart/cloud1.png';
import cloud2 from '../../assets/photo/PageStart/cloud2.png';

import spy1 from '../../assets/photo/PageStart/spy1.png';
import spy2 from '../../assets/photo/PageStart/spy2.png';

import button from '../../assets/photo/PageStart/button.png';

export default function App() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("Русский");
  const menuRef = useRef(null);
  const [hover, setHover] = useState(false);

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-screen h-screen relative overflow-hidden bg-[#121212]">
      <p className="absolute right-0 bottom-0 text-white mb-1 mr-4">v 0 . 01 . 01</p>
      <img
        src={cloud1}
        className={`absolute top-0 right-0 transition-opacity duration-500 ${hover ? "opacity-0" : "opacity-100"}`}
        alt="cloud1"
      />
      <img
        src={spy2}
        className={`absolute top-0 right-0 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
        alt="spy1"
      />
      <img
        src={cloud2}
        className={`absolute bottom-0 left-0 transition-opacity duration-500 ${hover ? "opacity-0" : "opacity-100"}`}
        alt="cloud2"
      />
      <img
        src={spy1}
        className={`absolute bottom-0 left-0 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
        alt="spy2"
      />
      <div className='flex flex-col gap-32.5 items-center justify-center w-full h-full z-20 relative'>

        <div className='flex flex-col gap-7.5 items-center justify-center'>
          <p className={`text-[24px] ${hover ? "text-white" : "text-black"}`}>Игры</p>
          <div className='flex flex-col gap-2.5 items-center justify-center'>

            {/* Кнопка "Шпион" с hover */}
            <div
              className="group relative w-60.5 h-12.5"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className="absolute inset-0 bg-[#1E1E1E] rounded-[10px] transition-all duration-300 cursor-pointer border-[#9A0D1B] border-2"></div>
              <div
                className="absolute inset-0 rounded-[10px] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                style={{ backgroundImage: `url(${button})` }}
              ></div>
              <button className="relative w-full h-full text-white text-[18px] font-bold cursor-pointer">
                Шпион
              </button>
            </div>

            {/* Остальные кнопки */}
            <button className='text-[18px] cursor-no-drop w-60.5 h-12.5 bg-[#1E1E1E] border-2 border-black rounded-[10px] text-white'>Мафия(скоро)</button>
            <button className='text-[18px] cursor-no-drop w-60.5 h-12.5 bg-[#1E1E1E] border-2 border-black rounded-[10px] text-white'>Дурак(скоро)</button>

          </div>
        </div>

        {/* Выбор языка */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#1E1E1E] text-white rounded-[10px] cursor-pointer transition w-60.5 h-12.5 border-white border-2 flex items-center justify-center gap-1">
            Язык: {language} <ChevronDown/>
          </button>
          {open && (
            <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <button onClick={() => selectLanguage("Русский")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Русский
              </button>
              <button onClick={() => selectLanguage("English")}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-no-drop">
                English
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}