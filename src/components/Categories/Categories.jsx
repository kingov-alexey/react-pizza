import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = index => {
    setActiveIndex(index);
  };

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, ind) => {
          return (
            <li
              onClick={() => {
                onClickCategory(ind);
              }}
              className={activeIndex === ind ? 'active' : ''}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
