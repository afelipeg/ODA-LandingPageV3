import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Calculator as CalcIcon, Users, TrendingUp, DollarSign } from 'lucide-react';

function Calculator() {
  const [monthlyFee, setMonthlyFee] = useState<number>(50000);
  const [teamSize, setTeamSize] = useState<number>(20);
  const [annualRevenue, setAnnualRevenue] = useState<number>(5000000);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Constants
  const ODA_MONTHLY_COST = 15000;
  const ODA_ANNUAL_COST = ODA_MONTHLY_COST * 12;

  // Calculations
  const currentAnnualCost = monthlyFee * 12;
  const fteReduction = Math.round(teamSize * 0.35); // 35% FTE efficiency
  const costSavings = Math.round(currentAnnualCost * 0.35); // 35% cost reduction
  const newRevenue = Math.round(annualRevenue * 0.21); // 21% new revenue
  const totalGrossValue = costSavings + newRevenue;
  const totalNetValue = totalGrossValue - ODA_ANNUAL_COST;

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <CalcIcon className="h-12 w-12 mx-auto mb-6 text-black" />
          <h2 className="text-4xl font-bold mb-4">Agency Value Calculator</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the potential impact of AI agents on your agency operations and revenue
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Calculate Your Potential</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Agency Fee
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={monthlyFee}
                    onChange={(e) => setMonthlyFee(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">${(monthlyFee).toLocaleString()}</span>
                    <span className="text-sm text-gray-600">$200,000</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Team Size (FTEs)
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-600">{teamSize} FTEs</span>
                  <span className="text-sm text-gray-600">50 FTEs</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Annual Revenue
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">$</span>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="1000000"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">${(annualRevenue / 1000000).toFixed(1)}M</span>
                    <span className="text-sm text-gray-600">$100M</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Current Annual Investment</h4>
              <p className="text-2xl font-bold">${currentAnnualCost.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">FTE Optimization</h4>
                <p className="text-3xl font-bold text-blue-600">{fteReduction} FTEs</p>
                <p className="text-sm text-gray-600 mt-2">Potential team optimization</p>
                <p className="text-lg font-semibold text-green-600 mt-2">
                  ${costSavings.toLocaleString()} saved/year
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">Est. Revenue Potential</h4>
                <p className="text-3xl font-bold text-green-600">${newRevenue.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mt-2">Additional annual revenue</p>
                <p className="text-lg font-semibold text-green-600 mt-2">+15% growth</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <DollarSign className="h-8 w-8 text-indigo-600 mb-4" />
              <h4 className="text-xl font-semibold mb-6">Annual Value Impact</h4>
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-gray-600">FTE Annual Cost Savings:</span>
                  <span className="text-xl font-semibold text-gray-900">${costSavings.toLocaleString()}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-gray-600">Annual revenue growth opportunities:</span>
                  <span className="text-xl font-semibold text-gray-900">${newRevenue.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-800 font-semibold">Total Annual Gross Value:</span>
                    <span className="text-2xl font-bold text-indigo-600">${totalGrossValue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-gray-600">ODA Annual Cost:</span>
                  <span className="text-xl font-semibold text-red-600">-${ODA_ANNUAL_COST.toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-baseline justify-between">
                    <span className="text-gray-800 font-semibold">Total Annual Net Value:</span>
                    <span className="text-2xl font-bold text-green-600">${totalNetValue.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;