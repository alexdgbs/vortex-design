import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Esta landing page transformó por completo la presencia digital de mi negocio, las conversiones aumentaron un 40% en el primer mes.",
      author: "María Rodríguez",
      role: "CEO, Diseño Creativo"
    },
    {
      quote: "Implementación rápida y soporte excepcional, el diseño minimalista realmente hace que nuestros productos destaquen.",
      author: "Carlos Méndez",
      role: "Director de Marketing, TechSolutions"
    }
  ];
  
  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-6 rounded-lg shadow-sm border border-[#1e252d]">
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
