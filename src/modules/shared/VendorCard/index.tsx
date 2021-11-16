import styled from '@emotion/styled';
import { Button, Card, Image } from 'antd';
import slide1 from '../../../assets/images/slide1.jpg';
import { defaultImage } from '../../../shared/defaultImage';

const CardContainer = styled.div`
  margin: 10px;
  height: 380px;
  border-radius: 20px;
  box-shadow: 0 3px 5px 0 rgba(81, 45, 168, 0.3),
    0 6px 20px 0 rgba(81, 45, 168, 0.3);
  transition: 0.5s;

  &:hover {
    margin-top: -2px;
    transition: 0.5s;
  }

  .name {
    font-size: 16px;
    margin-bottom: 10px;
    font-family: 'Montserrat';
  }

  .price {
    color: red;
    font-size: 12px;
    margin-bottom: 0px;
    border: 1.5px solid red;
    border-radius: 5px;
    padding: 3px;
    min-width: 90px;
    text-align: center;
  }

  .description {
    color: #777;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .action-button {
    margin-top: 10px;
    align-self: center;
  }

  @media (min-width: 768px) {
    margin: 10px;
  }
`;

export const VendorCard = ({ vendor }: { vendor: any }) => {
  return (
    <CardContainer>
      <Card
        hoverable
        style={{ width: 300, height: '100%', borderRadius: 20 }}
        cover={
          <>
            <Image
              alt='profil_image'
              height={200}
              width='100%'
              style={{
                objectFit: 'cover',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
              }}
              preview={false}
              /* src={vendor.image} */
              src={slide1}
              fallback={defaultImage}
            />
          </>
        }
      >
        <div
          style={{
            overflow: 'hidden',
            marginTop: -10,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ alignSelf: 'center' }}>
            {/* <p className='name'>
              {vendor.name} {vendor.surname}
            </p> */}
            <p className='name'>Césaire Honoré Mounah</p>
          </div>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            soluta consectetur ea odit veritatis illo!
          </p>

          <Button type='primary' className='action-button'>
            Plus d'infos
          </Button>
        </div>
      </Card>
    </CardContainer>
  );
};
