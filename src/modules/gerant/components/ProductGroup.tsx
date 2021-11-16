import styled from '@emotion/styled';
import { Space } from 'antd';
import { FaAngleRight } from 'react-icons/fa';
import { PRIMARY } from '../../../shared/colors';
import { ProductCard } from '../../shared/ProductCard';

const ProductGroupContainer = styled.div`
  margin-bottom: 60px;
  h2 {
    color: ${PRIMARY};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const ProductGroup = ({ products }: { products: any[] }) => {
  return (
    <ProductGroupContainer>
      <Space style={{ justifyContent: 'space-between' }}>
        <h2>Produits du vendeur</h2>
        <h3
          style={{
            margin: 0,
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Voir plus{' '}
          <FaAngleRight color='red' size={20} style={{ marginBottom: -6 }} />
        </h3>
      </Space>
      <div>
        <ProductCard product={{}} />
        <ProductCard product={{}} />
        <ProductCard product={{}} />
        <ProductCard product={{}} />
      </div>
    </ProductGroupContainer>
  );
};
