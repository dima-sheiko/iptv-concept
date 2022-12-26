import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect, useMemo } from 'react';
import { Background } from './components/Background/Background';
import { IData } from './types/IData';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { CardContainer } from './components/CardContainer/CardContainer';
import axios from 'axios';
import { Divider } from './components/Divider/Divider';
import './styles/styles.css';

export const App = () => {
  const [data, setData] = useState<IData[]>([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');

  const backgrounds = useMemo(() => data.flatMap(item => item.backgrounds.map(value => value.url)), [data]);
  const items = useMemo(() => data.flatMap(item => item.items.map(value => value)), [data]);
  const content = useMemo(
    () => items.filter(item => item.title.toLowerCase().includes(query.toLowerCase())),
    [items, query]
  );

  // API call imitation
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('../discover.json');
        setData(response.data);
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
