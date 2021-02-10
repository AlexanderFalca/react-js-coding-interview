import React from 'react';

export interface IUserInfos {

// eslint-disable-next-line camelcase
    avatar_url: string;
    login: string;
}

interface UserInfosProps {
  user : IUserInfos;
}

const UserInfosItem: React.FC<UserInfosProps> = ({ user }) => (
  <div>
    <img
    src={user.avatar_url}
    height={90}
    width={90}
     />
    <h1>{user.login}</h1>
  </div>
);

export default UserInfosItem;
