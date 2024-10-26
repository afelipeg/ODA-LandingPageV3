import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, ArrowRight } from 'lucide-react';

const agents = [
  "Agente Cuentas",
  "Agente Planeación Digital",
  "Agente Planeación Offline",
  "Agente Planeación de Demanda",
  "Agente Estrategia & Insights",
  "Agente CRM & RFM",
  "Agente SFMC Journey Builder",
  "Agente Director Creativo",
  "Agente Full Funnel Model"
];

function Marketplace() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Marketplace de agentes</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubre nuestro ecosistema de agentes especializados
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-white">{agent}</span>
                <ArrowRight className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marketplace;