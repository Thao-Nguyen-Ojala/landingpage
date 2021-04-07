import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { mainData } from '../../interfaces';
import './HeroCarousel.scss';

type HeroCarouselType = {
  projects: mainData[];
};

const useStyle = makeStyles((theme) => ({
  root: {},
  btn: {
    fontSize: '16px',
  },
}));

export default function HeroCarousel({ projects }: HeroCarouselType) {
  const classes = useStyle();
  return (
    <Slider
      dots={true}
      infinite={true}
      slidesToScroll={1}
      slidesToShow={1}
      speed={2000}
      autoplay={true}
      pauseOnFocus={true}
      autoplaySpeed={5000}
    >
      {projects.map((project, i) => {
        return (
          <div className='carousel' key={i}>
            <div className='carousel__pic'>
              <img src={project.img} alt={project.alt} />
            </div>

            <div className='carousel__text'>
              <div className='carousel__topline'>{project.topLine}</div>
              <div className='carousel__name'>{project.name}</div>

              <Button
                className={classes.btn}
                size='small'
                variant='outlined'
                color='secondary'
                endIcon={<DoubleArrowIcon />}
                value={project.webpage}
                onClick={() => {
                  window.open(`${project.webpage}`, '_blank');
                }}
              >
                Visit Page
              </Button>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
