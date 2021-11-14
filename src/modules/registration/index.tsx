/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import { Button, Image, Space } from 'antd';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import slide1 from '../../assets/images/slide3.jpg';
import { ROUTES } from '../../routes';
import { PRIMARY } from '../../shared/colors';
import { defaultImage } from '../../shared/defaultImage';
import { RegistrationForm } from './components/registrationForm';

const RegistrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .infos {
    display: none;
  }

  .forms {
    background-color: white;
    width: 300px;
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > h1 {
      font-family: Montserrat;
      text-align: center;
      color: ${PRIMARY};
    }
  }

  .conditions {
    font-size: 12px;
    color: #777;
    text-align: center;
    margin: 0;
  }

  @media (min-width: 768px) {
    > div {
      display: flex;
    }

    .infos {
      display: block;
      width: 450px;
      background-image: url(${slide1});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 20px;
      margin-bottom: 20px;

      > div {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.7);

        .text {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          padding: 20px;
          padding-top: 0;

          h2 {
            color: white;
            font-family: Montserrat;
          }

          > h1 {
            color: white;
            font-family: Montserrat;
            font-size: 35px;
            margin-bottom: 5px;
          }

          > p {
            color: white;
            font-size: 18px;
          }
        }
      }
    }

    .forms {
      width: 450px;
    }
  }
`;

export const RegistrationPage = () => {
  const router = useHistory();
  const [isClient, setIsClient] = useState(true);

  return (
    <RegistrationContainer>
      <div>
        <div className='infos'>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                alt='logo'
                src={logo}
                height={200}
                width={200}
                preview={false}
                style={{ objectFit: 'cover' }}
                fallback={defaultImage}
              />
            </div>

            <div className='text'>
              <h2>Bienvenu sur</h2>
              <h1>Agric Auctions</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam sit ipsa amet maxime optio placeat eos. Quibusdam
                repellendus nemo cumque doloremque facere ad reiciendis
                sapiente, magni fugiat, unde temporibus quidem. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quasi nesciunt odio
                consectetur laboriosam accusamus enim exercitationem delectus
                adipisci. Facere at, quaerat quo delectus odio neque facilis
                sapiente fuga fugiat ab.
              </p>

              <Button
                type='primary'
                size='large'
                style={{
                  width: '80%',
                  backgroundColor: 'transparent',
                  borderColor: 'white',
                  borderWidth: 2,
                  color: 'white',
                  marginBottom: 20,
                  borderRadius: 50,
                }}
                onClick={() => router.push(ROUTES.SIGNIN)}
              >
                Se connecter
              </Button>
            </div>
          </div>
        </div>
        <div className='forms'>
          <h1>Créez un compte</h1>
          <Space style={{ width: '100%', justifyContent: 'center' }}>
            <Button
              type={isClient ? 'primary' : 'default'}
              onClick={() => setIsClient(true)}
            >
              Client
            </Button>
            <Button
              type={!isClient ? 'primary' : 'default'}
              onClick={() => setIsClient(false)}
            >
              Vendeur
            </Button>
          </Space>
          <RegistrationForm isClient={isClient} />
          <Space
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <p>Vous avez un compte ?</p>
            <Link to={ROUTES.SIGNIN} style={{ textDecoration: 'underline' }}>
              <p>Connectez-vous</p>
            </Link>
          </Space>
          <p className='conditions'>
            En cliquant sur 'Créer mon compte', j'accepte les{' '}
            <a href='.'>Conditions d'Utilisations</a> de <b>Agric Auctions</b>{' '}
            et je comprends que les informations de mon compte seront utilisées
            conformément à la <a href='.'>Politique de confidentialité</a> de
            Agric Auctions
          </p>
        </div>
      </div>
    </RegistrationContainer>
  );
};
