import styled from '@emotion/styled';
import { ReactNode } from 'react';

const KPICardContainer = styled.div`
  margin: 5px;
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

export const KPICard = ({
  icon,
  text,
}: {
  icon: ReactNode;
  text: ReactNode;
}) => {
  return (
    <KPICardContainer>
      {icon}
      <p>{text}</p>
    </KPICardContainer>
  );
};
