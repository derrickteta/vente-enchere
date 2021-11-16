import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import { GerantContainer } from '../components/GerantContainer';

const headerChildren: JSX.Element = (
  <>
    <h2>Text</h2>
    <ButtonGroup>
      <Button>Ajouter</Button>
      <Button>Supprimer</Button>
    </ButtonGroup>
  </>
);

export const GerantAccount = () => {
  return (
    <GerantContainer clicked='account' headerChildren={headerChildren}>
      <div>
        <h2>Gerant compte</h2>
      </div>
    </GerantContainer>
  );
};
