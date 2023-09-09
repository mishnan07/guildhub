import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CreateCategory from '../../../components/admin/category/CreateCategory';
import { adminLogout } from '../../../Redux/AdminAuth';
import './admin.css'

const Sidebar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.AdminAuth.Token);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    dispatch(adminLogout());
    navigate('/admin/login');
  };

  return (
    <div className=''>
      <aside className="relative  bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
            <a href="" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</a>
            <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                <i className="fas fa-plus mr-3"></i> GUILD HUB
            </button>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a href="/admin/home" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="/admin/homeOwners" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-sticky-note mr-3"></i>
                users
            </a>
           
            <a href="/admin/category" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-align-left mr-3"></i>
                Category
            </a>
            <CreateCategory />
            <a href="/admin/reportedPost" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-tablet-alt mr-3"></i>
                Reported Post
            </a>
            <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-calendar mr-3"></i>
                Reported users
            </a>
        </nav>
        <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
            <i className="fas fa-arrow-circle-up mr-3"></i>
        
        </a>
       

    </aside>
    </div>
  );
};

export default Sidebar;
