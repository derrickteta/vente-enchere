import styled from '@emotion/styled';
import { Divider } from 'antd';
import { Socket } from 'net';
import { useEffect, useState } from 'react';
import { UserItem } from './UserItem';

const UsersContainer = styled.div`
  background-color: white;
  height: 100vh;
  flex: 0.8;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ConnectedAuctionUsers = ({ socket }: { socket: Socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('count_clients', (data) => {
      console.log(data);
      setUsers(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

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
