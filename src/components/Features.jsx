import React from 'react';
import { Smartphone, Zap, Palette } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Diseño Responsivo',
      description: 'Se adapta perfectamente a cualquier tamaño de pantalla y dispositivo.',
      icon: <Smartphone size={40} className="text-gray-500" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Alta Velocidad',
      description: 'Optimizado para cargar rápidamente, mejorando la experiencia del usuario.',
      icon: <Zap size={40} className="text-gray-500" />,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Personalizable',
      description: 'Fácil de adaptar a tu marca y necesidades específicas.',
      icon: <Palette size={40} className="text-gray-500" />,
      color: 'from-emerald-500 to-teal-600'
    }
  ];
  
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Características principales</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-700 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">Explora las características únicas que nos permiten ofrecer soluciones digitales innovadoras, diseñadas para impulsar el éxito de tu negocio y mejorar la experiencia de tus clientes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="relative group overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                  <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-gray-700 group-hover:text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">{feature.description}</p>
                
                <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-700 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
