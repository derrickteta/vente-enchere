import { Button, DatePicker, Form, Input, notification, Space } from 'antd';
import { useState } from 'react';
import { PRIMARY } from '../../../shared/colors';
import { createSalleEnchere } from '../network';

export const SalleEnchereForm = ({
  closeModal,
}: {
  closeModal?: () => void;
}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      layout='vertical'
      form={form}
      labelCol={{ span: 20 }}
      wrapperCol={{ span: 25 }}
      initialValues={{}}
      scrollToFirstError
      onFinish={async (data) => {
        setIsLoading(true);
        data.dateOuverture = data.dateOuverture.format('YYYY-MM-DD HH:mm:ss');
        let dataToPost: any = {
          lots: [],
          dateOuverture: data.dateOuverture,
          duree: data.duree,
          statut: 'en_cours',
        };
        console.log(dataToPost);

        await createSalleEnchere(dataToPost).then(async (data) => {
          if (data.success) {
            notification.success({
              message: 'Succès',
              description: data.message,
            });
            closeModal?.();
          } else {
            notification.error({
              message: 'Erreur',
              description: data.message,
            });
          }
        });
        setIsLoading(false);
      }}
    >
      <Space>
        <Form.Item
          label="Date d'ouverture"
          name='dateOuverture'
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner la date de début d'enchère",
            },
          ]}
        >
          <DatePicker showTime picker='date' />
        </Form.Item>
        <Form.Item
          label='Pas (FCFA)'
          name='pas'
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner le pas de l'enchère",
            },
          ]}
        >
          <Input type='number' placeholder='pas' />
        </Form.Item>
      </Space>
      <Form.Item
        label='Durée (heures)'
        name='duree'
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner la durée de l'enchère",
          },
        ]}
      >
        <Input type='number' placeholder='Durée' />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button
            type='primary'
            htmlType='submit'
            loading={isLoading}
            style={{
              width: '100%',
              backgroundColor: PRIMARY,
              borderColor: 'transparent',
            }}
          >
            Créer une nouvelle salle
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
