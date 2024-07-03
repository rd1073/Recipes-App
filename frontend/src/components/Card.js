import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, image }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/full-recipe/${id}`);
  };

  return (
    <div className="max-w-sm w-full h-80 rounded overflow-hidden shadow-lg m-4 flex flex-col"
    onClick={handleClick}>
      <div className="h-48 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="flex-1 flex flex-col justify-center px-6 py-4">
        <div className="font-bold text-xl mb-2">{id} {title}</div>
      </div>
    </div>
  );
};

export default Card;
