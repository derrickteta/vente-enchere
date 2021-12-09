import styled from '@emotion/styled';
import { SEMIDARK } from '../../../../shared/colors';
import { DateFrHrWithTime } from '../../../shared/DateToFrench';
import { MessageType } from '../ChatRoom';

const RecieverContainer = styled.div`
  min-width: 40%;
  color: white;
  max-width: 50%;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  background-color: ${SEMIDARK};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  p {
    margin: 0;
  }
`;

export const RecieverMessage = ({ message }: { message: MessageType }) => {
  return (
    <>
      <p style={{ fontSize: 12, margin: 0 }}>{message.authorName} </p>
      <RecieverContainer>
        <p>{message.message}</p>
      </RecieverContainer>
      <div
        style={{ maxWidth: '50%', display: 'flex', justifyContent: 'flex-end' }}
      >
        <p
          style={{
            fontSize: 9,
            marginBottom: 0,
            marginLeft: 5,
          }}
        >
          {DateFrHrWithTime(message.dateEnvoie)}
        </p>
      </div>
    </>
  );
};
