import styled from '@emotion/styled';
import { Divider } from 'antd';
import { UserItem } from './UserItem';

const UsersContainer = styled.div`
  background-color: white;
  height: 100vh;
  flex: 0.8;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ConnectedAuctionUsers = ({ users }: { users: string[] }) => {
  return (
    <UsersContainer className='y-scroll'>
      <h3>Utilisateurs connectés</h3>
      <Divider />
      {users.map((item, index) => (
        <UserItem name={item} key={index} index={index} />
      ))}
    </UsersContainer>
  );
};
