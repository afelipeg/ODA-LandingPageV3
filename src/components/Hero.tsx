import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Bot, ArrowRight } from 'lucide-react';

function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center justify-center mb-4">
          <Bot className="h-16 w-16 text-white" />
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-2">
          ODA
        </h1>
        <h3 className="text-xl sm:text-2xl font-medium text-gray-300 mb-8">
          On-Demand-Agentcy
        </h3>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Redefine Agency Excellence: Convert Traditional Teams into AI-Powered Superteams - Delivering Premium Results at 70% Lower Costs and Time Investment
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#beta" 
            className="flex items-center px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            Join the Beta
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a 
            href="#agents" 
            className="flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            Explore Agents
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;