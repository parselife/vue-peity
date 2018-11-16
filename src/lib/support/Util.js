/**
 * chart util
 * Created by Alex on 2018/11/16, v1.0
 **/
const SizeMap = {
  sm: [16, 32],
  md: [24, 48],
  lg: [32, 64],
  xl: [64, 128]
};

/**
 * 获取图表的高度
 * @param size
 * @returns {*}
 */
let getHeight = (size) => {
  if (typeof size === 'string') {
    return Object.keys(SizeMap).indexOf(size) > -1 ? SizeMap[size][0] : SizeMap.sm[0];
  } else {
    return size[0];
  }
};

/**
 * 获取图表的宽度
 * @param size
 * @returns {*}
 */
let getWidth = (size) => {
  if (typeof size === 'string') {
    return Object.keys(SizeMap).indexOf(size) > -1 ? SizeMap[size][1] : SizeMap.sm[1];
  } else {
    return size[1];
  }
};


export {
  getHeight, getWidth
}

