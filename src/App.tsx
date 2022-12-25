import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from 'react';
import { Background } from './components/Background/Background';
import { IData } from './types/IData';
import axios from 'axios';
import './styles/styles.css';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';

export const App = () => {
  const [data, setData] = useState<IData[]>([]);
  const [query, setQuery] = useState('');

  const backgrounds = data.flatMap(item => item.backgrounds.map(value => value.url));
  const items = data.flatMap(item => item.items.map(value => value));
  const content = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

  // API call imitation
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('../discover.json');
        setData(response.data);
      } catch (error) {
        console.log(error);
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
        {/* <h3>{!query ? 'In spotlight' : content.length === 0 ? '' : `TV Shows (${content.length})`}</h3> */}
      </div>
    </>
  );
};
