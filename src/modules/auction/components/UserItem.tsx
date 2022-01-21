import { Avatar, Badge, Space } from 'antd';
import { Socket } from 'socket.io-client';
import { COLORS } from '../../../shared/colors';

export const UserItem = ({
  name,
  index,
  socket,
}: {
  name: string;
  index: number;
  socket: Socket;
}) => {
  const splitNames = name.toUpperCase().split(' ');
  return (
    <Space>
      <Badge dot={socket.id === name}>
        <Avatar
          style={{ margin: 5, backgroundColor: COLORS[index % COLORS.length] }}
        >
          {splitNames.length > 1
            ? `${splitNames[0][0]}${splitNames[1][0]}`
            : splitNames[0][0]}
        </Avatar>
      </Badge>
      <p style={{ color: 'black', margin: 0 }}>{name} </p>
    </Space>
  );
};
