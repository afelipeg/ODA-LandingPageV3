import React from 'react';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="h-8 w-8" />
              <div className="ml-2">
                <h1 className="text-xl font-bold">ODA</h1>
                <h2 className="text-sm text-gray-400">On-Demand-Agentcy</h2>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming agency operations with AI-powered copilots for seamless workflow automation and enhanced productivity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#agents" className="text-gray-400 hover:text-white">Agents</a></li>
              <li><a href="#beta" className="text-gray-400 hover:text-white">Join Beta</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ODA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;