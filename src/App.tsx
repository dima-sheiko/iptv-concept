import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from 'react';
import { IData } from './types/IData';
import axios from 'axios';
import './styles/styles.css';

export const App = () => {
  const [data, setData] = useState<IData[]>([]);

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

  return <div>App</div>;
};
