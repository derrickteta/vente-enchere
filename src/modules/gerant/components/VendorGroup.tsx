import styled from '@emotion/styled';
import { Space } from 'antd';
import { FaAngleRight } from 'react-icons/fa';
import { PRIMARY } from '../../../shared/colors';
import { VendorCard } from '../../shared/VendorCard';

const VendorGroupContainer = styled.div`
  margin-bottom: 60px;
  h2 {
    color: ${PRIMARY};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const VendorGroup = ({
  label,
  vendors,
}: {
  label: string;
  vendors: any[];
}) => {
  return (
    <VendorGroupContainer>
      <Space style={{ justifyContent: 'space-between' }}>
        <h2>{label}</h2>
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
        <VendorCard vendor={{}} />
        <VendorCard vendor={{}} />
        <VendorCard vendor={{}} />
      </div>
    </VendorGroupContainer>
  );
};
