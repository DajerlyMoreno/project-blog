import { Button } from 'flowbite-react';
import React from 'react';

export default function DescriptionAndAllPost() {
  return (
    <div className='w-full h-96 flex bg-gradient-to-r from-orange-300 to-purple-100 items-center'>
      <div className='w-1/3 h-full'>
        <img src="../../public/logo-neo.png" className='w-full h-full object-cover rounded-tr-full'/>
      </div>
      <div className='w-2/3 h-full flex flex-col justify-center items-center p-7 text-lg sm:text-2xl text-center'>
        <p className="mb-16">
          ¡Bienvenido a NEO, tu destino culinario definitivo! Explora con nosotros los 
          rincones más deliciosos donde el café es sublime, las cenas son épicas y los 
          almuerzos son simplemente inigualables. En NEO, tu opinión cuenta tanto como 
          tu apetito. ¡Únete a nuestra comunidad y déjate llevar por un viaje 
          gastronómico sin límites!
        </p>
        <Button className='rounded-full'>
          <a href="">
            VER TODOS LOS POST
          </a>
        </Button>
      </div>
    </div>
  );
}