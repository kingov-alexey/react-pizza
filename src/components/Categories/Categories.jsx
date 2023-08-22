import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);



  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, index) => {
          return (
            <li key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={activeIndex === index ? 'active' : ''}
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
