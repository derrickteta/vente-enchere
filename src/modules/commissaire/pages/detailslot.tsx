import { useHistory } from 'react-router-dom';
import { DataTable } from '../../shared/Table';
import { CommissaireContainer } from '../components/CommissaireContainer';

export const DetailLot = () => {
  const router = useHistory();
  console.log(router.location.state);
  const lot: any = router.location.state;

  const ProductColumns = [
    {
      title: 'Image',
      key: 'images',
      render: (cell: any, row: any) => <span>{cell.images}</span>,
    },
    {
      title: 'Nom produit',
      key: 'nom',
      render: (cell: any, row: any) => <span>{cell.nom}</span>,
    },
    {
      title: 'Description',
      key: 'description',
      render: (cell: any, row: any) => <span>{cell.description}</span>,
    },
    {
      title: 'Prix Minimale',
      key: 'prixMin',
      render: (cell: any, row: any) => <span>{cell.prixMin}</span>,
    },
  ];

  return (
    <CommissaireContainer clicked='dashboard'>
      <h2 style={{ marginTop: 50 }}>Detail Lot N° {lot.numeroLot} </h2>
      <DataTable loading={false} data={lot.produits} columns={ProductColumns} />
    </CommissaireContainer>
  );
};
