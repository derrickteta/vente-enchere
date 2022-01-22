import { useEffect, useState } from 'react';
import { FeedbackEntity } from '../../../entities/GestionEnchere/feedback.entity';
import { DataTable } from '../../shared/Table';
import { VendeurContainer } from '../components/VendeurContainer';
import { fetchVendeurFeedback } from '../network';

export const VendeurFeedback = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedback] = useState<FeedbackEntity[]>([]);

  useEffect(() => {
    fetchVendeurFeedback().then((data) => {
      if (data.success) {
        setFeedback(data.result);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <VendeurContainer clicked='feedback'>
      <h2>Feedback</h2>
      <DataTable loading={isLoading} data={feedbacks} columns={feedColumns} />
    </VendeurContainer>
  );
};

const feedColumns = [
  {
    title: 'Lot',
    key: 'lot',
    dataIndex: 'lot',
  },
  {
    title: 'Note',
    key: 'note',
    dataIndex: 'note',
  },
  {
    title: 'Commentaire',
    key: 'commentaire',
    dataIndex: 'commentaire',
  },
  {
    title: 'Client',
    key: 'client',
    dataIndex: 'client',
  },
];
