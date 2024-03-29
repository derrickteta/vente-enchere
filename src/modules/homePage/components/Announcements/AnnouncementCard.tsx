import styled from '@emotion/styled';
import { Button } from 'antd';
import image from '../../../../assets/images/slide2.jpg';
import { PRIMARY } from '../../../../shared/colors';

const AnnouncementCardContainer = styled.div<{ backgroundImage: string }>`
  margin: 10px;
  height: 300px;
  width: 300px;
  border-radius: 20px;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: 0.5s;

    h2 {
      color: white;
      font-size: 25px;
    }

    p {
      color: white;
      font-size: 17px;
    }

    .button {
      opacity: 0;
    }

    &:hover {
      background-color: rgba(81, 45, 168, 0.9);
      transition: 0.5s;

      .button {
        opacity: 1;
      }
    }
  }
`;

export const AnnouncementCard = ({ announcement }: { announcement: any }) => {
  return (
    <AnnouncementCardContainer backgroundImage={image}>
      <div>
        <h2>Annonces</h2>
        <p>
          800kg de maïs et d'avocats seronts bientôt disponibles sur Agric
          auctions.
        </p>
        <p>
          <i>2021/11/05</i>{' '}
        </p>
        <Button
          type='primary'
          className='button'
          style={{
            backgroundColor: PRIMARY,
            borderColor: 'white',
            borderWidth: 2,
            color: 'white',
            borderRadius: 50,
            width: 160,
            alignSelf: 'flex-end',
          }}
          size='large'
        >
          En savoir plus
        </Button>
      </div>
    </AnnouncementCardContainer>
  );
};
