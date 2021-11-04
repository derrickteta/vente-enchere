import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { PRIMARY } from '../../../../shared/colors';

const SearchContainer = styled.div`
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 50px;

  > div {
    display: flex;
    flex: 1;
  }
`;

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  console.log(search);

  return (
    <SearchContainer>
      <div>
        <div style={{ width: '100%', marginRight: 20 }}>
          <Input
            placeholder='Rechercher un produit, un outil agricol, une catégorie ect...'
            size='large'
            bordered={false}
            style={{ paddingLeft: 20, fontFamily: 'Tauri' }}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <Button
          type='primary'
          style={{
            backgroundColor: PRIMARY,
            borderColor: PRIMARY,
            borderRadius: 50,
            width: 160,
            display: 'flex',
            alignItems: 'center',
          }}
          size='large'
        >
          <FaSearch style={{ marginRight: 10 }} />
          Rechercher
        </Button>
      </div>
    </SearchContainer>
  );
};
