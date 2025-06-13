import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Teacher Transfer Helper</h1>
              <p className="text-primary-100">Prakasam District - Andhra Pradesh</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-primary-100">
            <MapPin className="h-5 w-5" />
            <span>Distance from Ongole</span>
          </div>
        </div>
        <div className="mt-4 bg-white/10 rounded-lg p-3">
          <p className="text-sm text-primary-100">
            <strong>For Sushmitha & All Teachers:</strong> Find the best school locations for transfer counselling. 
            Get detailed information about villages, schools, and travel distances from Ongole.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;