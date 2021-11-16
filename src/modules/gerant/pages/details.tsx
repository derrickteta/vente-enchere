import { Button, Space, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import slide1 from '../../../assets/images/slide1.jpg';
import { GerantContainer } from '../components/GerantContainer';
import { ProductGroup } from '../components/ProductGroup';
import { RatedAvatar } from '../components/RatedAvatar';

const headerChildren = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'left',
          gap: '40px',
        }}
      >
        <h2>Vendor informations</h2>
        <Button type='primary'>Activer</Button>
        <Button type='primary' danger>
          Désactiver
        </Button>
      </div>
    </>
  );
};

export const GerantVendorDetail = () => {
  return (
    <GerantContainer clicked='details' headerChildren={headerChildren()}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          padding: '0 50px',
        }}
      >
        <Space style={{ borderBottom: '1px solid gray' }}>
          <Title level={2}>Césaire Honoré, MOUNAH</Title>
        </Space>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'row',
          }}
        >
          <Typography
            style={{ maxWidth: '500px', flex: '1', paddingLeft: '30px' }}
          >
            <Title level={3} italic>
              Description
            </Title>
            <Paragraph style={{ fontSize: '1.2em' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              ipsa, quaerat temporibus sit quam reprehenderit voluptatibus
              perspiciatis modi expedita molestiae perferendis, corrupti ratione
              nesciunt vel laudantium totam quidem maiores possimus.
            </Paragraph>
            <Title level={3} italic>
              Spécialités
            </Title>
            <Paragraph style={{ fontSize: '1.2em' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              ipsa, quaerat temporibus sit quam reprehenderit voluptatibus
              perspiciatis modi expedita molestiae perferendis, corrupti ratione
              nesciunt vel laudantium totam quidem maiores possimus.
            </Paragraph>
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <RatedAvatar image={slide1} rate={4} />
          </div>
        </div>
        <ProductGroup products={[]} />
      </div>
    </GerantContainer>
  );
};
