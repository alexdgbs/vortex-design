import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "$29",
      features: ["1 página personalizada", "Diseño responsivo", "Soporte por email", "Actualizaciones mensuales"]
    },
    {
      name: "Profesional",
      price: "$79",
      features: ["3 páginas personalizadas", "Diseño responsivo", "Soporte prioritario", "Actualizaciones semanales", "Análisis de tráfico"]
    },
    {
      name: "Empresarial",
      price: "$149",
      features: ["10 páginas personalizadas", "Diseño responsivo", "Soporte 24/7", "Actualizaciones ilimitadas", "Análisis avanzado", "Gestión de contenido"]
    }
  ];
  
  return (
    <section id="pricing" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Planes simples y transparentes</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades. Sin sorpresas ni costos ocultos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`bg-gray-50 rounded-lg overflow-hidden border ${index === 1 ? 'border-[#1e252d] transform md:-translate-y-4' : 'border-gray-200'}`}>
              <div className={`p-6 ${index === 1 ? 'bg-[#1e252d] text-white' : 'bg-gray-100 text-gray-800'}`}>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg">/mes</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-3xl font-medium transition ${index === 1 ? 'bg-[#1e252d] text-white hover:bg-[#2a2f37]' : 'bg-[#1e252d] text-white border border-white hover:bg-[#2a2f37]'}`}>
                  Seleccionar plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
