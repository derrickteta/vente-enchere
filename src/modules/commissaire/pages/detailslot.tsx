import { Button, Form, Image, Input, Space, Tag, Tooltip } from 'antd';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { getColor } from '../../../shared/colors';
import { defaultImage } from '../../../shared/defaultImage';
import { API_ROUTES } from '../../shared/ApiRoutes';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { CommissaireContainer } from '../components/CommissaireContainer';

export const DetailLot = () => {
  const router = useHistory();
  console.log(router.location.state);
  const lot: LotEntity = router.location.state as any;

  return (
    <CommissaireContainer clicked='dashboard'>
      <h2 style={{ marginTop: -30 }}>
        Detail Lot N° <strong>{lot.numeroLot}</strong>{' '}
      </h2>
      <h3>
        Etat Lot: <Tag color={getColor(lot.statut)}>{lot.statut}</Tag>
      </h3>
      <h3>
        Prix Minimun: <strong>{lot.prixMin} FCFA</strong>{' '}
      </h3>
      <h3>
        Date Reception: <strong>{DateFrHrWithTime(lot.dateCreation)}</strong>
      </h3>
      <Space style={{ justifyContent: 'flex-end', display: 'flex' }}>
        <Tooltip title='Valider le Lot'>
          <Button style={{ backgroundColor: 'green' }} onClick={() => {}}>
            Valider <FiCheck />
          </Button>
        </Tooltip>

        <Tooltip title='Rejeter le Lot'>
          <ButtonWithModal
            buttonText={
              <>
                Rejeter <FiTrash2 />
              </>
            }
            buttonProps={{
              danger: true,
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

        <Tooltip title='Refuser Lot'>
          <ButtonWithModal
            buttonText={
              <>
                Refuser <FiTrash2 />
              </>
            }
            buttonProps={{ danger: true }}
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
      </Space>
      <DataTable data={lot.produits} columns={ProductColumns} />
    </CommissaireContainer>
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
