import React from 'react';
import { ChevronDown } from 'lucide-react';

interface MandalSelectorProps {
  mandals: string[];
  selectedMandal: string;
  onMandalChange: (mandal: string) => void;
}

const MandalSelector: React.FC<MandalSelectorProps> = ({
  mandals,
  selectedMandal,
  onMandalChange,
}) => {
  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-primary-100 p-2 rounded-lg">
          <ChevronDown className="h-5 w-5 text-primary-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Select Mandal</h2>
      </div>
      
      <div className="relative">
        <select
          value={selectedMandal}
          onChange={(e) => onMandalChange(e.target.value)}
          className="select-field appearance-none pr-10"
        >
          <option value="">Choose a mandal in Prakasam District</option>
          {mandals.map((mandal) => (
            <option key={mandal} value={mandal}>
              {mandal}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
      </div>
      
      {selectedMandal && (
        <div className="mt-4 p-3 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-700">
            <strong>Selected:</strong> {selectedMandal} Mandal
          </p>
        </div>
      )}
    </div>
  );
};

export default MandalSelector;