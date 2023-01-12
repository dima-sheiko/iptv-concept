import '@fontsource/ubuntu/';
import '@fontsource/source-sans-pro';
import { useState, useEffect, useMemo } from 'react';
import { Background } from './components/Background/Background';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { CardContainer } from './components/CardContainer/CardContainer';
import { Divider } from './components/Divider/Divider';
import { IURL, Item } from './types/types';
import axios from 'axios';
import './styles/styles.css';

export const App = () => {
  const [backgrounds, setBackgrounds] = useState<IURL[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const content = useMemo(
    () => items.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/discover');
        setBackgrounds(data.backgrounds.map((background: IURL) => ({ ...background, url: `/api/${background.url}` })));
        setItems(
          data.items.map((item: Item) => ({
            ...item,
            poster: `/api/${item.poster}`,
            keyframe: `/api/${item.keyframe}`,
          }))
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(`Error: ${error.message}`);
        } else {
          setError(`An unexpected error occurred`);
        }
      }
    };

    getData();
  }, []);

  return (
    <>
      <Background backgrounds={backgrounds} />
      <div className='container'>
        <Header />
        <Search setQuery={setQuery} />
        <Divider query={query} content={content.length} />
        <CardContainer content={content} error={error} />
      </div>
    </>
  );
};
