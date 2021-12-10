import styled from '@emotion/styled';
import { BidType } from '../AuctioningContainer';

const Container = styled.div`
  border-radius: 10px;
  font-size: 14px;
  border: 1px solid white;
  min-width: 90px;
  padding: 5px;
  margin: 5px;

  > p {
    text-align: center;
    margin: 0;
  }
`;

export const BidContainer = ({ bid }: { bid: BidType }) => {
  return (
    <div>
      <p style={{ fontSize: 10, margin: 0, marginLeft: 5 }}>{bid.user} </p>
      <Container>
        <p>{bid.bid} FCFA </p>
      </Container>
    </div>
  );
};
