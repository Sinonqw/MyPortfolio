"use client";

import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  useEffect(() => {
    // Устанавливаем стиль для всего тела документа
    document.body.className = "bg-gray-900 font-sans antialiased";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header (Навигация) */}
      <Header />

      <main>
        {/* Главный баннер */}
        <Hero />

        {/* Проекты */}
        <Projects />

        {/* О себе */}
        <About />

        {/* Контакты */}
        <Contact />
      </main>

      {/* Футер */}
      <footer className="bg-gray-950 py-8 border-t border-indigo-500/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Heorhii. All rights reserved.
          </p>
          <div className="mt-2 text-sm">
            Built with React, Next.js and Framer Motion.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
