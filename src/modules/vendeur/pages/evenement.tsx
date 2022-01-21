import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  Tag,
  Upload,
} from 'antd';
import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { getColor, PRIMARY } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { VendeurContainer } from '../components/VendeurContainer';

export const VendeurEventPage = () => {
  // const router = useHistory();
  const [isLoading] = useState(false);
  const [lots] = useState<LotEntity[]>([]);
  const [categories] = useState<CategorieEntity[]>([]);
  const [form] = Form.useForm();

  const LotColumns = [
    {
      title: 'Lot N°',
      dataIndex: 'numeroLot',
      key: 'numeroLot',
      render: (cell: number, row: any) => {
        const val = String(cell);
        return <span>{`${val.slice(0, 3)}-${val.slice(3)}`} </span>;
      },
    },
    {
      title: 'Etat',
      dataIndex: 'statut',
      key: 'statut',
      render: (cell: string, row: any) => (
        <Tag color={getColor(cell)}>{cell}</Tag>
      ),
    },
    {
      title: 'Prix Minimum',
      dataIndex: 'prixMin',
      key: 'prixMin',
      render: (cell: number, row: any) => (
        <span>
          {cell} {'FCFA'}
        </span>
      ),
    },
    {
      title: 'Nombre de Produit',
      dataIndex: 'produits',
      key: 'produits',
      render: (cell: [], row: any) => <span>{cell.length}</span>,
    },
    {
      title: 'Date Reception',
      dataIndex: 'dateCreation',
      key: 'dateCreation',
      render: dateFormatter,
    },
  ];

  return (
    <VendeurContainer clicked='products'>
      <div>
        <h2>Evenement</h2>
        <DataTable
          loading={isLoading}
          data={lots}
          columns={LotColumns}
          buttons={
            <ButtonWithModal
              buttonText='Nouveau Evénement'
              buttonProps={{
                style: { backgroundColor: PRIMARY, borderWidth: 0 },
              }}
              modalProps={{ title: "Création d'un événement" }}
            >
              {(closeModal) => (
                <div>
                  <Form
                    layout='vertical'
                    form={form}
                    labelCol={{ span: 20 }}
                    wrapperCol={{ span: 25 }}
                    initialValues={{}}
                    scrollToFirstError
                    onFinish={async (data) => {
                      console.log(data);
                    }}
                  >
                    <Form.Item
                      label='Nom'
                      name='Nom'
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message:
                            'Veuillez renseigner le nom de votre produit',
                        },
                      ]}
                    >
                      <Input.TextArea rows={1} placeholder='Nom' />
                    </Form.Item>

                    <Form.Item
                      name='images'
                      label='Images'
                      rules={[
                        {
                          required: true,
                          message: "L'image de l'article est obligatoire",
                        },
                      ]}
                    >
                      <Upload
                        name='images'
                        listType='picture'
                        action={undefined}
                      >
                        <Button icon={<FiUpload style={{ marginRight: 10 }} />}>
                          Chargez les image du produits
                        </Button>
                      </Upload>
                    </Form.Item>

                    <Form.Item label='description' name='description'>
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
                          rules={[
                            {
                              required: true,
                              message: 'Quantité obligatoire',
                            },
                          ]}
                          style={{
                            width: 150,
                            paddingRight: 20,
                          }}
                        >
                          <Input placeholder='quantité' type='number' min={0} />
                        </Form.Item>

                        <Form.Item
                          name='unite'
                          rules={[
                            {
                              required: true,
                              message: "L'unité est obligatoire",
                            },
                          ]}
                        >
                          <Select placeholder='unité du produit'>
                            <Select.Option value='Unité'>Unité</Select.Option>
                            <Select.Option value='Sac'>Sac</Select.Option>
                            <Select.Option value='Gramme'>Gramme</Select.Option>
                            <Select.Option value='Kilogramme'>
                              Kilogramme
                            </Select.Option>
                            <Select.Option value='Tonne'>Tonne</Select.Option>
                            <Select.Option value='Camion'>Camion</Select.Option>
                            <Select.Option value='Cajoule'>
                              Cajoule
                            </Select.Option>
                          </Select>
                        </Form.Item>
                      </Input.Group>
                    </Form.Item>

                    <Form.Item label='Période'>
                      <Input type='date' />
                    </Form.Item>

                    <Form.Item
                      label='Categorie'
                      name='category'
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message:
                            'Veuillez renseigner la categorie de votre produit',
                        },
                      ]}
                    >
                      <Select placeholder='Choisissez la categorie'>
                        {categories.map((category) => (
                          <Select.Option
                            key={category._id}
                            value={category._id}
                          >
                            {category.nom}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name='estBio'
                      valuePropName='checked'
                      label='Votre produit est-il 100% bio ?'
                    >
                      <Checkbox />
                    </Form.Item>

                    <Space
                      style={{
                        width: '100%',
                        justifyContent: 'flex-end',
                        paddingTop: '10px',
                      }}
                    >
                      <Form.Item>
                        <Button danger onClick={() => closeModal()}>
                          Fermer
                        </Button>
                      </Form.Item>
                      <Form.Item>
                        <Button
                          type='primary'
                          htmlType='submit'
                          loading={isLoading}
                          size='large'
                          style={{
                            backgroundColor: PRIMARY,
                            borderWidth: 0,
                          }}
                        >
                          Ajouter l'Evenement
                        </Button>
                      </Form.Item>
                    </Space>
                  </Form>
                </div>
              )}
            </ButtonWithModal>
          }
        />
      </div>
    </VendeurContainer>
  );
};
