import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  notification,
  Select,
  Upload,
} from 'antd';
import { useEffect, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { ConnectedUserEntity } from '../../../entities/ConnectedUserEntity';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { SEMIDARK } from '../../../shared/colors';
import { addImageEvent, createEvent, fetchCategories } from '../network';

export const EventForm = ({ closeModal }: { closeModal: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const connectedUser: ConnectedUserEntity = useSelector(
    (state: any) => state.userReducer,
  ).user;
  const [categories, setCategory] = useState<CategorieEntity[]>([]);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCategories().then((data) => {
      if (data.success) {
        setCategory(data.result);
        setIsLoading(false);
      }
    });
  }, []);

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
        data.periode = data.periode.format('YYYY-MM-DD HH:mm');
        const images = data.images?.fileList.map((im: any) => im.originFileObj);
        const dataToPost: any = {
          nom: data.nom,
          description: data.description,
          periode: data.periode,
          vendeur: connectedUser._id,
          category: data.category,
          quantite: {
            valeur: Number(data.quantite),
            unite: data.unite,
          },
          estBio: data.estBio,
        };

        await createEvent(dataToPost).then(async (data) => {
          if (data.success) {
            await addImageEvent(data.result._id, images).then((dataIm) => {
              if (dataIm.success) {
                notification.success({
                  message: 'Succès',
                  description: data.message,
                });
              } else {
                notification.success({
                  message: 'Succès',
                  description:
                    'Le évènement a été enregistré avec succès, mais sans les images (une erreur) ',
                });
              }
            });
            closeModal();
          }
        });
        setIsLoading(false);
      }}
    >
      <Form.Item label='Nom' name='nom' hasFeedback>
        <Input placeholder='Nom' />
      </Form.Item>

      <Form.Item name='images' label='Images'>
        <Upload name='images' listType='picture' action={undefined}>
          <Button icon={<FiUpload style={{ marginRight: 10 }} />}>
            Chargez les images
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item label='Description' name='description'>
        <Input.TextArea rows={3} placeholder='Description' />
      </Form.Item>

      <Form.Item
        label='Quantité'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Quantité obligatoire',
          },
        ]}
      >
        <Input.Group compact style={{ margin: 0 }}>
          <Form.Item
            name='quantite'
            style={{
              width: 150,
              paddingRight: 20,
            }}
          >
            <Input placeholder='quantité' type='number' min={0} />
          </Form.Item>

          <Form.Item name='unite'>
            <Select placeholder='unité' style={{ width: 200 }}>
              <Select.Option value='Unité'>Unité</Select.Option>
              <Select.Option value='Sac'>Sac</Select.Option>
              <Select.Option value='Gramme'>Gramme</Select.Option>
              <Select.Option value='Kilogramme'>Kilogramme</Select.Option>
              <Select.Option value='Tonne'>Tonne</Select.Option>
              <Select.Option value='Camion'>Camion</Select.Option>
              <Select.Option value='Cajoule'>Cajoule</Select.Option>
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item label='Période' name='periode'>
        <DatePicker picker='date' format="'YYYY-MM-DD" />
      </Form.Item>

      <Form.Item label='Categorie' name='category' hasFeedback>
        <Select placeholder='Choisissez la categorie'>
          {categories.map((category) => (
            <Select.Option key={category._id} value={category._id}>
              {category.nom}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name='estBio' valuePropName='checked' label='100% bio ?'>
        <Checkbox />
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={isLoading}
          size='large'
          style={{
            backgroundColor: SEMIDARK,
            borderWidth: 0,
          }}
        >
          Ajouter l'Evènement
        </Button>
      </Form.Item>
    </Form>
  );
};
