import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigete = useNavigate()
  const onLogout = () =>{
    localStorage.removeItem('adminId');
    navigete('/login')
  }

  return (
    <div className="flex justify-between items-center px-5 py-2">
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full h-16 w-16 flex items-center justify-center text-gray-600 font-bold text-xl mr-3">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Coat_of_arms_of_Chhattisgarh.svg/300px-Coat_of_arms_of_Chhattisgarh.svg.png' alt='' />
        </div>
        <div className="text-lg font-bold">Your Company Name</div>
      </div>
      <button onClick={onLogout} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Logout</button>
    </div>
  );
};

export default Navbar;
