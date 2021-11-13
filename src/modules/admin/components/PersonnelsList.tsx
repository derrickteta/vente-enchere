import { Form, Table } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

export const PersonelsList = () => {
  const dataSource = [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
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
      key: '1',
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
      key: '2',
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
      key: '3',
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
      key: '4',
      nom: 'moussa',
      prenom: 'wadoudou',
      ville: 'Maroua',
      pays: 'Cameroun',
      adresse: '125 Dak',
      telephone: '00246854755',
      pseudo: 'moussa',
      email: 'moussa@email.com',
    },
  ];
  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
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

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};
