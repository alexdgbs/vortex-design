import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Esta landing page transformó por completo la presencia digital de mi negocio, las conversiones aumentaron un 40% en el primer mes.",
      author: "María Rodríguez",
      role: "CEO, Diseño Creativo",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "from-white to-red-400"
    },
    {
      quote: "Implementación rápida y soporte excepcional, el diseño minimalista realmente hace que nuestros productos destaquen.",
      author: "Carlos Méndez",
      role: "Director de Marketing, TechSolutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "from-white to-blue-400"
    },
    {
      quote: "La mejor inversión que hemos hecho este año. El diseño intuitivo ha mejorado significativamente la experiencia de nuestros usuarios.",
      author: "Ana Morales",
      role: "Fundadora, EcoStyle",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      color: "from-white to-teal-400"
    }
  ];
  return (
    <section id="testimonials" className="py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Lo que dicen nuestros clientes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-700 mx-auto"></div> 
          <p className="mt-6 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">Descubre por qué nuestros clientes confían en nosotros para transformar su presencia digital y potenciar sus negocios.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.author} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${testimonial.color}`}></div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <Quote className={`w-8 h-8 md:w-10 md:h-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${testimonial.color} bg-clip-text text-transparent`} />
                </div>
                
                <p className="text-sm text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <p className="text-sm md:text-md font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;