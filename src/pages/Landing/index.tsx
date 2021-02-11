import React, { useCallback, useEffect, useState } from 'react';
import UserInfosItem, { UserInfos } from './UserInfosItem';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState<string>();
  const [usersInfos, setUsersInfos] = useState<UserInfos[]>([]);
  const [page, setPage] = useState(1);
  /* const prevPage = useCallback(() => {
    if (page === 1) return;
    const pageNumber = page - 1;
    setPage(pageNumber);
  }, [page]); */
  const nextPage = useCallback(() => {
    if (page === undefined) return;
    const pageNumber = page + 1;
    setPage(pageNumber);
  }, [page]);
  /* const deleteGridItem = useCallback(
    async id => {
      try {
        await api.delete(`/products/${id}`);
        const bla = products.filter(
          (deliveryman: IProduct) => deliveryman.id !== id,
        );
        setFilteredProducts(bla);
      } catch (err) {
        console.log('Erro');
      }
    },
    [products],
  ); */
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
                {/* <button disabled={page === 1} onClick={prevPage}>
                    Before
                    </button> */}
                <button disabled={page === undefined} onClick={nextPage}>
                    Next User
                    </button>
            </div>

        <div>
          <div>
            <h1> JSON - Last user's information </h1>
          </div>
          {randomUserDataJSON}
        </div>
  </div>
  );
};

export default Landing;
