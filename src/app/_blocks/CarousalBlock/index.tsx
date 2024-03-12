import React from 'react';
import { Gutter } from '../../_components/Gutter';
import { VerticalPadding } from '../../_components/VerticalPadding';
import classes from './index.module.scss';

type CarousalSlide = {
  title: string;
  image: { url: string };
  caption?: string;
};

type CarousalData = {
  slider: CarousalSlide[];
};

type CarousalProps = {
  id?: string;
  data: CarousalData;
  invertBackground: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

// Adjust the type according to your actual Page type
type PageLayout = {
  layout: Array<{ blockType: 'carousalBlock'; data: CarousalData; invertBackground: boolean /* other properties */ }>;
};

// Extract Props type using Extract
type Props = Extract<PageLayout['layout'][0], { blockType: 'carousalBlock' }>;

const CarousalBlock: React.FC<Props & CarousalProps> = ({ blockType, data, invertBackground, ...rest }) => {
  const { slider } = data;

  return (
    <Gutter>
      <VerticalPadding
        className={[classes.carousal, invertBackground && classes.invert]
          .filter(Boolean)
          .join(' ')}
      >
        <div {...rest} className={classes.wrap}>
          {slider.map((slide, i) => (
            <div className={classes.slide} key={i}>
              <div className={classes.image}>
                <img src={slide.image.url} alt={slide.title} />
              </div>
              <div className={classes.title}>{slide.title}</div>
              {slide.caption && <div className={classes.caption}>{slide.caption}</div>}
            </div>
          ))}
        </div>
      </VerticalPadding>
    </Gutter>
  );
};

export default CarousalBlock;
