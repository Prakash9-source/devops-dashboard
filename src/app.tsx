import React, { useEffect } from 'react';
import { reportWebVitals } from './reportWebVitals';
import { Activity } from 'lucide-react';

function App() {
  useEffect(() => {
    // Initialize web-vitals reporting
    reportWebVitals(console.log);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center">
          <Activity className="h-8 w-8 text-indigo-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">DevOps Dashboard</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-md">
              <p className="text-green-700 font-medium">Tests Passing</p>
              <p className="text-sm text-green-600 mt-1">All systems operational</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-md">
              <p className="text-blue-700 font-medium">Deployment Status</p>
              <p className="text-sm text-blue-600 mt-1">Ready to deploy</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-md">
              <p className="text-purple-700 font-medium">Performance</p>
              <p className="text-sm text-purple-600 mt-1">Monitoring active</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
