import styled from '@emotion/styled';
import { Button, Divider, message, notification, Space, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Socket } from 'socket.io-client';
import { ProductList } from './productList';

const AuctionContainer = styled.div`
  height: 100vh;
  color: white;
  flex: 2;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;

  .nums {
    p {
      font-size: 18px;
      color: white;
      margin-bottom: 0;
    }
  }

  .box {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justifyc-content: space-between;
    align-items: center;
    background-color: white;
    padding: 20px;
    color: black;
    margin-top: 10px;
  }

  .bidNum {
    font-size: 20px;
    font-family: 'Montserrat';
    margin: 0;
    margin-left: 50px;
  }

  .highest-bid {
    border-radius: 10px;
    font-size: 25px;
    border: 2px solid red;
    min-width: 200px;
    max-width: 250px;
    padding: 5px;
    font-family: 'Montserrat';
    text-align: center;
    align-self: center;
    margin-top: 50px;
  }
`;

export type BidType = {
  room: string;
  user: string;
  bid: number;
};
const counter = Date.now() + 1000 * 60 * 60 * 0.5;

export const AuctioningContainer = ({
  socket,
  roomId,
}: {
  socket: Socket;
  roomId: string;
}) => {
  const minPrice = 8000;
  const [bid, setBid] = useState(minPrice);
  const [maxBid, setMaxBid] = useState<BidType>({
    room: roomId,
    user: 'Admin',
    bid: minPrice,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step, setStep] = useState(500);

  useEffect(() => {
    socket.on('receive_bid', (data) => {
      setMaxBid(data);
      setBid(data.bid);
      message.info('Nouvelle Offre!!!');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const sendBid = async () => {
    if (bid > maxBid.bid) {
      const bidding = {
        room: roomId,
        user: socket.id,
        bid,
      };
      setMaxBid(bidding);

      await socket.emit('send_bid', bidding);
      message.success('Offre transmis avec succès');
    } else {
      notification.error({
        message: 'Erreur',
        description:
          'Vous ne pouvez pas enchérir a ce montant. Veuillez augmenter',
      });
    }
  };

  return (
    <AuctionContainer className='y-scroll'>
      <ProductList />
      <Divider style={{ backgroundColor: 'white' }} />
      <Space
        className='nums'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div>
          <p>{minPrice} FCFA</p>
        </div>
        <div>
          <p>Patate - 2 sac</p>
        </div>
        <div>
          <p>Pas: {step} FCFA</p>
        </div>
        <div>
          <Statistic.Countdown
            valueStyle={{ fontSize: 20, color: 'red' }}
            value={counter}
          />
        </div>
      </Space>
      <Divider style={{ backgroundColor: 'white' }} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: 400,
        }}
      >
        <div className='highest-bid'>{maxBid.bid} FCFA</div>
        <div className='box'>
          <Space style={{ marginBottom: 10 }}>
            <Button onClick={() => setBid(bid + step)}>
              <FaPlus color='green' size={16} />
            </Button>
            <Button danger onClick={() => setBid(bid - step)}>
              <FaMinus color='red' size={16} />
            </Button>
            <p className='bidNum'> {bid} FCFA</p>
          </Space>
          <Button type='primary' onClick={sendBid}>
            Enchérir
          </Button>
        </div>
      </div>
    </AuctionContainer>
  );
};
