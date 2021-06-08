import React from 'react';

interface IUserPicture {
  thumbnail: string;
}

interface IUserName {
    first: string;
    last: string;
    title: string;
}

export interface UserInfos {
  name : IUserName;
  picture: IUserPicture;
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
    <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
  </>
);

export default UserInfosItem;
