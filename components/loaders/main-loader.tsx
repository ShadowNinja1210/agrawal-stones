"use client";

import "./main-loader.css";

export default function MainLoader() {
  return (
    <main className="absolute top-0 left-0 h-screen w-screen flex flex-col-reverse items-center justify-center bg-[#FA4443]">
      <div className="newtons-cradle">
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
      <svg width="42" height="45" viewBox="0 0 42 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.049 19.8714H12.6616L0.241943 44.7106H15.9735L20.9413 34.361L25.9092 44.7106H41.6407L30.049 19.8714Z"
          fill="#3A3E3B"
        />
        <path d="M13.0756 17.8015L20.9413 0.827972L29.2211 17.8015H13.0756Z" fill="#FEFEFE" />
      </svg>
    </main>
  );
}
