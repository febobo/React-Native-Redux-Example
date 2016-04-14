'use strict';

const base = {};
base.color = '#606060';
base.bg = '#eee';
base.ftsize = 14;
base.baseTitleSize = 18;
base.hotGoodsColor = '#ff6634';

const BaseStyles = {
  baseColor : {
    color : base.color
  },
  baseBg : {
    backgroundColor : base.bg
  },
  baseSize : {
    fontSize : base.ftsize
  },
  baseHot : {
    color : base.hotGoodsColor,
    fontSize : 16
  },
  baseTitleSize : {
    fontSize : base.baseTitleSize
  },
  baseOrangeBg : {
    backgroundColor : '#ff9600'
  },
  baseBlodFont : {
    fontSize : 18,
    fontWeight : '700'
  },
  baseServiceTag : {
    borderWidth : 1,
    borderStyle : 'solid',
    borderRadius : 4,
    borderColor : '#00a0e9',
    padding : 2,
  },
  baseServiceTagColor : {
    color : '#00a0e9',
    fontSize : 12
  },
}

export default BaseStyles;
