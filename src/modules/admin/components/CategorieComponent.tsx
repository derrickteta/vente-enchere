import { Button, Space, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DataTable } from '../../shared/Table';
import { fetchCategories } from '../network/admin.network';

export const CategorieComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<CategorieEntity[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      if (data.success) {
        setUsers(data.result);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <>
      <h2 style={{ marginTop: 50 }}>Categorie</h2>
      <DataTable
        loading={isLoading}
        data={users}
        columns={userColumns}
        filterFunction={(user: CategorieEntity, filterValue: string) =>
          user.nom.toLowerCase().includes(filterValue) ||
          user.description.toLowerCase().includes(filterValue) ||
          user.dateCreation.toLowerCase().includes(filterValue)
        }
      />
    </>
  );
};
const userColumns = [
  {
    title: 'Nom',
    key: 'nom',
    render: (cell: any, row: any) => <span>{row.nom}</span>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (cell: any, row: any) => <span>{row.description} </span>,
  },

  {
    title: 'Action',
    key: 'action',
    render: (cell: any, row: any) => (
      <Tooltip title="supprimer l'article">
        <ButtonWithModal
          buttonText={<FiTrash2 />}
          buttonProps={{ danger: true }}
          modalProps={{ title: 'Confirmation' }}
        >
          {(closeModal) => (
            <div>
              <h3>Voulez vous supprimer cet utilisateur ?</h3>
              <Space>
                <Button type='primary' onClick={() => closeModal()}>
                  Fermer
                </Button>
                <Button
                  danger
                  onClick={async () => {
                    // if (response.success) {
                    //   notification.success({
                    //     message: 'Succès',
                    //     description: response.message,
                    //   });
                    //   window.location.reload();
                    // } else {
                    //   notification.success({
                    //     message: 'Erreur',
                    //     description: response.message,
                    //   });
                    // }
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
    ),
  },
];
