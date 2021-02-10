import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Landing: React.FC = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState<string>();

  useEffect(() => {
    async function fetchData() {
      const request = await api.get('/users');
      setRandomUserDataJSON(JSON.stringify(request.data));
    }
    fetchData();
  }, []);

  return (
  <div>
        <h1> Feth data test </h1>
        <div>
          {randomUserDataJSON}
        </div>
  </div>
  );
};

export default Landing;
