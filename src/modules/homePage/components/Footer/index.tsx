import styled from '@emotion/styled';
import React from 'react';
import { PRIMARY } from '../../../../shared/colors';

const FooterContainer = styled.div`
  padding: 20px;
  background-color: ${PRIMARY};
  color: white;

  .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    > div {
      display: flex;
      flex-direction: column;
      margin: 20px;
      h2 {
        color: white;
        font-family: Montserrat;
      }
      p {
        font-size: 16px;
        font-family: Calibri;
        margin: 0;
      }
    }
  }

  .copyright {
    text-align: center;
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <div className='content'>
        <div>
          <h2>Découvrir nos annonces</h2>
          <p>Bananes de l'ouest</p>
          <p>Maïs frais du centre</p>
          <p>Avocats de Mbouda</p>
          <p>Plantains</p>
          <p>Tracteurs</p>
          <p>Machettes</p>
        </div>
        <div>
          <h2>Découvrir nos produits</h2>
          <p>Bananes de l'ouest</p>
          <p>Maïs frais du centre</p>
          <p>Avocats de Mbouda</p>
          <p>Plantains</p>
          <p>Tracteurs</p>
          <p>Machettes</p>
        </div>
        <div>
          <h2>Autres</h2>
          <p>Mention Légale</p>
          <p>Conditions d'utilisation</p>
          <p>Aide & FAQs</p>
          <p>Assurance</p>
        </div>
      </div>
      <div className='copyright'>
        <hr style={{ backgroundColor: 'white' }} />
        <p style={{ textAlign: 'center' }}>Copyright © 2021 - KMT Sarl.</p>
      </div>
    </FooterContainer>
  );
};
