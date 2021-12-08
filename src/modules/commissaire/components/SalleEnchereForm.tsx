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
        let dataToPost: any = {
          lots: [],
          dateOuverture: data.dateOuverture,
          duree: data.duree,
          statut: 'en_cours',
        };
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
        <DatePicker picker='date' />
      </Form.Item>
      <Form.Item
        label='Durée'
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
            size='large'
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
