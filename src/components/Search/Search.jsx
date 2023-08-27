import React from 'react';
import styles from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className={styles.root}>
        <svg className={styles.icon} version='1.1' xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='14'
            cy='14'
            fill='none'
            id='XMLID_42_'
            r='9'
            stroke='#000000'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
          />
          <line
            fill='none'
            id='XMLID_44_'
            stroke='#000000'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeMiterlimit='10'
            strokeWidth='2'
            x1='27'
            x2='20.366'
            y1='27'
            y2='20.366'
          />
        </svg>
        <input
          value={searchValue}
          onChange={event => {
            setSearchValue(event.target.value);
          }}
          className={styles.input}
          placeholder='Поиск пиццы...'
        />
        {searchValue && (
          <div
            className={styles.closeBtn}
            onClick={() => {
              console.log('click');
              setSearchValue('');
            }}
          >
            <svg
              onClick={() => {
                console.log('click');
                setSearchValue('');
              }}
              className={styles.clearIcon}
              version='1.1'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='info' />
              <g id='icons'>
                <path
                  d='M14.8,12l3.6-3.6c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0L12,9.2L8.4,5.6c-0.8-0.8-2-0.8-2.8,0   c-0.8,0.8-0.8,2,0,2.8L9.2,12l-3.6,3.6c-0.8,0.8-0.8,2,0,2.8C6,18.8,6.5,19,7,19s1-0.2,1.4-0.6l3.6-3.6l3.6,3.6   C16,18.8,16.5,19,17,19s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8L14.8,12z'
                  id='exit'
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
