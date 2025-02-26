import React, { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por suscribirte con: ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Diseño minimalista para tu negocio
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Crea una experiencia única para tus clientes con nuestro enfoque limpio y moderno.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="px-4 py-3 rounded-3xl border border-[#2a2f37] focus:outline-none focus:ring-2 flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit"
              className="bg-[#1e252d] text-white px-6 py-3 rounded-3xl hover:bg-[#2a2f37] transition font-medium"
            >
              Comenzar
            </button>
          </form>
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#1e252d] rounded-xl p-6 h-64 md:h-80 flex items-center justify-center">
            <img src="/images/ux-ui.jpg" alt="Hero section illustration" className="max-h-full border-2 border-white rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
