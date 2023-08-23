import React from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getPizzaAll();
    window.scrollTo(0, 0);
  }, []);

  function getPizzaAll() {
    fetch('http://localhost:9999/table-pizzas')
      .then(res => {
        return res.json();
      })
      .then(json => {
        setPizzas(json);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Ошибка:', err);
      });
  }
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>

      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((obj, id) => <PizzaBlock key={id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
