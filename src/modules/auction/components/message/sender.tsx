import styled from '@emotion/styled';
import { DateFrHrWithTime } from '../../../shared/DateToFrench';
import { MessageType } from '../ChatRoom';

const SenderContainer = styled.div`
  min-width: 40%;
  max-width: 50%;
  padding: 10px;
  margin: 5px;
  margin-bottom: 0;
  border-radius: 10px;
  align-self: flex-end;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  p {
    margin: 0;
  }
`;

export const SenderMessage = ({ message }: { message: MessageType }) => {
  return (
    <>
      <SenderContainer>
        <p>{message.message}</p>
      </SenderContainer>
      <p
        style={{
          fontSize: 9,
          alignSelf: 'flex-end',
          marginBottom: 0,
          marginRight: 5,
        }}
      >
        {DateFrHrWithTime(message.dateEnvoie)}
      </p>
    </>
  );
};
