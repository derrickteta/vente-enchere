import styled from '@emotion/styled';
import { ReactNode } from 'react';

const EnchereCardContainer = styled.div`
  margin: 10px;
  padding: 10px;
  height: 200px;
  width: 220px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 5px 0 rgba(81, 45, 168, 0.3),
    0 6px 20px 0 rgba(81, 45, 168, 0.3);

  > p {
    font-size: 14px;
    text-align: center;
    color: #777;
    font-family: Montserrat;
    margin: 10px;
  }
`;

export const EnchereCard = ({
  date,
  lot,
  produit,
}: {
  date: ReactNode;
  lot: ReactNode;
  produit: ReactNode;
}) => {
  return (
    <EnchereCardContainer onClick={() => {}}>
      <p>
        Date: <strong style={{ color: 'red' }}>{date}</strong>
      </p>
      <p>
        Nombre Lot: <strong>{lot}</strong>
      </p>
      <p>
        Nombre Produit: <strong>{produit}</strong>
      </p>
    </EnchereCardContainer>
  );
};
