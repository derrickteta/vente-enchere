import { VendeurContainer } from '../components/VendeurContainer';

export const NewProductPage = () => {
  return (
    <VendeurContainer clicked='products'>
      <div>
        <h2>Vendeur new Product page</h2>
        <p>Formulaire de création du produit</p>

        <h3>Champs d'un produit</h3>
        <ul>
          <li>nom</li>
          <li>description (textarea)</li>
          <li>prix min</li>
          <li>category (liste deroulante) </li>
          <li>est bio (checkbox - oui/non)</li>
          <li>Quantité (se renseigner d'abord) </li>
          <li>images</li>
        </ul>

        <h3>Procédure</h3>
        <p>
          Aller dans le dossier component du module vendeur et créer le
          composant 'ProductForm'. Ce composant contiendra le formulaire de
          création du produit
        </p>

        <p>
          Ensuite l'importer dans ce composant et c'est okay!!! La logique de
          création sera faite plus tard
        </p>
      </div>
    </VendeurContainer>
  );
};
