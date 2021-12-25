import styled from '@emotion/styled';
import { AnimationOnScroll } from '../../shared/AnimationOnScroll';
import { EnchereCard } from '../components/enchere';

const EncherContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const ListeEnchere = () => {
  return (
    <EncherContainer>
      <h2>Liste des encheres </h2>
      <AnimationOnScroll animation='zoom-in-up'>
        <EnchereCard date={2} lot={1} produit={5} />
      </AnimationOnScroll>
    </EncherContainer>
  );
};
