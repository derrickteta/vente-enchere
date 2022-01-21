import styled from '@emotion/styled';
import { Divider, message, Space, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
import { BidType } from './AuctioningContainer';
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

const counter = Date.now() + 1000 * 60 * 60 * 0.5;

export const AuctioningContainerAdmin = ({
  socket,
  roomId,
  enchere,
}: {
  socket: Socket;
  roomId: string;
  enchere?: EnchereEntity;
}) => {
  const [selectedProduit, setSelectedProduit] = useState<ProduitEntity>();
  const [maxBid, setMaxBid] = useState<BidType>({
    room: roomId,
    bid: 0,
  });

  useEffect(() => {
    if (selectedProduit) {
      sendInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduit]);

  const sendInfo = async () => {
    await socket.emit('send_current_product', {
      room: roomId,
      currentProduct: selectedProduit,
    });
    setMaxBid({
      room: roomId,
      bid: selectedProduit?.prixMin || 0,
    });
  };

  useEffect(() => {
    socket.on('receive_bid', (data) => {
      setMaxBid(data);
      message.info('Nouvelle Offre!!!', 5);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <AuctionContainer className='y-scroll'>
      <ProductList
        auctionId={roomId}
        getSelectedProduit={setSelectedProduit}
        currentProductId={selectedProduit?._id}
      />

      <Divider style={{ backgroundColor: 'white' }} />
      {selectedProduit && (
        <>
          <p>En cours...</p>
          <Space
            className='nums'
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <p>{selectedProduit?.prixMin} FCFA</p>
            </div>
            <div>
              <p>{selectedProduit.nom}</p>
            </div>
            <div>
              <p>Pas: {enchere?.pas} FCFA</p>
            </div>
            <div>
              <Statistic.Countdown
                valueStyle={{ fontSize: 20, color: 'red' }}
                value={counter}
              />
            </div>
          </Space>
          <Divider style={{ backgroundColor: 'white' }} />
        </>
      )}

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
          <Space style={{ marginBottom: 10 }}></Space>
        </div>
      </div>
    </AuctionContainer>
  );
};
