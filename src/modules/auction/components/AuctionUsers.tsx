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
  overflow-y: scroll;

  //remove scrollbar
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const ConnectedAuctionUsers = ({ users }: { users: string[] }) => {
  return (
    <UsersContainer>
      <h3>Utilisateurs connectés</h3>
      <Divider />
      {users.map((item, index) => (
        <UserItem name={item} key={index} index={index} />
      ))}
    </UsersContainer>
  );
};
