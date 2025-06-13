import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MandalSelector from './components/MandalSelector';
import VillageTable from './components/VillageTable';
import Footer from './components/Footer';
import { prakasam_mandals } from './data/prakasam-data';
import { Village } from './types';

function App() {
  const [selectedMandal, setSelectedMandal] = useState<string>('');

  const mandals = useMemo(() => {
    return prakasam_mandals.map(mandal => mandal.name).sort();
  }, []);

  const selectedVillages = useMemo((): Village[] => {
    if (!selectedMandal) return [];
    
    const mandal = prakasam_mandals.find(m => m.name === selectedMandal);
    return mandal ? mandal.villages : [];
  }, [selectedMandal]);

  const handleMandalChange = (mandal: string) => {
    setSelectedMandal(mandal);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <MandalSelector
            mandals={mandals}
            selectedMandal={selectedMandal}
            onMandalChange={handleMandalChange}
          />
          
          {selectedMandal && selectedVillages.length > 0 && (
            <VillageTable
              villages={selectedVillages}
              mandal={selectedMandal}
            />
          )}
          
          {selectedMandal && selectedVillages.length === 0 && (
            <div className="card text-center py-12">
              <div className="text-gray-500">
                <p className="text-lg font-medium mb-2">No villages found</p>
                <p className="text-sm">
                  No village data available for {selectedMandal} mandal at the moment.
                </p>
              </div>
            </div>
          )}
          
          {!selectedMandal && (
            <div className="card text-center py-12">
              <div className="text-gray-500">
                <h3 className="text-lg font-medium mb-2">Welcome to Teacher Transfer Helper</h3>
                <p className="text-sm mb-4">
                  Select a mandal from the dropdown above to view detailed information about 
                  villages, schools, and distances from Ongole.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-xs text-blue-700">
                    <strong>Tip:</strong> This tool is designed specifically for government school 
                    teachers in Prakasam district to help make informed decisions during 
                    transfer counselling.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;