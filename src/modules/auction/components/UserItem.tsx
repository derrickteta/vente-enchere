import { Avatar, Space } from 'antd';
import { COLORS } from '../../../shared/colors';

export const UserItem = ({ name, index }: { name: string; index: number }) => {
  const splitNames = name.toUpperCase().split(' ');
  return (
    <Space>
      <Avatar
        style={{ margin: 5, backgroundColor: COLORS[index % COLORS.length] }}
      >
        {splitNames.length > 1
          ? `${splitNames[0][0]}${splitNames[1][0]}`
          : splitNames[0][0]}
      </Avatar>
      <p style={{ color: 'black', margin: 0 }}>{name} </p>
    </Space>
  );
};
