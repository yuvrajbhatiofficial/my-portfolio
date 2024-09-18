// src/components/Preloader.js
import React from 'react';
<link rel="stylesheet" href="index.css" />

const Preloader = () => {
    return (
        <>
      
                <h1 className='text-white text-2xl'>loading....</h1>
            
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950 z-50">
        
            
            <div className="loader border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        </div>
        </>
    );
};

export default Preloader;
