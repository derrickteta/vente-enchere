import { Button, notification, Space, Tag, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import {
  FaDoorClosed,
  FaExternalLinkAlt,
  FaPlus,
  FaTrash,
} from 'react-icons/fa';
import { useHistory } from 'react-router';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { ROUTES } from '../../../routes';
import { getColor } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { CommissaireContainer } from '../components/CommissaireContainer';
import { SalleEnchereForm } from '../components/SalleEnchereForm';
import {
  deleteSalleEnchere,
  fermerSalleEnchere,
  fetchSallesEnchere,
} from '../network';

export const CommissaireAuctions = () => {
  const router = useHistory();
  const [sallesEnchere, setSallesEnchere] = useState<EnchereEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSallesEnchere().then((data) => {
      if (data.success) {
        setSallesEnchere(data.result);
        setIsLoading(false);
      }
    });
  }, []);

  const SalleEnchereColumns = [
    {
      title: "Date d'ouverture",
      dataIndex: 'dateOuverture',
      key: 'dateOuverture',
      render: dateFormatter,
    },
    {
      title: 'Durée',
      dataIndex: 'duree',
      key: 'duree',
      render: dateFormatter,
    },
    {
      title: 'Nombre de Lots',
      dataIndex: 'lots',
      key: 'lots',
      render: (cell: [], row: any) => <span>{cell.length}</span>,
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
      title: 'Action',
      key: 'action',
      render: (cell: any, row: any) => (
        <Space>
          <Tooltip title='Détails salle enchère'>
            <Button
              type='primary'
              onClick={() => {
                console.log('auction', row);
                router.push(
                  ROUTES.COMMISSAIRE_PAGE.AUCTION_DETAIL(row._id),
                  row,
                );
              }}
            >
              <FaExternalLinkAlt />
            </Button>
          </Tooltip>
          <Tooltip title='Fermer la salle'>
            <ButtonWithModal
              buttonText={<FaDoorClosed />}
              buttonProps={{ danger: false }}
              modalProps={{ title: 'Confirmation' }}
            >
              {(closeModal) => (
                <div>
                  <h3>Voulez vous fermer cette salle ?</h3>
                  <Space>
                    <Button
                      onClick={async () => {
                        await fermerSalleEnchere(row._id).then((data) => {
                          if (data.success) {
                            notification.success({
                              message: 'Succès',
                              description: data.message,
                            });
                            fetchSallesEnchere().then((data) => {
                              if (data.success) {
                                setSallesEnchere(data.result);
                                setIsLoading(false);
                              }
                            });
                            closeModal?.();
                          } else {
                            notification.error({
                              message: 'Erreur',
                              description: data.message,
                            });
                          }
                        });
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
          <Tooltip title='Supprimmer la salle'>
            <ButtonWithModal
              buttonText={<FaTrash />}
              buttonProps={{ danger: true }}
              modalProps={{ title: 'Confirmation' }}
            >
              {(closeModal) => (
                <div>
                  <h3>Voulez vous Supprimmer cette salle ?</h3>
                  <Space>
                    <Button
                      danger
                      onClick={async () => {
                        await deleteSalleEnchere(row._id).then((data) => {
                          if (data.success) {
                            notification.success({
                              message: 'Succès',
                              description: data.message,
                            });
                            fetchSallesEnchere().then((data) => {
                              if (data.success) {
                                setSallesEnchere(data.result);
                                setIsLoading(false);
                              }
                            });
                            closeModal?.();
                          } else {
                            notification.error({
                              message: 'Erreur',
                              description: data.message,
                            });
                          }
                        });
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
      <h2 style={{ marginTop: 20, marginBottom: 20 }}>
        Liste des Salles d'enchère
      </h2>
      <ButtonWithModal
        buttonText='Créer une salle'
        buttonProps={{
          style: { marginBottom: 20 },
          icon: <FaPlus />,
          onClick: () => {
            fetchSallesEnchere().then((data) => {
              if (data.success) {
                setSallesEnchere(data.result);
                setIsLoading(false);
              }
            });
          },
        }}
        modalProps={{ title: "Création d'une salle" }}
      >
        {(closeModal) => {
          return <SalleEnchereForm closeModal={closeModal} />;
        }}
      </ButtonWithModal>
      <DataTable
        loading={isLoading}
        data={sallesEnchere}
        columns={SalleEnchereColumns}
      />
    </CommissaireContainer>
  );
};
