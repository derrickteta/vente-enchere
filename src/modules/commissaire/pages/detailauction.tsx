import { Button, Divider, notification, Space, Tag, Tooltip } from 'antd';
import { Key } from 'antd/lib/table/interface';
import Link from 'antd/lib/typography/Link';
import { useEffect, useState } from 'react';
import {
  FaExternalLinkAlt,
  FaLongArrowAltLeft,
  FaPlus,
  FaTrash,
} from 'react-icons/fa';
import { useHistory } from 'react-router';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ROUTES } from '../../../routes';
import { getColor } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DateFrHrWithTime } from '../../shared/DateToFrench';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { fetchLot } from '../../vendeur/network';
import { CommissaireContainer } from '../components/CommissaireContainer';
import { updateLotOfSalle } from '../network';

export const DetailEnchere = () => {
  const router = useHistory();
  const enchere: EnchereEntity = router.location.state as EnchereEntity;
  const [enchereLots, setEnchereLots] = useState<LotEntity[]>(enchere.lots);
  const [lots, setLots] = useState<LotEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLotsKeys, setSelectedLotsKeys] = useState<Key[]>([]);

  useEffect(() => {
    fetchLot().then((data) => {
      if (data.success) {
        let lotss: LotEntity[] = [];
        if (enchereLots.length === 0) {
          lotss = data.result;
        } else {
          for (let lot of data.result) {
            if (enchereLots.filter((l) => l._id !== lot._id).length > 0) {
              lotss.push(lot);
            }
          }
        }
        setLots(lotss);
        console.log(lotss);
      }
      setIsLoading(false);
    });
  }, [enchereLots]);

  if (!enchere) {
    return null;
  }

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
    {
      title: 'Action',
      key: 'action',
      render: (cell: any, row: any) => (
        <Space>
          <Tooltip title='Détails du lot'>
            <Button
              type='primary'
              onClick={() =>
                router.push(ROUTES.COMMISSAIRE_PAGE.LOT_DETAIL(row._id), row)
              }
            >
              <FaExternalLinkAlt />
            </Button>
          </Tooltip>
          <Tooltip title="Supprimer le lot de l'enchère">
            <ButtonWithModal
              buttonText={<FaTrash />}
              buttonProps={{ danger: true }}
              modalProps={{ title: 'Confirmation' }}
            >
              {(closeModal) => (
                <div>
                  <h3>Voulez vous supprimer ce lot de cette enchère ?</h3>
                  <Space>
                    <Button
                      danger
                      onClick={async () => {
                        let dataToPost = enchere.lots.filter(
                          (lotID) => lotID !== row._id,
                        );

                        await updateLotOfSalle(enchere._id, dataToPost).then(
                          async (data) => {
                            if (data.success) {
                              setEnchereLots(
                                enchereLots.filter((lot) => lot !== row),
                              );
                              setLots([...lots, row]);
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
                        closeModal();
                      }}
                    >
                      Oui
                    </Button>
                    <Button type='primary' onClick={() => closeModal()}>
                      Fermer
                    </Button>
                  </Space>
                </div>
              )}
            </ButtonWithModal>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const LotValidesColumns = [
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
    {
      title: 'Action',
      key: 'action',
      render: (cell: any, row: any) => (
        <Space>
          <Tooltip title='Détails du lot'>
            <Button
              type='primary'
              onClick={() =>
                router.push(ROUTES.COMMISSAIRE_PAGE.LOT_DETAIL(row._id), row)
              }
            >
              <FaExternalLinkAlt />
            </Button>
          </Tooltip>
          <Tooltip title='Ajouter le lot dans la salle'>
            <ButtonWithModal
              buttonText={<FaPlus />}
              buttonProps={{ danger: false }}
              modalProps={{ title: 'Confirmation' }}
            >
              {(closeModal) => (
                <div>
                  <h3>Voulez vous ajouter ce lot dans cette salle ?</h3>
                  <Space>
                    <Button
                      onClick={async () => {
                        let dataToPost = [...enchere.lots, row];

                        await updateLotOfSalle(enchere._id, dataToPost).then(
                          async (data) => {
                            if (data.success) {
                              setEnchereLots([...enchereLots, row]);
                              setLots(lots.filter((lot) => lot !== row));
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
                        closeModal();
                      }}
                    >
                      Oui
                    </Button>
                    <Button type='primary' onClick={() => closeModal()}>
                      Fermer
                    </Button>
                  </Space>
                </div>
              )}
            </ButtonWithModal>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <CommissaireContainer clicked='enchere'>
      <Link href={ROUTES.COMMISSAIRE_PAGE.AUCTION}>
        <FaLongArrowAltLeft></FaLongArrowAltLeft> Go back
      </Link>
      <h1 style={{ marginTop: 20, marginBottom: 20 }}>Infos enchere</h1>

      <Space direction='vertical'>
        <Space direction='horizontal' align='baseline'>
          <h2>Date de début:</h2>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            {DateFrHrWithTime(enchere.dateOuverture)}
          </p>
        </Space>
        <Space align='baseline'>
          <h2>Durée:</h2>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            {enchere.duree} heures
          </p>
        </Space>
      </Space>

      <Divider />

      <h2 style={{ marginTop: 30 }}>Liste des lots de l'enchère</h2>
      <DataTable loading={isLoading} data={enchereLots} columns={LotColumns} />

      <Divider />
      <h2 style={{ marginTop: 50 }}>Liste des Lots validés</h2>

      <DataTable
        selectedRowKeys={selectedLotsKeys}
        onSelectedRowKeysChange={(newSelectedLotsKeys: Key[]) => {
          setSelectedLotsKeys(newSelectedLotsKeys);
        }}
        loading={isLoading}
        data={lots}
        columns={LotValidesColumns}
        buttons={
          <ButtonWithModal
            buttonText='Ajouter les lots selectionnés'
            buttonProps={{
              danger: false,
              disabled: selectedLotsKeys.length === 0,
            }}
            modalProps={{ title: 'Confirmation' }}
          >
            {(closeModal) => (
              <div>
                <h3>Voulez vous ajouter ce lot dans cette salle ?</h3>
                <Space>
                  <Button
                    onClick={async () => {
                      for (let lotID of selectedLotsKeys) {
                        let dataToPost = [...enchere.lots, lotID];
                        console.log(dataToPost);

                        await updateLotOfSalle(enchere._id, dataToPost).then(
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
                      }

                      closeModal();
                    }}
                  >
                    Oui
                  </Button>
                  <Button type='primary' onClick={() => closeModal()}>
                    Fermer
                  </Button>
                </Space>
              </div>
            )}
          </ButtonWithModal>
        }
      />
    </CommissaireContainer>
  );
};
