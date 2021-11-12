import { AdminContainer } from '../components/AdminContainer';

export const PersonnelPage = () => {
  return (
    <AdminContainer clicked='personnel'>
      <h2>Admin Personnel</h2>
      <p>Formulaire pour créer un gerant et commissaire</p>

      <h3>Champs d'un gerant at commissaire</h3>
      <ul>
        <li>nom</li>
        <li>prenom</li>
        <li>ville</li>
        <li>pays</li>
        <li>adresse</li>
        <li>telephone</li>
        <li>pseudo</li>
        <li>email</li>
      </ul>

      <h3>Procédure</h3>
      <p>
        Aller dans le dossier component du module admin et créer le composant
        'GerantForm' et 'CommissaireForm'. Ces composant contiendra les
        formulaire
      </p>

      <p>
        Ensuite l'importer dans ce composant et c'est okay!!! La logique de
        création sera faite plus tard
      </p>

      <p>
        <b>NB :</b> S'inspirer du composant register et register form.
      </p>
    </AdminContainer>
  );
};
