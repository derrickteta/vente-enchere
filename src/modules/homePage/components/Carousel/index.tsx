/* eslint-disable @typescript-eslint/no-unused-vars */

import styled from '@emotion/styled';
import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import { createRef, ReactNode } from 'react';
import { AnimationOnScroll } from '../../../../modules/shared/AnimationOnScroll';

const Slide = styled.div<{ backgroundImage: string }>`
  height: 600px;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  > div {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 50px;
      padding-top: 0;
      // background-image: linear-gradient(
      //   rgb(0, 0, 255, 0.8),
      //   transparent,
      //   transparent
      // );
      > h1 {
        color: white;
        font-size: 45px;
        text-align: center;
      }

      > h3 {
        color: white;
        font-size: 20px;
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
      }

      @media (min-width: 768px) {
        > h1 {
          color: white;
          font-size: 40px;
        }

        > h3 {
          color: white;
          font-size: 25px;
          width: 90%;
        }
      }

      @media (min-width: 1200px) {
        padding-left: 70px;
        > h1 {
          color: white;
          font-size: 60px;
        }

        > h3 {
          color: white;
          font-size: 30px;
          width: 80%;
        }
      }
    }
  }
`;

type CarouselContentType = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  other?: ReactNode;
};

export const CustomCarousel = ({
  header,
  duration = 5000,
  carouselContent,
}: {
  header?: ReactNode;
  duration?: number;
  carouselContent: CarouselContentType[];
}) => {
  const carouselRef = createRef<CarouselRef>();

  const next = () => carouselRef.current?.next();
  const prev = () => carouselRef.current?.prev();

  setInterval(next, duration);

  return (
    <Carousel ref={carouselRef} effect='fade'>
      {carouselContent.map((item, index) => (
        <Slide backgroundImage={item.backgroundImage} key={index}>
          <div>
            <span>{header}</span>
            <AnimationOnScroll key={index} animation='fade-up-right'>
              <h1>{item.title}</h1>
              <h3>{item.subtitle}</h3>
              {item.other}
            </AnimationOnScroll>
          </div>
        </Slide>
      ))}
    </Carousel>
  );
};
