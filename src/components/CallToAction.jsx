import {Button} from 'flowbite-react';
export default function CallToAction() {
    return (
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    ¿Quieres saber más de la gastronomía local?
                </h2>
                <p className='text-gray-500 my-2'>
                    Revisa los restaurantes más concurridos:
                </p>
                <Button gradientDuoTone='tealToLime' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://www.tripadvisor.co/Restaurants-g677792-Sogamoso_Boyaca_Department.html" target='_blank' rel='noopener noreferrer'>
                        Top restaurantes
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://th.bing.com/th/id/OIP.K898w1d9_csUkVbODo3YLQHaEA?rs=1&pid=ImgDetMain" alt="Imagen de restaurantes en Sogamoso"/>
            </div>
        </div>
    );
}
