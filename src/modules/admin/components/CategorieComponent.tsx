import { Button, notification, Space, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { FiPenTool, FiTrash2 } from 'react-icons/fi';
import { CategorieEntity } from '../../../entities/Gestionproduit/categorie.entity';
import { SEMIDARK } from '../../../shared/colors';
import { ButtonWithModal } from '../../shared/ButtonWithModal';
import { DataTable } from '../../shared/Table';
import { deleteCategory, fetchCategories } from '../network/admin.network';
import { CategorieForm } from './CategorieForm';

export const CategorieComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState<CategorieEntity[]>([]);

  useEffect(() => {
    fetchCategories().then((data) => {
      if (data.success) {
        setCategory(data.result);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      <h2 style={{ marginTop: 50 }}>Categories</h2>
      <DataTable
        expandable={true}
        expandField={'dateCreation'}
        loading={isLoading}
        data={category}
        columns={Columns}
        filterFunction={(categorie: CategorieEntity, filterValue: string) =>
          categorie.nom.toLowerCase().includes(filterValue) ||
          categorie.description.toLowerCase().includes(filterValue)
        }
        buttons={
          <ButtonWithModal
            buttonText='Nouvelle Categorie'
            buttonProps={{
              style: { backgroundColor: SEMIDARK, borderWidth: 0 },
            }}
            modalProps={{ title: "Création d'une nouvelle categorie" }}
          >
            {(closeModal) => <CategorieForm closeModal={closeModal} />}
          </ButtonWithModal>
        }
      />
    </>
  );
};
const Columns = [
  {
    title: 'Nom',
    key: 'nom',
    dataIndex: 'nom',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },

  {
    title: 'Action',
    key: 'action',
    render: (cell: any, row: CategorieEntity) => (
      <Space>
        <Tooltip title='supprimer la categorie'>
          <ButtonWithModal
            buttonText={<FiTrash2 />}
            buttonProps={{ danger: true }}
            modalProps={{ title: 'Confirmation' }}
          >
            {(closeModal) => (
              <div className='d-flex'>
                <h3>Voulez vous supprimer cette categorie ?</h3>
                <Space>
                  <Button type='primary' onClick={() => closeModal()}>
                    Fermer
                  </Button>
                  <Button
                    danger
                    onClick={async () => {
                      await deleteCategory(row._id).then((response) => {
                        if (response.success) {
                          notification.success({
                            message: 'Succès',
                            description: response.message,
                          });
                          window.location.reload();
                        } else {
                          notification.success({
                            message: 'Erreur',
                            description: response.message,
                          });
                        }
                      });

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

        <ButtonWithModal
          buttonText={<FiPenTool />}
          buttonProps={{ style: { backgroundColor: SEMIDARK, borderWidth: 0 } }}
          modalProps={{ title: "Modification d'une categorie" }}
        >
          {(closeModal) => (
            <CategorieForm closeModal={closeModal} dataInForm={row} />
          )}
        </ButtonWithModal>
      </Space>
    ),
  },
];
