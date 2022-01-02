import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import { ConnectedUserEntity } from '../../../entities/ConnectedUserEntity';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { SEMIDARK } from '../../../shared/colors';
import { fetchOneSallesEnchere } from '../../commissaire/network';
import { AuctioningContainerAdmin } from '../components/AuctioningContainerAdmin';
import { ConnectedAuctionUsers } from '../components/AuctionUsers';
import { ChatRoom } from '../components/ChatRoom';

const AuctionContainer = styled.div`
  background-color: ${SEMIDARK};
  height: 100vh;
  display: flex;
`;

const socket = io('https://vente-enchere-api.herokuapp.com/');

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('disconnect', () => {
  console.log(socket.id); // undefined
});

export const AuctionRoomAdmin = () => {
  const params = new URLSearchParams(useLocation().search);
  const roomId = params.get('id');
  const [enchere, setEnchere] = useState<EnchereEntity>();
  const connectedUser: ConnectedUserEntity = useSelector(
    (state: any) => state.userReducer,
  ).user;

  useEffect(() => {
    fetchOneSallesEnchere(roomId as string).then((data) => {
      if (data.success) {
        setEnchere(data.result);
      }
    });
    socket.emit('join_room', {
      room: roomId,
      salleEnchere: roomId,
      username: 'Admin',
      compte: connectedUser.compteId,
      date: new Date().toISOString(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuctionContainer>
      <ConnectedAuctionUsers socket={socket} />
      <AuctioningContainerAdmin
        enchere={enchere}
        socket={socket}
        roomId={roomId as string}
      />
      <ChatRoom socket={socket} roomId={roomId as string} />
    </AuctionContainer>
  );
};
