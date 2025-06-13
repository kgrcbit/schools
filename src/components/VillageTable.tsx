import React from 'react';
import { MapPin, School, Router as Route, Info } from 'lucide-react';
import { Village } from '../types';

interface VillageTableProps {
  villages: Village[];
  mandal: string;
}

const VillageTable: React.FC<VillageTableProps> = ({ villages, mandal }) => {
  const getSchoolTypeColor = (type: string) => {
    switch (type) {
      case 'ZPHS':
        return 'bg-green-100 text-green-800';
      case 'MPPS':
        return 'bg-blue-100 text-blue-800';
      case 'MPUPS':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoadConnectivityColor = (connectivity: string) => {
    if (connectivity.toLowerCase().includes('excellent')) {
      return 'text-green-600 font-medium';
    } else if (connectivity.toLowerCase().includes('good')) {
      return 'text-blue-600 font-medium';
    } else {
      return 'text-orange-600 font-medium';
    }
  };

  return (
    <div className="card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary-100 p-2 rounded-lg">
          <School className="h-5 w-5 text-primary-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Villages in {mandal} Mandal
          </h2>
          <p className="text-sm text-gray-600">
            {villages.length} village{villages.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-4 font-semibold text-gray-700 border-b">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Village</span>
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-700 border-b">
                <div className="flex items-center space-x-2">
                  <Route className="h-4 w-4" />
                  <span>Distance from Ongole</span>
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-700 border-b">
                <div className="flex items-center space-x-2">
                  <School className="h-4 w-4" />
                  <span>Schools</span>
                </div>
              </th>
              <th className="text-left p-4 font-semibold text-gray-700 border-b">
                <div className="flex items-center space-x-2">
                  <Info className="h-4 w-4" />
                  <span>Road Connectivity</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {villages.map((village, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="p-4 border-b">
                  <div className="font-medium text-gray-900">{village.name}</div>
                  <div className="text-sm text-gray-500">
                    {village.coordinates.lat.toFixed(4)}, {village.coordinates.lng.toFixed(4)}
                  </div>
                </td>
                <td className="p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">
                      {village.distanceFromOngole}
                    </span>
                    <span className="text-sm text-gray-500">km</span>
                  </div>
                  {village.distanceFromOngole === 0 && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Home Base
                    </span>
                  )}
                </td>
                <td className="p-4 border-b">
                  <div className="space-y-2">
                    {village.schools.map((school, schoolIndex) => (
                      <div key={schoolIndex} className="border rounded-lg p-3 bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{school.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSchoolTypeColor(school.type)}`}>
                            {school.type}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{school.address}</p>
                        {school.facilities && school.facilities.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {school.facilities.map((facility, facilityIndex) => (
                              <span
                                key={facilityIndex}
                                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                              >
                                {facility}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4 border-b">
                  <div className={getRoadConnectivityColor(village.roadConnectivity)}>
                    {village.roadConnectivity}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">School Types Legend:</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              ZPHS
            </span>
            <span className="text-gray-700">Zilla Parishad High School</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              MPPS
            </span>
            <span className="text-gray-700">Mandal Parishad Primary School</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              MPUPS
            </span>
            <span className="text-gray-700">Mandal Parishad Upper Primary School</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageTable;