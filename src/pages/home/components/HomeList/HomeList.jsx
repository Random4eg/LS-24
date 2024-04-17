import React, { Component } from 'react'
import '/src/pages/home/components/HomeList/HomeList.scss'


class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['title'],
      coffeeData: [
        {
          title: 'All',
          id: 1,
        },
        {
          title: 'Cappucino',
          id: 2,
        },
        {
          title: 'Espresso',
          id: 3,
        },
        {
          title: 'Americano',
          id: 4,
        },
        {
          title: 'Macchiato',
          id: 5,
        },
      ]
    };
  }

  render() {
    return (
      <div>
        {/* Рендеринг елементів */}
        {/* <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        {/* Рендеринг кавових даних */}
        <ul>
          {this.state.coffeeData.map(coffee => (
            <li key={coffee.id}>{coffee.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeList;