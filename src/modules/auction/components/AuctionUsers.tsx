import styled from '@emotion/styled';
import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { UserItem } from './UserItem';

const UsersContainer = styled.div`
  background-color: white;
  height: 100vh;
  flex: 0.8;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export type AuctionUser = {
  salleEnchere: string;
  username: string;
  date: string;
};

export const ConnectedAuctionUsers = ({ socket }: { socket: Socket }) => {
  const [users, setUsers] = useState<AuctionUser[]>([]);

  useEffect(() => {
    socket.on('count_clients', (data: AuctionUser[]) => {
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
        <UserItem
          name={item.username}
          key={item.username}
          index={index}
          socket={socket}
        />
      ))}
    </UsersContainer>
  );
};
