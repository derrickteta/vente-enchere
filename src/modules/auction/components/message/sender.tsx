import styled from '@emotion/styled';
import { SEMIDARK } from '../../../../shared/colors';
import { DateFrHrWithTime } from '../../../shared/DateToFrench';
import { MessageType } from '../ChatRoom';

const SenderContainer = styled.div`
  color: white;
  min-width: 40%;
  max-width: 50%;
  padding: 10px;
  margin: 5px;
  margin-bottom: 0;
  border-radius: 10px;
  background-color: ${SEMIDARK};
  align-self: flex-end;

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
        {DateFrHrWithTime(message.dateEnvoie.toUTCString())}
      </p>
    </>
  );
};
