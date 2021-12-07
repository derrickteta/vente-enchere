import { Button, Tag, Tooltip } from 'antd';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { ROUTES } from '../../../routes';
import { getColor } from '../../../shared/colors';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { CommissaireContainer } from '../components/CommissaireContainer';

export const CommissaireAuction = () => {
  const router = useHistory();
  const [sallesEnchere, setSallesEnchere] = useState<EnchereEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
        <Tooltip title='Détails salle enchère'>
          <Button
            type='primary'
            onClick={() =>
              router.push(ROUTES.COMMISSAIRE_PAGE.LOT_DETAIL(row._id), row)
            }
          >
            <FaExternalLinkAlt />
          </Button>
        </Tooltip>
      ),
    },
  ];

  return (
    <CommissaireContainer clicked='enchere'>
      <h2 style={{ marginTop: 20, marginBottom: 20 }}>
        Liste des Salles d'enchère
      </h2>
      <DataTable
        loading={isLoading}
        data={sallesEnchere}
        columns={SalleEnchereColumns}
      />
    </CommissaireContainer>
  );
};
