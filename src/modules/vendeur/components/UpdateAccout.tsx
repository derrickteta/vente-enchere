/* eslint-disable no-unused-vars */
import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ConnectedUserEntity } from '../../../entities/ConnectedUserEntity';
import { UserEntity } from '../../../entities/GestionCompte/user.entity';
import { PRIMARY } from '../../../shared/colors';
import { update } from '../network';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const UpdateAccout = () => {
  // const router = useRouter();
  const [form] = Form.useForm();
  const [formLayout] = useState<LayoutType>('vertical');
  const [isLoading, setIsLoading] = useState(false);
  const connectedUser: ConnectedUserEntity = useSelector(
    (state: any) => state.userReducer,
  ).user;
  const [user, setUser] = useState<UserEntity>({
    localisation: { adresse: 'Essos', pays: 'Cameroun', ville: 'Yaounde' },
    _id: '619218c88efc77f9b190c097',
    nom: 'Franklin',
    prenom: 'Talom',
    telephone: '0690115022',
    email: 'franklin@polytechnique.cm',
    roles: ['client'],
    compte: '619218c88efc77f9b190c095',
  } as UserEntity);

  const datainform = {
    ...user,
    ville: user.localisation.ville,
    adresse: user.localisation.adresse,
    pays: user.localisation.pays,
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      labelCol={{ span: 20 }}
      wrapperCol={{ span: 25 }}
      initialValues={datainform}
      scrollToFirstError
      onFinish={async (data) => {
        setIsLoading(true);

        let dataToPost: any = {
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,

          roles: ['vendeur'],
          localisation: {
            adresse: data.adresse,
            ville: data.ville,
            pays: 'Cameroun',
          },
        };
        console.log(dataToPost);
        await update('61988cb9b62784f0da8d46cf', dataToPost)
          .then((data) => {
            if (data.success) {
              notification.success({
                message: 'Succes',
                description: data.message,
              });
            } else {
              notification.error({
                message: 'Erreur',
                description: data.message,
              });
            }
          })
          .catch((err) => console.log(err));
        setIsLoading(false);
      }}
    >
      <Form.Item
        label='Nom'
        name='nom'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre nom',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Prénom'
        name='prenom'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre prénom',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Ville'
        name='ville'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre ville',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Pays'
        name='pays'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre pays',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Adresse'
        name='adresse'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre adresse',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Adresse mail'
        name='email'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre mail',
          },
          {
            type: 'email',
            message: "Le format de l'email n'est pas respecté",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Téléphone'
        name='telephone'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre contact téléhonique',
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label='Pseudo'
        name='pseudo'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre pseudo',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Numero pour Transactions'
        name='momo'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre numero pour transactions',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Piece d\identification'
        name='cni'
        hasFeedback
        rules={[
          {
            required: true,
            message:
              "Veuillez renseigner votre numero de piece d'identification",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Specialite'
        name='Specialite'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre Specialite',
          },
        ]}
      >
        <Input />
      </Form.Item> */}

      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={isLoading}
          size='large'
          style={{
            width: '100%',
            backgroundColor: PRIMARY,
            borderColor: 'transparent',
          }}
        >
          Valider
        </Button>
      </Form.Item>
    </Form>
  );
};
