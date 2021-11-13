import {
  FaChartLine,
  FaDollarSign,
  FaProductHunt,
  FaRegCommentAlt,
  FaShopify,
  FaShoppingCart,
  FaUserAlt,
  FaUsersCog,
} from 'react-icons/fa';
import { StatsCard } from '../../shared/StatsCard';
import { AdminContainer } from '../components/AdminContainer';

export const AdminDashBoard = () => {
  return (
    <AdminContainer clicked='dashboard'>
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
    </AdminContainer>
  );
};

const Stats = [
  {
    icon: <FaUserAlt size={30} color='white' />,
    text: 'Utilisateurs',
    stat: 50,
    gradientColors: ['#00b5b8', '#16d39a'],
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
  {
    icon: <FaRegCommentAlt size={30} color='white' />,
    text: 'Commentaires',
    stat: 267,
    gradientColors: ['#2193b0', '#6dd5ed'],
  },
  {
    icon: <FaShopify size={30} color='white' />,
    text: 'Enchères',
    stat: 23,
    gradientColors: ['#2c3e50', '#bdc3c7'],
  },
  {
    icon: <FaChartLine size={30} color='white' />,
    text: 'N° de visites',
    stat: 462,
    gradientColors: ['#de6262', '#ffb88c'],
  },
  {
    icon: <FaUsersCog size={30} color='white' />,
    text: 'N° de personnels',
    stat: 9,
    gradientColors: ['#ef629f', '#eecda3'],
  },
  {
    icon: <FaDollarSign size={30} color='white' />,
    text: 'Compte bancaire',
    stat: 111850,
    gradientColors: ['#ff7e5f', '#feb47b'],
  },
];
