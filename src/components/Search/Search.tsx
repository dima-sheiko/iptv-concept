import { useState, useCallback, FormEvent, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import clear from '../../assets/clear.svg';
import search from '../../assets/search.svg';
import styles from './Search.module.css';

interface SearchProps {
  setQuery: (query: string) => void;
}

export const Search = ({ setQuery }: SearchProps) => {
  const [value, setValue] = useState('');

  const debounceSearch = useCallback(
    debounce(value => setQuery(value), 500),
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    debounceSearch(value);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClearSearch = () => {
    setValue('');
    debounceSearch('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.search_box}>
          <input
            className={`${styles.search} ${value ? styles.filled : ''}`}
            value={value}
            onChange={onChangeInput}
            type='text'
            name='search'
            placeholder='Search'
          />
          {value && (
            <button className={styles.clear} onClick={onClearSearch} type='button'>
              <img className={styles.search_icon} src={clear} alt='clear input icon' />
            </button>
          )}
        </div>
        <button className={styles.button} type='submit'>
          <p>search</p>
          <img className={styles.button_icon} src={search} alt='search icon' />
        </button>
      </div>
    </form>
  );
};
