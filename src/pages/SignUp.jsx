import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* {left} */}
        <div className="flex-1 order-2 md:order-1">
          <form action="" className="flex flex-col gap-4">
            <div>
              <Label value="Tu nombre de usuario" />
              <TextInput
                type="text"
                placeholder="Nombre de usuario"
                id="username"
              />
            </div>
            <div>
              <Label value="Tu correo electrónico" />
              <TextInput
                type="email"
                icon={HiMail}
                placeholder="tucorreo@correo.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Tu contraseña" />
              <TextInput type="password" placeholder="contraseña" id="password" />
            </div>
            <Button gradientDuoTone="greenToBlue" type="submit">Registrarse</Button>
          </form>
          <div className="flex gap-2 text-sm mt-2">
            <span>
              ¿Tienes una cuenta?
            </span>
            <Link to='/sign-in' className="underline text-blue-600">Iniciar sesión
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 order-1 md:order-2">
          <Link to="/">
            <div className="flex w-40 h-auto mx-auto overflow-hidden rounded-full">
              <img
                className="bg-cover"
                src="../../public/logo-neo.png"
                alt="Logo-neo"
              />
            </div>
          </Link>
          <p className="text-sm mt-5 mx-auto text-center px-12">
            Conoce y opina sobre lo mejor de la gastronomía local
          </p>
        </div>
      </div>
    </div>
  );
}
