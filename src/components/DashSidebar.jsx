import { Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiAnnotation, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
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
    } catch (error) { }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          <Sidebar.Item
            as={Link}
            to="/dashboard?tab=profile"
            active={tab === 'profile'}
            icon={HiUser}
            label={currentUser.isAdmin ? 'Admin' : 'User'}
            labelColor="dark"
            className="cursor-pointer"
          >
            Perfil
          </Sidebar.Item>

          {currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to='/dashboard?tab=posts'
              active={tab === 'post'}
              icon={HiDocumentText}
            >
              Post
            </Sidebar.Item>
          )}

          {currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to='/dashboard?tab=users'
              active={tab === 'user'}
              icon={HiOutlineUserGroup}
            >
              Usuarios
            </Sidebar.Item>
          )}

          {currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to='/dashboard?tab=comments'
              active={tab === 'post'}
              icon={HiAnnotation}
            >
              Comentarios
            </Sidebar.Item>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            onClick={handleSignout}
            className="cursor-pointer"
          >
            Salir
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
