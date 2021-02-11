import React, { useEffect, useState } from 'react';
import UserInfosItem, { UserInfos } from './UserInfosItem';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState<string>();
  const [usersInfos, setUsersInfos] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData(pageNumber = 1) {
      const request = await api.get(`/api/?page=${pageNumber}`);
      setRandomUserDataJSON(JSON.stringify(request.data, null, 2) || 'No user data found.');
      setUsersInfos(request.data.results);
    }
    try {
      fetchData();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, []);
  /* const [user, setUser] = useState<IUser>();

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then(response => setUser(response.data))
      .catch(err => {
      // eslint-disable-next-line no-console
      console.error('Ocorreu um erro ao buscar os itens.');
      });
  }, [id]); */
  return (
  <div>
        <h1> Feth data test </h1>
        <div>
          {usersInfos.map((user: UserInfos) => (
              <UserInfosItem
              key={user.name.first}
              user={user}
               />
          ))}
        </div>
        <div>
          {randomUserDataJSON}
        </div>
  </div>
  );
};

export default Landing;
