import {ImageSlider} from '@pembajak/react-native-image-slider-banner';

import {View, Text} from 'react-native';
import React from 'react';
import {colors} from '../../../constants';
import {useHome} from '../../../zustand/useHome';

const Carousel = () => {
  const {images} = useHome();
  return (
    <ImageSlider
      showHeader={false}
      data={
        images as any
      }
      autoPlay={true}
      closeIconColor="#fff"
      indicatorMainContainerStyle={{
        backgroundColor: '#000',
      }}
      activeIndicatorStyle={{
        backgroundColor: colors.primary,
      }}
      showIndicator={false}
    />
  );
};

export default Carousel;
