import { Button, Navbar, NavbarCollapse, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 bg-zinc-800 text-white p-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <div className="flex items-center gap-2">
          <div className="w-12 h-auto overflow-hidden rounded-full">
            <img
              className="h-full bg-cover"
              src="../../public/logo-neo.png"
              alt="Logo-neo"
            />
          </div>
          <span className="text-center text-slate-50">N E O</span>
        </div>
      </Link>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline hover:bg-zinc-600"
          color="#52525b"
        >
          <FaMoon />
        </Button>
        <form action="">
          <TextInput
            type="text"
            placeholder="Buscar"
            rightIcon={AiOutlineSearch}
            style={{ backgroundColor: '#D1D5DB' }}
            className="hidden lg:inline"
          />
        </form>

        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <AiOutlineSearch />
        </Button>
        <Link to="/sign-in">
          <Button
            className="hidden md:inline "
            outline
            gradientDuoTone="greenToBlue"
          >
            Ingresar
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="border-b-black">
        <Navbar.Link
          className="text-gray-300 hover:bg-slate-400 text-center"
          active={path === '/'}
          as={'div'}
        >
          <Link to="/" className="inline-block w-full">
            Inicio
          </Link>
        </Navbar.Link>
        <Navbar.Link
          className="text-gray-300 hover:bg-slate-400 text-center"
          active={path === '/about'}
          as={'div'}
        >
          <Link to="/about" className="inline-block w-full">
            Acerca de
          </Link>
        </Navbar.Link>
        <Navbar.Link
          className="text-gray-300 hover:bg-slate-400 text-center "
          active={path === '/bloggers'}
          as={'div'}
        >
          <Link to="/bloggers" className="inline-block w-full">
            Bloggers
          </Link>
        </Navbar.Link>
        <Navbar.Link className="text-gray-300 hover:bg-zinc-800" as={'div'}>
          <Link to="/sign-in">
            <Button
              className="md:hidden w-full"
              outline
              gradientDuoTone="greenToBlue"
            >
              Ingresar
            </Button>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
