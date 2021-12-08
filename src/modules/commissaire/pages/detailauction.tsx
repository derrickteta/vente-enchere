import { Button, Tag, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { EnchereEntity } from '../../../entities/GestionEnchere/enchere.entity';
import { LotEntity } from '../../../entities/Gestionproduit/lot.entity';
import { ROUTES } from '../../../routes';
import { getColor } from '../../../shared/colors';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { fetchLot } from '../../vendeur/network';
import { CommissaireContainer } from '../components/CommissaireContainer';

export const DetailEnchere = () => {
  const router = useHistory();
  const enchere: EnchereEntity = router.location.state as EnchereEntity;
  const [lots, setLots] = useState<LotEntity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLot().then((data) => {
      if (data.success) {
        setLots(data.result);
        setIsLoading(false);
      }
    });
  }, []);

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
      ),
    },
  ];

  return (
    <CommissaireContainer clicked='enchere'>
      <h2 style={{ marginTop: 20, marginBottom: 20 }}>
        Infos enchere {enchere._id}
      </h2>
      <h2 style={{ marginTop: 50 }}>Liste des Lots validés</h2>
      <DataTable loading={isLoading} data={lots} columns={LotColumns} />
    </CommissaireContainer>
  );
};
