import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <Code className="h-5 w-5" />
            <span>Developed with</span>
            <Heart className="h-5 w-5 text-red-500" />
            <span>by KGR</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Teacher Transfer Helper - Prakasam District, Andhra Pradesh
          </p>
          <p className="text-xs text-gray-400">
            Helping teachers make informed decisions for school transfers
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">About This App</h4>
              <p className="text-xs">
                This application helps government school teachers in Prakasam district 
                find the best locations for transfer counselling by providing detailed 
                information about villages, schools, and distances from Ongole.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="text-xs space-y-1">
                <li>• Complete mandal and village information</li>
                <li>• Distance calculations from Ongole</li>
                <li>• School details and facilities</li>
                <li>• Road connectivity information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-xs">
                For updates or suggestions, please contact the development team.
                This tool is specifically designed for Prakasam district teachers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;