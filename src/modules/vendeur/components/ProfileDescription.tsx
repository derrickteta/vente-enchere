/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from '@emotion/styled';
import { Avatar, Button, Descriptions, Divider, Space, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ConnectedUserEntity } from '../../../entities/ConnectedUserEntity';
import { UserEntity } from '../../../entities/GestionCompte/user.entity';
import { ROUTES } from '../../../routes';
import { PRIMARY } from '../../../shared/colors';
import { fetchOneVendeur } from '../../gerant/network/gerant.network';

const DescriptionContainer = styled.div`
  .div1 {
    background-color: #404e67;
    width: 100%;
    height: 300px;
    padding: 30px;
    margin-bottom: -5em;
  }

  .div2 {
    background-color: white;
    width: 70%;
    minheight: 500px;
    margin: auto;
    padding: 50px;
    box-shadow: 0 3px 5px 0 rgba(81, 45, 168, 0.3),
      0 6px 20px 0 rgba(81, 45, 168, 0.3);
    border-radius: 20px;
    transition: 0.5s;
  }
  .div3 {
    z-index: -2;
    display: flex;
    margin-left: -15 px;
  }
`;
function handlePictureSelected(event: any) {
  var picture = event.target.files[0];
  var src = URL.createObjectURL(picture);
}

export const ProfileDescription = () => {
  const router = useHistory();
  const photo = 'https://joeschmoe.io/api/v1/random';
  const connectedUser: ConnectedUserEntity = useSelector(
    (state: any) => state.userReducer,
  ).user;
  const [user, setUser] = useState<UserEntity>();

  useEffect(() => {
    fetchOneVendeur(connectedUser._id).then((vendeur) => {
      if (vendeur.success) {
        setUser(vendeur.result.user);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DescriptionContainer>
      <div className='div1'>
        <Space direction='vertical' align='center'>
          <Avatar size={150} src={photo} />
          <Space>
            <Upload name='image' listType='picture'>
              <Button
                style={{ backgroundColor: 'transparent', border: 'none' }}
              >
                <FaCamera size={20} color='white' />
              </Button>
            </Upload>
            <Button
              style={{ backgroundColor: 'transparent', border: 'none' }}
              onClick={() => {
                router.push(ROUTES.VENDEUR_PAGE.UPDATE);
              }}
            >
              <FiEdit size={20} color='white' />
            </Button>
          </Space>
        </Space>
      </div>

      <div className='div2'>
        <h3 style={{ fontWeight: 'bold', fontSize: '1.2em' }}>User infos</h3>
        <Divider />
        <Descriptions
          column={2}
          size='middle'
          labelStyle={{
            color: PRIMARY,
            fontWeight: 'bold',
          }}
        >
          <Descriptions.Item label='Nom'>{user?.nom} </Descriptions.Item>
          <Descriptions.Item label='Prenom'>{user?.prenom}</Descriptions.Item>
          <Descriptions.Item label='Pseudo'>{user?.pseudo}</Descriptions.Item>
          <Descriptions.Item label='Ville'>
            {user?.localisation.ville}
          </Descriptions.Item>
          <Descriptions.Item label='Pays'>
            {user?.localisation.pays}
          </Descriptions.Item>
          <Descriptions.Item label='Addresse'>
            {user?.localisation.adresse}
          </Descriptions.Item>
          <Descriptions.Item label='Ville'>
            {user?.localisation.ville}
          </Descriptions.Item>
          <Descriptions.Item label='Telephone'>
            {user?.telephone}
          </Descriptions.Item>
          <Descriptions.Item label='Email'>{user?.email}</Descriptions.Item>
          <Descriptions.Item label='Numero de Compte'>
            {user?.numeroCompte}
          </Descriptions.Item>
          <Descriptions.Item label='Numero de Transaction Mobile'>
            {user?.numeroMomo}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </DescriptionContainer>
  );
};
