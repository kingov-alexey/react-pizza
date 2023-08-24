import React from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  });

  React.useEffect(() => {
    getPizzaAll();
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  function getPizzaAll() {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}`: '';
    setIsLoading(true);
    fetch(`http://localhost:9999/table-pizzas?${category}&_sort=${sortBy}&_order=${order}`)
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
        <Categories value={categoryId} onChangeCategory={(e)=>{setCategoryId(e)}}/>
        <Sort value={sortType} onChangeSort={(e)=>{setSortType(e)}}/>
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
