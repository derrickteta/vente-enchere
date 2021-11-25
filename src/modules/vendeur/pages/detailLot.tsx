import { Button, Form, Image, Input, Space, Tag, Tooltip } from 'antd';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { getColor } from '../../../shared/colors';
import { defaultImage } from '../../../shared/defaultImage';
import { API_ROUTES } from '../../shared/ApiRoutes';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { VendeurContainer } from '../components/VendeurContainer';

export const DetailLot = () => {
  const router = useHistory();
  const lot: LotEntity = router.location.state as any;

  return (
    <VendeurContainer clicked='dashboard'>
      <h1>
        Detail Lot <strong>N° {lot.numeroLot}</strong>{' '}
      </h1>
      <h2>
        Etat Lot :{' '}
        <Tag style={{ fontSize: 16 }} color={getColor(lot.statut)}>
          {lot.statut}
        </Tag>
      </h2>
      <h2>
        Prix Minimun: <strong>{lot.prixMin} FCFA</strong>{' '}
      </h2>
      <h2>
        Date Reception: <strong>{DateFrHrWithTime(lot.dateCreation)}</strong>
      </h2>
      <Space style={{ justifyContent: 'flex-end', display: 'flex' }}>
        <Tooltip title='Valider le Lot'>
          <Button
            size='large'
            type='primary'
            style={{ backgroundColor: '#4caf50', borderWidth: 0 }}
            onClick={() => {}}
          >
            Valider <FaCheckCircle style={{ marginLeft: 10 }} />
          </Button>
        </Tooltip>

        <Tooltip title='Refuser  le Lot'>
          <ButtonWithModal
            buttonText={
              <>
                Refuser <FaClock style={{ marginLeft: 10 }} />
              </>
            }
            buttonProps={{ danger: true, size: 'large' }}
            modalProps={{ title: 'Confirmation' }}
          >
            {(closeModal) => (
              <div>
                <h3>Voulez vous refuser ce lot ?</h3>
                <Form>
                  <Form.Item
                    label='Motif'
                    name='motif'
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir le motif de votre refus',
                      },
                    ]}
                  >
                    <Input.TextArea placeholder='motif' />
                  </Form.Item>
                </Form>
                <Space>
                  <Button type='primary' onClick={() => closeModal()}>
                    Fermer
                  </Button>
                  <Button
                    danger
                    onClick={async () => {
                      closeModal();
                    }}
                  >
                    Oui
                  </Button>
                </Space>
              </div>
            )}
          </ButtonWithModal>
        </Tooltip>

        <Tooltip title='Rejeter le Lot'>
          <ButtonWithModal
            buttonText={
              <>
                Rejeter <FiTrash2 style={{ marginLeft: 10 }} />
              </>
            }
            buttonProps={{
              danger: true,
              size: 'large',
              style: { backgroundColor: '#7B0000' },
            }}
            modalProps={{ title: 'Confirmation' }}
          >
            {(closeModal) => (
              <div>
                <h3>Voulez vous rejeter ce lot ?</h3>
                <Form>
                  <Form.Item
                    label='Motif'
                    name='motif'
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Veuillez saisir le motif de votre rejet',
                      },
                    ]}
                  >
                    <Input.TextArea placeholder='motif' />
                  </Form.Item>
                </Form>
                <Space>
                  <Button type='primary' onClick={() => closeModal()}>
                    Fermer
                  </Button>
                  <Button
                    danger
                    onClick={async () => {
                      closeModal();
                    }}
                  >
                    Oui
                  </Button>
                </Space>
              </div>
            )}
          </ButtonWithModal>
        </Tooltip>
      </Space>
      <DataTable data={lot.produits} columns={ProductColumns} />
    </VendeurContainer>
  );
};

const ProductColumns = [
  {
    title: 'Image',
    dataIndex: 'images',
    key: 'images',
    render: (cell: string[], row: any) => (
      <Image
        alt='logo'
        src={API_ROUTES.IMAGES(cell[0])}
        height={70}
        width={80}
        preview={false}
        style={{ objectFit: 'cover', borderRadius: 10 }}
        fallback={defaultImage}
      />
    ),
  },
  {
    title: 'Nom du produit',
    dataIndex: 'nom',
    key: 'nom',
  },
  {
    title: 'Quantité',
    dataIndex: 'quantite',
    key: 'quantite',
    render: (cell: any, row: any) => (
      <span>
        {cell.valeur} {cell.unite}
      </span>
    ),
  },
  {
    title: 'Prix Minimale',
    key: 'prixMin',
    dataIndex: 'prixMin',
    render: (cell: any, row: any) => <span>{cell} FCFA</span>,
  },
  {
    title: "Date d'Ajout",
    dataIndex: 'dateCreation',
    key: 'dateCreation',
    render: dateFormatter,
  },
  {
    title: 'Description',
    key: 'description',
    dataIndex: 'description',
    width: 300,
  },
];
