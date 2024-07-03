import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/full-recipe/${id}`);
  };

  const baseUrl = 'http://127.0.0.1:8000/';  // Change to your backend URL


  return (
    <div className="max-w-sm w-full h-80 rounded overflow-hidden shadow-lg m-4 flex flex-col bg-white"
    onClick={handleClick}>
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={`${baseUrl}${image}`} alt={title} />
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card;
