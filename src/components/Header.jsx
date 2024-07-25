import {
  Avatar,
  AvatarGroupCounter,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  Navbar,
  NavbarCollapse,
  TextInput,
} from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toogleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';

export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async () => {
    try {
      const res = await fetch(`/api/user/signout`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {}
  };
  return (
    <Navbar className="border-b-2 bg-zinc-800 text-white p-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold"
      >
        <div className="flex items-center gap-2">
          <div className="w-12 h-auto overflow-hidden rounded-full">
            <img
              className="h-full w-full bg-cover"
              src="https://lh3.googleusercontent.com/u/1/drive-viewer/AKGpihZc_ASAh0i4gb6NaeTTWYIzRUPv72cyiP7-jgWelgWNiubSQ7iL1J48EFNkiFStHbRfUavVxZOrVRTR5ryXslp7PnOYK7YYYEk=w1919-h853-rw-v1"
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
          onClick={() => dispatch(toogleTheme())}
        >
          {theme === 'light' ? <FaMoon /> : <FaSun />}
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
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
            inline
          >
            <DropdownHeader>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm truncate">
                {currentUser.email}
              </span>
            </DropdownHeader>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Perfil</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignout}>Salir</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button
              className="hidden md:inline "
              outline
              gradientDuoTone="greenToBlue"
            >
              Ingresar
            </Button>
          </Link>
        )}
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
          {currentUser ? null : (
            <Link to="/sign-in">
              <Button
                className="md:hidden w-full"
                outline
                gradientDuoTone="greenToBlue"
              >
                Ingresar
              </Button>
            </Link>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
