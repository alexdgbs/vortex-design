import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por suscribirte con: ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        
        {/* Contenido de Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Diseño minimalista para tu negocio
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-white to-gray-700 mx-auto md:mx-0 mb-6 rounded-full" />
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Crea una experiencia única para tus clientes con nuestro enfoque limpio y moderno.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Ingresa tu email"
              className="px-4 sm:px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm transition-all flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="text-sm bg-gradient-to-r from-gray-400 to-gray-700 text-white px-4 sm:px-8 py-3 rounded-lg hover:from-gray-700 hover:to-gray-400 transition-all font-semibold flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <span className="whitespace-nowrap">Comenzar</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 w-full">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-700 opacity-0"
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.img
              src="/images/ux-ui.jpg"
              alt="Diseño minimalista"
              className="w-full aspect-[4/3] object-cover rounded-2xl"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            />
            <motion.div 
              className="absolute inset-0 border-2 border-transparent rounded-2xl"
              whileHover={{ 
                borderColor: "rgba(107, 114, 128, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;