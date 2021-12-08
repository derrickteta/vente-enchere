import styled from '@emotion/styled';
import { Input, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Key } from 'antd/lib/table/interface';
import { ReactNode, useState } from 'react';
import { SEMIDARK } from '../../../shared/colors';

const DataTableContainer = styled.div`
  th {
    background-color: ${SEMIDARK} !important;
    color: white !important;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    zoom: 1;
  }
`;

export const DataTable = <T extends { _id: string }>({
  data,
  columns,
  loading,
  selectedRowKeys,
  onSelectedRowKeysChange,
  filterFunction,
  buttons,
  expandable,
  expandField,
}: {
  columns: ColumnsType<T>;
  data: T[];
  loading?: boolean;
  selectedRowKeys?: Key[];
  onSelectedRowKeysChange?: (newSelectedRowKeys: Key[]) => any;
  filterFunction?: (dataItem: T, filterValue: string) => boolean;
  buttons?: ReactNode;
  expandable?: boolean;
  expandField?: string;
}) => {
  const [filterValue, setFilterValue] = useState('');
  const [rowId, setRowId] = useState('');

  const dataToShow = data?.filter((dataItem) =>
    filterFunction ? filterFunction(dataItem, filterValue) : true,
  );

  const selectRow = (rowId: string | number) => {
    if (
      selectedRowKeys !== undefined &&
      onSelectedRowKeysChange !== undefined
    ) {
      let newSelectedRowKeys: Key[] = [];
      if (selectedRowKeys.length === 0) {
        newSelectedRowKeys = [rowId];
      } else if (selectedRowKeys.indexOf(rowId) < 0) {
        newSelectedRowKeys = [...selectedRowKeys, rowId];
      }
      onSelectedRowKeysChange(newSelectedRowKeys);
    }
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectedRowKeysChange,
  };

  return (
    <DataTableContainer>
      <Space style={{ marginBottom: 10 }}>
        <Input
          placeholder='Filtrer'
          style={{ width: 300 }}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        {buttons}
      </Space>
      {selectedRowKeys !== undefined ? (
        <Table
          rowSelection={rowSelection}
          dataSource={dataToShow}
          columns={columns}
          loading={loading}
          expandable={
            expandable && expandField
              ? {
                  expandedRowRender: (row: any) => (
                    <span>{row[expandField]}</span>
                  ),
                }
              : {}
          }
          size='middle'
          rowKey='_id'
          rowClassName={(row, index) =>
            rowId === row._id
              ? 'is-bold'
              : index % 2 === 0
              ? 'even-row'
              : 'odd-row'
          }
          onRow={(row) => ({
            onClick: () => {
              setRowId(row._id);
              selectRow(row._id);
            },
          })}
        />
      ) : (
        <Table
          dataSource={dataToShow}
          columns={columns}
          loading={loading}
          expandable={
            expandable && expandField
              ? {
                  expandedRowRender: (row: any) => (
                    <span>{row[expandField]}</span>
                  ),
                }
              : {}
          }
          size='middle'
          rowKey='_id'
          rowClassName={(row, index) =>
            rowId === row._id
              ? 'is-bold'
              : index % 2 === 0
              ? 'even-row'
              : 'odd-row'
          }
          onRow={(row) => ({
            onClick: () => {
              setRowId(row._id);
              selectRow(row._id);
            },
          })}
        />
      )}
    </DataTableContainer>
  );
};
