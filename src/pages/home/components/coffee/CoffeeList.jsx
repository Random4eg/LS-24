import React from 'react';
import '/src/pages/home/components/coffee/CoffeeList.scss'
import { useNavigate } from 'react-router-dom';

export const CoffeeList = () => {
  const navigate = useNavigate(); 
  const cards = [
    {
      id: 1,
      title: 'Cappuccino',
      imageUrl: './src/assets/Group1.png',
      description: 'With Steamed Milk',
      
    },
    {
      id: 2,
      title: 'Cappuccino',
      imageUrl: './src/assets/Group2.png',
      description: 'With Foam',
      
    },
    {
      id: 3,
      title: 'Cappuccino',
      imageUrl: './src/assets/Group1.png',
      description: 'With Steamed Milk',
      
    }
  ];
  const handleClick = () => {
     navigate('/Coffee/'); 
  };

  return (
    <div>
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
                <div><button className="coffeeList-icon icon-plus"></button></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


