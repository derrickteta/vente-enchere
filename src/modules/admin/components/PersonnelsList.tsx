import { DataTable } from '../../shared/Table';

export const PersonelsList = () => {
  const dataSource = [
    {
      _id: '1',
      nom: 'talom',
      prenom: 'patrick',
      ville: 'Yaounde',
      pays: 'Nigeria',
      adresse: '125 Lagos',
      telephone: '002346854755',
      pseudo: 'talomp',
      email: 'talom@email.com',
    },
    {
      _id: '2',
      nom: 'toto',
      prenom: 'junior',
      ville: 'Douala',
      pays: 'Cameroun',
      adresse: '125 rue Stand alone',
      telephone: '002346854755',
      pseudo: 'toto',
      email: 'toto@email.com',
    },
    {
      _id: '3',
      nom: 'madjio',
      prenom: 'cyrielle',
      ville: 'Mbouda',
      pays: 'Cameroun',
      adresse: '125 dljfd',
      telephone: '63952715',
      pseudo: 'madjio',
      email: 'madjio@email.com',
    },
    {
      _id: '4',
      nom: 'moussa',
      prenom: 'wadoudou',
      ville: 'Maroua',
      pays: 'Cameroun',
      adresse: '125 Dak',
      telephone: '00246854755',
      pseudo: 'moussa',
      email: 'moussa@email.com',
    },
    {
      _id: '5',
      nom: 'talom',
      prenom: 'patrick',
      ville: 'Yaounde',
      pays: 'Nigeria',
      adresse: '125 Lagos',
      telephone: '002346854755',
      pseudo: 'talomp',
      email: 'talom@email.com',
    },
  ];
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      _id: 'nom',
    },
    {
      title: 'Prénom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Ville',
      dataIndex: 'ville',
      key: 'ville',
    },
    {
      title: 'Pays',
      dataIndex: 'pays',
      key: 'pays',
    },
    {
      title: 'Adresse',
      dataIndex: 'adresse',
      key: 'adresse',
    },
    {
      title: 'Téléphone',
      dataIndex: 'telephone',
      key: 'telephone',
    },
    {
      title: 'Pseudo',
      dataIndex: 'pseudo',
      key: 'pseudo',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return <>{<DataTable columns={columns} data={dataSource} />}</>;
};
