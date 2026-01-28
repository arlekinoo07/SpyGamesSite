// import React from 'react'
// import { Undo2 } from 'lucide-react';
// import { ArrowBigRight } from 'lucide-react';
// import { ChevronDown } from 'lucide-react';
// const Help = () => {
//   return (
//     <div className='w-screen h-screen flex flex-col items-center justify-center bg-black'>
//         <div className='w-117.75 h-139.5 text-white flex flex-col gap-8.75 bg-[#222222] rounded-[10px] items-center justify-center'>
//             <div className='flex flex-col gap-9.75 items-center justify-center'>
//                 <p className='text-[24px] font-bold'>Настройки игры</p>
//                 <div className='flex flex-col gap-3'>
//                     <button className='bg-[#1E1E1E] w-82 h-14.25 rounded-[10px] flex items-center justify-center cursor-pointer border border-black hover:bg-white hover:text-black duration-300 text-[18px]'>Категория <ChevronDown/></button>
//                     <button className='bg-[#1E1E1E] w-82 h-14.25 rounded-[10px] flex items-center justify-center cursor-pointer border border-black hover:bg-white hover:text-black duration-300 text-[18px]'>Кол-во игроков <ChevronDown/></button>
//                     <button className='bg-[#1E1E1E] w-82 h-14.25 rounded-[10px] flex items-center justify-center cursor-pointer border border-black hover:bg-white hover:text-black duration-300 text-[18px]'>Кол-во шпионов <ChevronDown/></button>
//                 </div>
//             </div>
//             <div className="flex gap-2.5">
//                 <button className='bg-[#1E1E1E] w-39.75 h-10.5 rounded-[10px] flex items-center justify-center cursor-pointer border border-white hover:border-black hover:bg-white hover:text-black duration-300'>Назад <Undo2/></button>
//                 <button className='bg-[#1E1E1E] w-39.75 h-10.5 rounded-[10px] flex items-center justify-center cursor-pointer border border-white hover:border-black hover:bg-white hover:text-black duration-300'>Далее <ArrowBigRight/></button>
//             </div>
//         </div>
//     </div>
    // <div className='w-screen h-screen flex items-center justify-center bg-black gap-7.5'>
    //     <div className='w-117.75 h-139.5 bg-gray-600 rounded-[10px]'>
    //         <button className='bg-red-400 rounded-[10px] w-25 h-5'>далее</button>
    //     </div>
    //     <div className='w-117.75 h-139.5 bg-gray-600 rounded-[10px]'>
    //         <button className='bg-red-400 rounded-[10px] w-25 h-5'>назад</button>
    //         <button className='bg-red-400 rounded-[10px] w-25 h-5'>далее</button>
    //     </div>
    // </div>
//   )
// }

// export default Help

// import { useState } from "react";

// export default function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-screen h-screen flex items-center justify-center bg-black">
//       <div className="relative w-[471px] h-[558px] overflow-hidden">
        
//         {/* ПЕРВЫЙ */}
//         <div className="w-full h-full bg-gray-600 rounded-[10px] flex justify-center items-start pt-4">
//           <button
//             onClick={() => setOpen(true)}
//             className="bg-red-400 rounded-[10px] w-[100px] h-[30px]"
//           >
//             далее
//           </button>
//         </div>

//         {/* ВТОРОЙ (выезжает справа) */}
//         <div
//           className={`absolute top-0 left-0 w-full h-full bg-gray-700 rounded-[10px] flex flex-col items-center pt-4 gap-3
//           transition-transform duration-500 ease-in-out
//           ${open ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <button
//             onClick={() => setOpen(false)}
//             className="bg-red-400 rounded-[10px] w-[100px] h-[30px]"
//           >
//             назад
//           </button>

//           <button className="bg-red-400 rounded-[10px] w-[100px] h-[30px]">
//             далее
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// export default function App() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-screen h-screen bg-black flex items-center">
//       {/* Контейнер с центровкой */}
//       <div
//         className={`mx-auto flex gap-[30px] transition-all duration-500 ease-in-out ${
//           open ? "w-[972px]" : "w-[471px]"
//         }`}
//       >
//         {/* ПЕРВАЯ */}
//         <div
//           className={`w-[471px] h-[558px] bg-gray-600 rounded-[10px] flex justify-center items-start pt-4 shrink-0
//           transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${open ? "-translate-x-10" : "translate-x-0"}`}
//         >
//           <button
//             onClick={() => setOpen(true)}
//             className="bg-red-400 rounded-[10px] w-[100px] h-[30px]"
//           >
//             далее
//           </button>
//         </div>

//         {/* ВТОРАЯ */}
//         <div
//           className={`w-[471px] h-[558px] bg-gray-700 rounded-[10px] flex flex-col items-center pt-4 gap-3 shrink-0
//           transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
//           ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
//         >
//           <button
//             onClick={() => setOpen(false)}
//             className="bg-red-400 rounded-[10px] w-[100px] h-[30px]"
//           >
//             назад
//           </button>
//           <button className="bg-red-400 rounded-[10px] w-[100px] h-[30px]">
//             далее
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [step, setStep] = useState(0);
//   const [animated, setAnimated] = useState(false);
//   const [mountedCards, setMountedCards] = useState([]);
//   const gap = 45;
//   const cardWidth = 471;

//   const cards = [
//     { id: 1, color: "bg-gray-600" },
//     { id: 2, color: "bg-red-500" },
//     { id: 3, color: "bg-green-500" },
//   ];

//   // Определяем видимые карточки
//   let visibleCards = [];
//   if (step === 0) visibleCards = [cards[0]];
//   if (step === 1) visibleCards = [cards[0], cards[1]];
//   if (step === 2) visibleCards = [cards[1], cards[2]];

//   // Обновляем mountedCards с задержкой для анимации
//   useEffect(() => {
//     setAnimated(false);
//     const timer = setTimeout(() => {
//       setMountedCards(visibleCards);
//       setTimeout(() => setAnimated(true), 20);
//     }, 10);
//     return () => clearTimeout(timer);
//   }, [step, visibleCards]);

//   // Анимация для входящих и выходящих карточек
//   const getCardAnimationStyle = (cardId) => {
//     const isNewCard = !mountedCards.some(c => c.id === cardId) && 
//                      visibleCards.some(c => c.id === cardId);
//     const isRemovingCard = mountedCards.some(c => c.id === cardId) && 
//                           !visibleCards.some(c => c.id === cardId);

//     if (isNewCard) {
//       return animated ? 
//         'opacity-100 scale-100 translate-x-0' : 
//         'opacity-0 scale-95 translate-x-20';
//     }
    
//     if (isRemovingCard) {
//       return animated ? 
//         'opacity-0 scale-95 -translate-x-20' : 
//         'opacity-100 scale-100 translate-x-0';
//     }

//     return 'opacity-100 scale-100 translate-x-0';
//   };

//   return (
//     <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
//       <div className="flex justify-center items-center relative" style={{ gap: `${gap}px` }}>
//         {cards.map((card) => {
//           const isVisible = visibleCards.some(c => c.id === card.id);
//           const isMounted = mountedCards.some(c => c.id === card.id);
          
//           if (!isMounted && !isVisible) return null;

//           return (
//             <div
//               key={card.id}
//               className={`
//                 ${card.color} 
//                 w-[471px] h-[558px] rounded-[10px] 
//                 flex justify-center items-start pt-4 shrink-0
//                 transition-all duration-700 ease-out
//                 ${getCardAnimationStyle(card.id)}
//               `}
//             >
//               {card.id === visibleCards[visibleCards.length - 1]?.id && step < 2 && (
//                 <button
//                   onClick={() => setStep(step + 1)}
//                   className="bg-red-400 rounded-[10px] w-[100px] h-[30px] mt-4 hover:bg-red-500 transition-colors"
//                 >
//                   далее
//                 </button>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function CardSlider() {
//   const [step, setStep] = useState(0); // 0,1,2

//   const next = () => {
//     if (step < 2) setStep(step + 1);
//   };

//   const prev = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const cards = [
//     { color: "bg-gray-600", text: "Карточка 1" },
//     { color: "bg-gray-700", text: "Карточка 2" },
//     { color: "bg-gray-800", text: "Карточка 3" },
//   ];

//   return (
//     <div className="w-screen h-screen flex flex-col items-center justify-center bg-black gap-4">
//       {/* Контейнер карточек по центру */}
//       <div className="relative w-full flex justify-center items-center h-[600px] overflow-hidden">
//         {cards.map((card, index) => {
//           // Определяем стиль отображения текущей карточки
//           let translateX = 100; // справа, скрыта
//           if (index === step) translateX = 0; // по центру
//           if (index < step) translateX = -100; // ушла влево

//           let opacity = index === step ? 1 : 0;

//           return (
//             <div
//               key={index}
//               className={`w-[471px] h-[558px] ${card.color} rounded-xl flex items-center justify-center text-white text-xl absolute transition-all duration-500 ease-in-out`}
//               style={{
//                 transform: `translateX(${translateX}%)`,
//                 opacity,
//               }}
//             >
//               {card.text}
//             </div>
//           );
//         })}
//       </div>

//       {/* Кнопки ближе к карточкам */}
//       <div className="flex gap-4 -mt-4">
//         <button
//           onClick={prev}
//           disabled={step === 0}
//           className={`px-6 py-2 rounded text-white transition-colors duration-300
//             ${step === 0 ? "bg-red-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
//         >
//           Назад
//         </button>

//         <button
//           onClick={next}
//           disabled={step === cards.length - 1}
//           className={`px-6 py-2 rounded text-white transition-colors duration-300
//             ${step === cards.length - 1 ? "bg-green-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
//         >
//           Далее
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// export default function CardSlider() {
//   const [step, setStep] = useState(0); // 0,1,2

//   const next = () => {
//     if (step < 2) setStep(step + 1);
//   };

//   const prev = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const cards = [
//     { color: "bg-gray-600", text: "Карточка 1" },
//     { color: "bg-gray-700", text: "Карточка 2" },
//     { color: "bg-gray-800", text: "Карточка 3" },
//   ];

//   return (
//     <div className="w-screen h-screen flex flex-col items-center justify-center bg-black gap-6">
//       {/* Контейнер карточек */}
//       <div className="flex justify-center items-center gap-4 h-[600px]">
//         {/* Шаг 0 - первая карточка */}
//         {step === 0 && (
//           <div className="w-[471px] h-[558px] rounded-xl flex flex-col items-center justify-center text-white text-xl bg-gray-600
//             transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn"
//           >
//             {cards[0].text}
//             <button
//               onClick={next}
//               className="mt-6 px-6 py-2 bg-green-500 rounded text-white hover:bg-green-600 transition-colors duration-300"
//             >
//               Далее
//             </button>
//           </div>
//         )}

//         {/* Шаг 1 - вторая карточка */}
//         {step === 1 && (
//           <div className="w-[471px] h-[558px] rounded-xl flex flex-col items-center justify-center text-white text-xl bg-gray-700
//             transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn"
//           >
//             {cards[1].text}
//             <div className="mt-6 flex gap-4">
//               <button
//                 onClick={prev}
//                 className="px-6 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition-colors duration-300"
//               >
//                 Назад
//               </button>
//               <button
//                 onClick={next}
//                 className="px-6 py-2 bg-green-500 rounded text-white hover:bg-green-600 transition-colors duration-300"
//               >
//                 Далее
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Шаг 2 - вторая и третья карточки */}
//         {step === 2 && (
//           <>
//             <div className="w-[471px] h-[558px] rounded-xl flex flex-col items-center justify-center text-white text-xl bg-gray-700
//               transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn"
//             >
//               {cards[1].text}
//               <button
//                 onClick={prev}
//                 className="mt-6 px-6 py-2 bg-red-500 rounded text-white hover:bg-red-600 transition-colors duration-300"
//               >
//                 Назад
//               </button>
//             </div>

//             <div className="w-[471px] h-[558px] rounded-xl flex flex-col items-center justify-center text-white text-xl bg-gray-800
//               transition-all duration-500 ease-in-out transform opacity-0 translate-y-4 animate-fadeIn"
//             >
//               {cards[2].text}
//               <button
//                 onClick={next}
//                 disabled
//                 className="mt-6 px-6 py-2 bg-green-400 rounded text-white cursor-not-allowed"
//               >
//                 Далее
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Анимация плавного появления через Tailwind */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(20px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fadeIn {
//             animation: fadeIn 0.5s forwards;
//           }
//         `}
//       </style>
//     </div>
//   );
// }