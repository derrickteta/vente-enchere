import { Button } from 'antd';
import { FaProductHunt, FaShopify, FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { StatsCard } from '../../shared/StatsCard';
import { DataTable } from '../../shared/Table';
import { CommissaireContainer } from '../components/CommissaireContainer';

export const CommissaireDashboard = () => {
  const router = useHistory();

  const LotColumns = [
    {
      title: 'Lots',
      key: 'numeroLot',
      render: (cell: any, row: any) => <span>{row.numeroLot}</span>,
    },
    {
      title: 'Etat',
      key: '',
      render: (cell: any, row: any) => <span>{cell.statut}</span>,
    },
    {
      title: 'Prix Min',
      key: 'prixMin',
      render: (cell: any, row: any) => (
        <span>
          {cell.prixMin} {'XAF'}{' '}
        </span>
      ),
    },
    {
      title: 'Date Reception',
      key: 'dateReception',
      render: (cell: any, row: any) => <span>{cell.dateReception}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (cell: any, row: any) => (
        <Button
          onClick={() =>
            router.push(ROUTES.COMMISSAIRE_PAGE.LOT_DETAIL(row._id), row)
          }
        >
          Details
        </Button>
      ),
    },
  ];

  return (
    <CommissaireContainer clicked='dashboard'>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Stats.map((item) => (
          <StatsCard
            key={item.text}
            icon={item.icon}
            text={item.text}
            stat={item.stat}
            gradientColors={item.gradientColors}
          />
        ))}
      </div>

      <h2 style={{ marginTop: 50 }}>Liste Lots</h2>
      <DataTable
        loading={false}
        data={[
          {
            _id: '618cd0fbd518846e591746c7',
            numeroLot: 1,
            statut: 'en_attente_vente',
            prixMin: '8000',
            nonVendu: false,
            produits: [
              {
                _id: '8cd0fbd518846e5917dfc7',
                nom: 'TOMATE',
                description: 'Tomates fraiches de l Est',
                prixMin: '3000',
                category: 'Fruits',
                images: 'Hello word!!!!',
                estBio: true,
                statut: 'Actif',
                dateCreation: '15/11/2021',
              },
              {
                _id: '8cd0fbd518846e5917dfc7',
                nom: 'Banane',
                description: 'Banane fraiches de l Est',
                prixMin: '1000',
                category: 'Fruits',
                images: 'Hello BABABABA!!!!',
                estBio: true,
                statut: 'Actif',
                dateCreation: '15/11/2021',
              },
            ],
            commentaireRefus: '',
            dateReception: '15/11/2021',
          },
          {
            _id: '618cd0fbd518846e5917dfc7',
            numeroLot: 5,
            statut: 'refuse',
            prixMin: '80000',
            nonVendu: false,
            produits: [
              {
                _id: '8cd0fbd518846e5917dfc7',
                nom: 'TOMATE',
                description: 'Tomates fraiches de l Est',
                prixMin: '3000',
                category: 'Fruits',
                images: 'Hello word!!!!',
                estBio: true,
                statut: 'Actif',
                dateCreation: '15/11/2021',
              },
              {
                _id: '8cd0fbd518846e5917dfc7',
                nom: 'Banane',
                description: 'Banane fraiches de l Est',
                prixMin: '1000',
                category: 'Fruits',
                images: 'Hello BABABABA!!!!',
                estBio: true,
                statut: 'Actif',
                dateCreation: '15/11/2021',
              },
            ],
            commentaireRefus: '',
            dateReception: '19/11/2021',
          },
        ]}
        columns={LotColumns}
      />
    </CommissaireContainer>
  );
};

const Stats = [
  {
    icon: <FaShopify size={30} color='white' />,
    text: 'Enchères',
    stat: 23,
    gradientColors: ['#2c3e50', '#bdc3c7'],
  },
  {
    icon: <FaShoppingCart size={30} color='white' />,
    text: 'Lots',
    stat: 28,
    gradientColors: ['#E83E8C', '#FF7588'],
  },
  {
    icon: <FaProductHunt size={30} color='white' />,
    text: 'Produits',
    stat: 156,
    gradientColors: ['#FF425C', '#FFA8B4'],
  },
];
