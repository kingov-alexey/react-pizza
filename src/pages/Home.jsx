import React from 'react';

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

import {SearchContext} from '../App.js'

const Home = () => {

  const dispatch = useDispatch();
  const {categoryId, sort, currentPage} = useSelector(state => state.filter);


  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number)=>{
    dispatch(setCurrentPage(number));

  }

  const {searchValue} = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    getPizzaAll();
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const renderPizzas = pizzas.map((obj, id) => <PizzaBlock key={id} {...obj} />);

  const renderSkeleton = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  function getPizzaAll() {
    
    const category = categoryId > 0 ? `category=${categoryId}` : ''; //фильтр по полю
    const sortBy = `&_sort=` + sort.sortProperty.replace('-', ''); //сортировка
    const order = sort.sortProperty.includes('-') ? '&_order=asc' : '&_order=desc';//направление сортировки
    const search = searchValue ? `${'&title'}_like=${searchValue}` : '';
    const pagination = `&_page=${currentPage}&_limit=4`;
    const payload = `${category}${sortBy}${order}${search}${pagination}`;
    const baseURL = 'http://localhost:9999';

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

      axios.get(`${baseURL}/table-pizzas?${payload}`)
      .then(response => {
        setPizzas(response.data);
        setIsLoading(false);
      });



  }
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
        />
        <Sort />
      </div>

      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? renderSkeleton : renderPizzas}</div>
      <Pagination
      currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  );
};

export default Home;
