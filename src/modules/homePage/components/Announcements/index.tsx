import styled from '@emotion/styled';
import { Space } from 'antd';
import { FaAngleRight } from 'react-icons/fa';
import { AnnouncementCard } from './AnnouncementCard';

const AnnonceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Announcements = () => {
  return (
    <>
      <Space style={{ justifyContent: 'space-between', width: '100%' }}>
        <h2>Annonces</h2>
        <h3
          style={{ margin: 0, textDecoration: 'underline', cursor: 'pointer' }}
        >
          Voir plus{' '}
          <FaAngleRight color='red' size={20} style={{ marginBottom: -6 }} />
        </h3>
      </Space>
      <AnnonceContainer>
        <AnnouncementCard announcement={{}} />
        <AnnouncementCard announcement={{}} />
        <AnnouncementCard announcement={{}} />
      </AnnonceContainer>
    </>
  );
};
