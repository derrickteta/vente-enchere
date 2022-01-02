import styled from '@emotion/styled';
import { Divider, Spin } from 'antd';
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
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<AuctionUser[]>([]);

  useEffect(() => {
    socket.on('count_clients', (data: AuctionUser[]) => {
      setUsers(data);
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <UsersContainer className='y-scroll'>
      <h3>Utilisateurs connectés</h3>
      <Divider />
      <Spin spinning={isLoading} />
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
