import React, { useEffect, useState } from 'react';
import UserInfosItem, { IUserInfos } from './UserInfosItem';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState<string>();
  const [usersInfos, setUsersInfos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await api.get('/users');
      setRandomUserDataJSON(JSON.stringify(request.data, null, 2) || 'No user data found.');
      setUsersInfos(request.data);
    }
    try {
      fetchData();
    } catch (error) { console.error(error); }
  }, []);

  return (
  <div>
        <h1> Feth data test </h1>
        <div>
          {usersInfos.map((user: IUserInfos) => (
              <UserInfosItem
              key={user.login}
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
