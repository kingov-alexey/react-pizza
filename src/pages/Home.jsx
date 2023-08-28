import React from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

import {SearchContext} from '../App.js'

const Home = () => {
  const {searchValue} = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    getPizzaAll();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  // статический способ поиска
  // const renderPizzas = pizzas
  //   .filter(obj => {
  //     if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //       return true;
  //     }
  //     return false;
  //   })
  //   .map((obj, id) => <PizzaBlock key={id} {...obj} />);

  const renderPizzas = pizzas.map((obj, id) => <PizzaBlock key={id} {...obj} />);

  const renderSkeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  function getPizzaAll() {
    
    const category = categoryId > 0 ? `category=${categoryId}` : ''; //фильтр по полю
    const sortBy = `&_sort=` + sortType.sortProperty.replace('-', ''); //сортировка
    const order = sortType.sortProperty.includes('-') ? '&_order=asc' : '&_order=desc';//направление сортировки
    const search = searchValue ? `${'&title'}_like=${searchValue}` : '';
    const pagination = `&_page=${currentPage}&_limit=4`;
    const payload = `${category}${sortBy}${order}${search}${pagination}`;

    setIsLoading(true);
    fetch(`http://localhost:9999/table-pizzas?${payload}`)
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
        <Categories
          value={categoryId}
          onChangeCategory={e => {
            setCategoryId(e);
          }}
        />
        <Sort
          value={sortType}
          onChangeSort={e => {
            setSortType(e);
          }}
        />
      </div>

      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? renderSkeleton : renderPizzas}</div>
      <Pagination
        onChangePage={number => {
          setCurrentPage(number);
        }}
      />
    </div>
  );
};

export default Home;
