import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">¿Listo para comenzar?</h2>
        <form className="bg-white p-8 rounded-lg shadow-sm border border-[#1e252d]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2"
                placeholder="Tu email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2"
              placeholder="¿Cómo podemos ayudarte?"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-[#1e252d] text-white px-6 py-3 rounded-3xl hover:bg-[#2a2f37] transition font-medium"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
