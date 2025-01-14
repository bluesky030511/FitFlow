import { useEffect, useState } from 'react';
import { Dimensions, PixelRatio, Platform } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

//FONT SCALING - provide the pixel as:
//Usage: nf(16)
const scale = SCREEN_HEIGHT / 667;
const normalizeFont = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale))


//DYNAMIC DIMENSION AS PER PERCENTAGE:   
//Usage: wp(5), hp(20)
const widthPercentageToDP = widthPercent => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_WIDTH * elemWidth / 100);
};

const heightPercentageToDP = heightPercent => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel(SCREEN_HEIGHT * elemHeight / 100);
};

//DYNAMIC DIMENSION AS PER PIXELS:   
//Usage: wpx(141), hpx(220)
const widthFromPixel = (widthPx, w = 375) => {
    const scale = SCREEN_WIDTH / w;
    const newSize = widthPx * scale
    return newSize
};

const heightFromPixel = (heightPx, h = 667) => {
    const scale = SCREEN_HEIGHT / h;
    const newSize = heightPx * scale
    return newSize
};


export {
    normalizeFont as nf,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    widthFromPixel as wpx,
    heightFromPixel as hpx,
    SCREEN_WIDTH,
    SCREEN_HEIGHT
};