import styled from '@emotion/styled';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import { Socket } from 'socket.io-client';
import { RecieverMessage } from './message/reciever';
import { SenderMessage } from './message/sender';

const ChatRoomContainer = styled.div`
  background-color: white;
  height: 100vh;
  flex: 1;
  padding: 20px;
  position: relative;

  > .bottom {
    position: absolute;
    bottom: 20px;
    width: 90%;
  }

  .input-block {
    display: flex;
    flex: 9;
    margin: 0 5px;

    .text-input {
      color: black;
      width: 100%;
      height: 50px;
      border-radius: 25px;
      border: 0;
      padding-left: 30px;
      font-size: 14px;
      outline: none;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .message-section {
    height: 85%;
    display: flex;
    flex-direction: column;
  }
`;

export type MessageType = {
  messageId: string;
  authorId: string;
  authorName: string;
  message: string;
  dateEnvoie: string;
};

export const ChatRoom = ({
  socket,
  roomId,
}: {
  socket: Socket;
  roomId: string;
}) => {
  const [textMessage, setTextMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const name = socket.id;

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((list) => [...list, data]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const sendMessage = async () => {
    messages.push({
      messageId: Math.round(
        Math.random() * (999999 - 100000 + 1) + 100000,
      ).toString(),
      authorId: name,
      authorName: name,
      message: textMessage,
      dateEnvoie: new Date().toUTCString(),
    });
    setMessages(messages);
    setTextMessage('');
    const messageData = {
      room: roomId,
      messageId: Math.round(
        Math.random() * (999999 - 100000 + 1) + 100000,
      ).toString(),
      authorId: name,
      authorName: name,
      message: textMessage,
      dateEnvoie: new Date().toUTCString(),
    };
    await socket.emit('send_message', messageData);

    document
      .getElementById('m-block')
      ?.scrollTo(0, document.getElementById('m-block')?.scrollHeight as number);
  };

  return (
    <ChatRoomContainer className='y-scroll'>
      <h3>Chat room</h3>
      <Divider />
      <div id='m-block' className='message-section y-scroll'>
        {messages.map((mess, index) =>
          mess.authorName === name ? (
            <SenderMessage key={index} message={mess} />
          ) : (
            <RecieverMessage key={index} message={mess} />
          ),
        )}
      </div>
      <div className='bottom'>
        <div className='input-block'>
          <input
            placeholder='envoyez un message...'
            className='text-input'
            type='text'
            value={textMessage}
            onChange={(event) => setTextMessage(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter' && textMessage !== '') {
                sendMessage();
              }
            }}
          />
          <MdSend
            size={25}
            color='#777'
            onClick={() => textMessage !== '' && sendMessage()}
            style={{
              marginTop: 15,
              marginLeft: -50,
              marginRight: 30,
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </ChatRoomContainer>
  );
};
