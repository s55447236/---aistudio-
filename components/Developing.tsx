
import React from 'react';

interface DevelopingProps {
  title: string;
}

const Developing: React.FC<DevelopingProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-500 text-lg">正在开发中，敬请期待...</p>
      <div className="mt-8 p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
        <svg className="w-16 h-16 text-gray-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    </div>
  );
};

export default Developing;
