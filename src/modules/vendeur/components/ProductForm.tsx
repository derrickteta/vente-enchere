/* eslint-disable no-unused-vars */
import { UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message, Select, Upload } from 'antd';
import { useState } from 'react';
import { PRIMARY } from '../../../shared/colors';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const { Option } = Select;

function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val: any) {
  console.log('search:', val);
}

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const ProductForm = () => {
  // const router = useRouter();
  const [form] = Form.useForm();
  const [formLayout] = useState<LayoutType>('vertical');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      layout={formLayout}
      form={form}
      labelCol={{ span: 20 }}
      wrapperCol={{ span: 25 }}
      initialValues={{}}
      scrollToFirstError
      onFinish={async (data) => {
        setIsLoading(true);
        console.log(data);

        /*await createProduit(produit).then((data) =>
        {
          if (data.success)
          {
            notification.success(
              {
                message:"Succes",
                description:data.message,
              }
            );
          }
        }
        
      );*/
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
        name='description' //verifier nom bd
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner votre prénom',
          },
        ]}
      >
        <Input placeholder='Veuillez donner plus de details sur votre produit' />
      </Form.Item>

      <Form.Item
        label='Prix Minimal'
        name='prix_min'
        hasFeedback
        rules={[
          {
            required: true,
            message:
              'Veuillez renseigner le prix minimal auquel vous vendez votre priduit',
          },
        ]}
      >
        <Input placeholder='Prix Minimal' type='number' />
      </Form.Item>

      <Form.Item
        label='Categorie'
        name='category'
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Veuillez renseigner la categorie de votre produit',
          },
        ]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder='Choisissez la categorie a laquelle correspond votre produit'
          optionFilterProp='children'
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option?.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value='Fruit'>Fruit</Option>
          <Option value='Legumes'>Legumes</Option>
          <Option value='Cereales'>Cereales</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name='estBio'
        valuePropName='checked'
        label='Votre produit est-il 100% bio ?'
      >
        <Checkbox />
      </Form.Item>

      <Form.Item
        label='Quantite'
        name='qte'
        hasFeedback
        rules={[
          {
            required: true,
            message:
              'Veuillez renseigner la quantite de produit que vous mettez en vente',
          },
          {
            type: 'string',
            message: "Veuillez entrer un entier s'il vous plait",
          },
        ]}
      >
        <Input placeholder='quantite' />
      </Form.Item>

      <Form.Item label='Inserez une image' name='image'>
        <Upload {...props}>
          <Button
            icon={<UploadOutlined />}
            type='primary'
            loading={isLoading}
            size='small'
            style={{
              width: '100%',
              backgroundColor: PRIMARY,
              borderColor: 'transparent',
            }}
          >
            Cliquez ici
          </Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={isLoading}
          size='middle'
          style={{
            width: '50%',
            alignSelf: 'center',
            backgroundColor: PRIMARY,
            borderColor: 'transparent',
            marginBottom: 20,
            borderRadius: 50,
          }}
        >
          Ajouter le Produit au lot
        </Button>
      </Form.Item>
    </Form>
  );
};
