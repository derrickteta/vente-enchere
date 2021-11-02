import styled from '@emotion/styled';
import { FaRegHandshake } from 'react-icons/fa';
import {
  MdLockOutline,
  MdOutlineAssessment,
  MdOutlineLandscape,
} from 'react-icons/md';
import { PRIMARY } from '../../../../shared/colors';
import { AnimationOnScroll } from '../../../shared/AnimationOnScroll';
import { KPICard } from './KPICard';

const KPIContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

export const KPI = () => {
  return (
    <>
      <h2 style={{ color: PRIMARY, marginBottom: 20 }}>
        Pourquoi Agric Auctions
      </h2>
      <KPIContainer>
        <AnimationOnScroll animation='zoom-in-up'>
          <KPICard
            icon={<MdOutlineAssessment color={PRIMARY} size={50} />}
            text={
              <span>
                Plus de <strong>150 produits</strong> enregistrés sur la
                plateforme
              </span>
            }
          />
        </AnimationOnScroll>
        <AnimationOnScroll animation='zoom-in-up'>
          <KPICard
            icon={<MdOutlineLandscape color={PRIMARY} size={60} />}
            text={
              <span>
                Plus de <strong>50 enchères</strong> réalisés jusqu'a ce jour
              </span>
            }
          />
        </AnimationOnScroll>
        <AnimationOnScroll animation='zoom-in-up'>
          <KPICard
            icon={<FaRegHandshake color={PRIMARY} size={50} />}
            text='Service Client efficace et toujours à votre écout pour un meilleur suivi'
          />
        </AnimationOnScroll>
        <AnimationOnScroll animation='zoom-in-up'>
          <KPICard
            icon={<MdLockOutline color={PRIMARY} size={50} />}
            text='Toutes vos transactions sur la plateforme sont sécurisé et protégés'
          />
        </AnimationOnScroll>
      </KPIContainer>
    </>
  );
};
