import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-primary">404</h1>
        
        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Oops! Page not found</h2>
          <p className="text-base-content/80">
            The page you're looking for seems to have wandered off...
          </p>
        </div>

        {/* Fun Animation */}
        <div className="my-8 relative">
          <div className="animate-bounce">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary"
          >
            <Home className="w-4 h-4" />
            Go Home
          </button>
          
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-outline"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;