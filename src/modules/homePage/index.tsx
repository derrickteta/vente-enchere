import { Button } from 'antd';
import slide2 from '../../assets/images/slide1.jpg';
import slide3 from '../../assets/images/slide3.jpg';
import slide1 from '../../assets/images/slide4.jpg';
import { Layout } from '../shared/Layout';
import { Announcements } from './components/Announcements';
import { Auction } from './components/Auctions';
import { CustomCarousel } from './components/Carousel';
import { Comments } from './components/Comments';
import { Footer } from './components/Footer';
import { KPI } from './components/KPI';
import { SearchBar } from './components/SearchBar';

export const HomePage = () => {
  return (
    <Layout
      other={
        <CustomCarousel
          duration={10000}
          carouselContent={[
            {
              title: 'AGRIC AUCTIONS',
              subtitle:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur magni id, facilis cupiditate unde nihil sit quidem sequi? Lorem ipsum dolor sit amet, ',
              backgroundImage: slide1,
              other: (
                <Button
                  size='large'
                  style={{
                    width: 250,
                    borderRadius: 5,
                    height: 50,
                    fontSize: 18,
                  }}
                >
                  Connexion
                </Button>
              ),
            },
            {
              title: 'AGRIC AUCTIONS',
              subtitle:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur magni id, facilis cupiditate unde nihil sit quidem sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur magni id, facilis cupiditate unde nihil sit quidem sequi?',
              backgroundImage: slide2,
            },
            {
              title: 'AGRIC AUCTIONS',
              subtitle:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur magni id, facilis cupiditate unde nihil sit quidem sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur magni id, facilis cupiditate unde nihil sit quidem sequi?',
              backgroundImage: slide3,
            },
          ]}
        />
      }
      footer={<Footer />}
    >
      <SearchBar />

      <Auction />

      <KPI />

      <Announcements />

      <Comments />
    </Layout>
  );
};
