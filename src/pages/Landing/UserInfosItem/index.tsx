import React from 'react';

export interface UserInfos {
  name : IUserName;
  picture: IUserPicture;
}

interface IUserPicture {
  thumbnail: string;
}

interface IUserName {
    first: string;
    last: string;
    title: string;
}

interface UserInfosProps {
  user : UserInfos
}

const UserInfosItem: React.FC<UserInfosProps> = ({ user }) => (
  <>
    <img
    src={user.picture.thumbnail}
    height={90}
    width={90}
     />
    <h1>{user.name.first} {user.name.last}</h1>
  </>
);

export default UserInfosItem;
