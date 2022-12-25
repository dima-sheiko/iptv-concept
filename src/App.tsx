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

export const App = () => {
  const [data, setData] = useState<IData[]>([]);
  const backgrounds = data.flatMap(elem => elem.backgrounds.map(value => value.url));

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
      </div>
    </>
  );
};
