import styled from '@emotion/styled';
import { Space } from 'antd';
import { FaAngleRight } from 'react-icons/fa';
import { PRIMARY } from '../../../../shared/colors';
import { AuctionCard } from '../../../shared/AuctionCard';

const AuctionContainer = styled.div`
  margin-bottom: 50px;
  > h2 {
    color: ${PRIMARY};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Auction = () => {
  return (
    <AuctionContainer>
      <Space style={{ justifyContent: 'space-between' }}>
        <h2>Enchères programmé</h2>
        <h3
          style={{ margin: 0, textDecoration: 'underline', cursor: 'pointer' }}
        >
          Voir plus{' '}
          <FaAngleRight color='red' size={20} style={{ marginBottom: -6 }} />
        </h3>
      </Space>
      <div>
        <AuctionCard auction={{}} />
        <AuctionCard auction={{}} />
        <AuctionCard auction={{}} />
        <AuctionCard auction={{}} />
        <AuctionCard auction={{}} />
        <AuctionCard auction={{}} />
      </div>
    </AuctionContainer>
  );
};
