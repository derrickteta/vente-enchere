import { VendeurContainer } from '../components/VendeurContainer';

export const VendeurAccountPage = () => {
  return (
    <VendeurContainer clicked='account'>
      <div>
        <h2>Vendeur Account page</h2>
        <p>Formulaire pour mettre a jour les info d'un vendeur</p>

        <h3>Champs d'un vendeur</h3>
        <ul>
          <li>nom</li>
          <li>prenom</li>
          <li>ville</li>
          <li>pays</li>
          <li>adresse</li>
          <li>telephone</li>
          <li>pseudo</li>
          <li>numero momo</li>
          <li>email</li>
          <li>numero cni</li>
          <li>specialite</li>
        </ul>

        <h3>Procédure</h3>
        <p>
          Aller dans le dossier component du module vendeur et créer le
          composant 'AccountForm'. Ce composant contiendra le formulaire de mise
          à jour d'un compte
        </p>

        <p>
          Ensuite l'importer dans ce composant et c'est okay!!! La logique de
          création sera faite plus tard
        </p>

        <p>
          <b>NB :</b> S'inspirer du composant register et register form.
        </p>
      </div>
    </VendeurContainer>
  );
};
