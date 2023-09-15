import React from 'react';
import qs from 'qs';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from "../redux/slices/filterSlice";

import Categories from '../components/Categories/Categories';
import Sort, {sortList} from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

import {SearchContext} from '../App.js'

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
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

  //если был превый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzaAll();
    }

    isSearch.current = false;

  }, [categoryId, sort.sortProperty, searchValue, currentPage]);


  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current){
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  //Если был первый рендер, то проверяем URL-параметры в редаксе
  React.useEffect(()=>{
    if (window.location.search){
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);

      dispatch(setFilters({
        ...params,
        sort
      }));
      isSearch.current = true;
    }
  },[]);

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

      axios.get(`${baseURL}/table-pizzas?${payload}`)
      .then(res => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  };

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
