import React, { useCallback, useEffect, useState } from 'react';
import UserInfosItem, { UserInfos } from '../UserInfosItem';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState<string>();
  const [usersInfos, setUsersInfos] = useState<UserInfos[]>([]);
  const [page, setPage] = useState(1);

  const nextUser = useCallback(() => {
    if (page === undefined) return;
    const pageNumber = page + 1;
    setPage(pageNumber);
  }, [page]);

  useEffect(() => {
    async function fetchData(pageNumber = page) {
      const request = await api.get(`/api?page=${pageNumber}`);

      setRandomUserDataJSON(JSON.stringify(request.data, null, 2) || 'No user data found.');

      if (request.data.results === undefined) return;

      setUsersInfos([
        ...usersInfos,
        ...request.data.results,
      ]);
    }
    try {
      fetchData();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [page]);

  /*  useEffect(() => {
    api
      .get(`/api?page=${page}`)
      .then((request) => {
        setRandomUserDataJSON(JSON.stringify(request.data, null, 2) || 'No user data found.');
        if (request.data.results === undefined) return;

        setUsersInfos([
          ...usersInfos,
          ...request.data.results,
        ]);
      })
      .catch((err) => {
      // eslint-disable-next-line no-console
        console.error('No user data found.', err);
      });
  }, [page]); */

  return (
  <div>
    <div>
        <h1> Fetch Random Data User </h1>
    </div>

        <div>
          {usersInfos.map((user: UserInfos) => (
              <UserInfosItem
              key={user.name.first}
              user={user}
               />
          ))}
        </div>

        <div>
                <button disabled={page === undefined} onClick={nextUser}>
                    Fetch Next User
                    </button>
            </div>

        <div>
          <div>
            <h2>Last user's information JSON</h2>
          </div>
          <pre>
          {randomUserDataJSON}
          </pre>
        </div>
  </div>
  );
};

export default Landing;
