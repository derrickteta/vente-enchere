import { Button, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { PRIMARY } from '../../../shared/colors';
import { createCategory, updateCategory } from '../network/admin.network';

export const CategorieForm = ({
  closeModal,
  dataInForm,
}: {
  closeModal?: () => void;
  dataInForm?: CategorieEntity;
}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      layout='vertical'
      form={form}
      labelCol={{ span: 20 }}
      wrapperCol={{ span: 25 }}
      initialValues={dataInForm}
      scrollToFirstError
      onFinish={async (data) => {
        setIsLoading(true);
        let dataToPost: any = {
          nom: data.nom,
          description: data.description,
        };
        if (dataInForm) {
          await updateCategory(dataInForm._id, dataToPost).then(
            async (data) => {
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
            },
          );
        } else {
          await createCategory(dataToPost).then(async (data) => {
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
        }

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
        <Input placeholder='nom' />
      </Form.Item>

      <Form.Item
        label='Description'
        name='description'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner la description de cette categorie',
          },
        ]}
      >
        <Input placeholder='description' />
      </Form.Item>

      <Form.Item>
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
          {dataInForm ? 'Modifier' : ' Créer une nouvelle categorie'}
        </Button>
      </Form.Item>
    </Form>
  );
};
