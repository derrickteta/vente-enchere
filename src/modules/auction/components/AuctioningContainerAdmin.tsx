import styled from '@emotion/styled';
import { Divider, Space, Statistic } from 'antd';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { ProduitEntity } from '../../../entities/Gestionproduit/produit.entity';
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
    await socket.emit('send_current_bid', {
      room: roomId,
      currentBid: selectedProduit?.prixMin,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  return (
    <AuctionContainer className='y-scroll'>
      <ProductList auctionId={roomId} getSelectedProduit={setSelectedProduit} />

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
              <p>Patate - 2 sac</p>
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
        <div className='box'>
          <Space style={{ marginBottom: 10 }}></Space>
        </div>
      </div>
    </AuctionContainer>
  );
};
