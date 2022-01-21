import { useEffect, useState } from 'react';
import { LogEntity } from '../../../entities/GestionLog/log.entity';
import { DataTable } from '../../shared/Table';
import { dateFormatter } from '../../shared/Table/cellFormatter';
import { AdminContainer } from '../components/AdminContainer';
import { fecthLogs } from '../network/admin.network';

export const LogPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [log, setLog] = useState<LogEntity[]>([]);

  useEffect(() => {
    fecthLogs().then((data) => {
      if (data.success) {
        setLog(data.result);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <AdminContainer clicked='log'>
      <div>
        <h2 style={{ marginTop: 50 }}>Logs page</h2>
        <DataTable loading={isLoading} data={log} columns={colms} />
      </div>
    </AdminContainer>
  );
};
/*date_creation, action, createur, table*/
const colms = [
  {
    title: 'Date Creation',
    dataIndex: 'date_creation',
    key: 'date_creation',
    render: dateFormatter,
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
  },
  {
    title: 'Createur',
    key: 'createur',
    dataIndex: 'createur',
  },
  {
    title: 'Table',
    key: 'table',
    dataIndex: 'table',
  },
];
