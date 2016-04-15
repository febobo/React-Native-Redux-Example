'use strict';

const base = {};
base.color = '#606060';
base.bg = '#eee';
base.ftsize = 14;
base.baseTitleSize = 18;
base.priceTextSize = 20;
base.hotGoodsColor = '#ff6634';
base.priceColor = '#f73631';
base.brColor = '#e3e3e3';
base.brownColor = '#6a3906';

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
    fontWeight : '600'
  },
  baseServiceTag : {
    flexDirection : 'row',
    flexWrap : 'wrap'
  },
  baseServiceTagColor : {
    color : '#00a0e9',
    fontSize : 12,
    borderWidth : 1,
    borderStyle : 'solid',
    borderRadius : 4,
    borderColor : '#00a0e9',
    padding : 2,

  },
  brColor : {
    borderColor : base.brColor
  },
  textLine :{
    textDecorationLine : 'line-through'
  },
  priceColor : {
    color : base.priceColor
  },
  priceTextSize : {
    fontSize : base.priceTextSize
  },
  brownColor : {
    color : base.brownColor
  },
}

export default BaseStyles;
