import { Button } from 'flowbite-react';
import React from 'react';

export default function DescriptionAndAllPost() {
  return (
    <div className='w-full h-auto flex flex-col sm:flex-row bg-gradient-to-r from-orange-400 via-orange-300 to-orange-100  items-center'>
      <div className='w-full sm:w-1/3 h-96'>
        <img src="../../public/logo-neo.png" className='w-full h-full object-cover'/>
      </div>
      <div className='w-full sm:w-2/3 h-auto flex flex-col justify-center items-center p-7 text-lg sm:text-2xl text-center'>
        <p className="mb-4">
          ¡Bienvenido a NEO, tu destino culinario definitivo! Explora con nosotros los 
          rincones más deliciosos donde el café es sublime, las cenas son épicas y los 
          almuerzos son simplemente inigualables. En NEO, tu opinión cuenta tanto como 
          tu apetito. ¡Únete a nuestra comunidad y déjate llevar por un viaje 
          gastronómico sin límites!
        </p>
        <Button className='rounded-full px-8 py-4 text-lg sm:text-2xl'>
          <a href="/search">
            VER TODOS LOS POST
          </a>
        </Button>
      </div>
    </div>
  );
}