import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/pages/home/components/beans/BeansList.scss'

export const BeansList = () => {
  const navigate = useNavigate(); 

  const cards = [
    {
      id: 1,
      title: 'Robusta Beans',
      imageUrl: './src/assets/Mask.png',
      description: 'Medium Roasted',
    },
    {
      id: 2,
      title: 'Cappuccino',
      imageUrl: './src/assets/Mask-1.png',
      description: 'With Steamed Milk',
    },
    {
      id: 3,
      title: 'Cappuccino',
      imageUrl: './src/assets/Mask-2.png',
      description: 'With Steamed Milk',
    },
    {
      id: 4,
      title: 'Cappuccino',
      imageUrl: './src/assets/Mask-3.png',
      description: 'With Steamed Milk',
    }
  ];

  const handleClick = () => {
     navigate('/Beans/'); 
  };

  return (
    <div>
      <div className="title">Coffee beans</div>
      <div className="carousel">
        {cards.map(card => (
          <div className="card" key={card.id} onClick={handleClick}>
            <img src={card.imageUrl} alt={card.title} />
            <div className="card-body">
              <p className="card-title">{card.title}</p>
              <p className="card-text">{card.description}</p>
              <div className="card-price">
                <div>
                  <p><span>$</span>4.20</p>
                </div>
                <div><button className="beansList-icon icon-plus"></button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
