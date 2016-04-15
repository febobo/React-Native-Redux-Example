
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import hotImg from '../../assets/images/hot_goods/hot.png';

export default class HotGoods extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { goods , BaseStyles} = this.props;

    // 热销标题 ， 会通过state 来控制是否隐藏
    const hotTitle = (() => {
      return (
        <View style={[styles.row]}>
          <Image
            source={hotImg}
            style={styles.img}
            resizeMode={'contain'}
          />
          <Text style={[styles.hotTitle , BaseStyles.baseHot]}>热销商品</Text>
          <View style={styles.line}></View>
        </View>
      )
    })();

    // 商品列表
    const viewList = (() => {
      return (
        <View style={[styles.goodsWrap]}>
          {
            goods.map( (v, k) =>
              <View style={[styles.goodsRow , BaseStyles.brColor]} key={'goods-' + k }>
                <View style={[styles.goodsShow]}>
                  <View>
                    <Image
                      source={{uri :v.preview_pic }}
                      style={styles.goodsImg}
                      resizeMode={'contain'}
                    />
                    {
                       v.status !== 1 && v.stock_num <= 0 ?
                       <View style={[styles.goodsStatus]}>
                         <Text style={[styles.statusInfo]}>售完</Text>
                       </View>
                       : null
                    }
                    {
                       v.status == 1 ?
                       <View style={[styles.goodsStatus]}>
                         <View style={[styles.noticeWrap]}>
                            <Text style={[styles.notice]}>即将上架</Text>
                         </View>
                       </View>
                       : null
                    }

                  </View>
                  <View style={[styles.goodsDir]}>
                    <Text numberOfLines={1} style={[BaseStyles.baseBlodFont]}>{v.name}</Text>
                    <View style={[BaseStyles.baseServiceTag]}>
                      {
                        v.service && v.service.map( (sv,sk) =>
                          { // 只显示在线支付
                            if( sv.service_type == 2){
                              return (
                                  <Text
                                   key={'service' + sk}
                                   style={[BaseStyles.baseServiceTagColor]}
                                  >
                                    {sv.service_name}
                                  </Text>
                              )
                            }
                          }
                        )
                      }
                    </View>
                    <View style={[styles.dirRow]}>
                      <Text style={[BaseStyles.baseColor]}>{v.sku_value}</Text>
                      <Text style={[BaseStyles.baseColor]}>  已售{v.sold_num}{v.unit}</Text>
                    </View>
                    <View>
                      <Text numberOfLines={1}
                        style={[BaseStyles.baseColor]}
                      >{ v.description && v.description.replace(/<[^>]+>/g, '').replace(/&[^]+;/g, '').replace(/\s+/g , '') || "  "}</Text>
                    </View>
                    {/* 价格 */}
                    <View style={[styles.dirRow , styles.price , styles.baseline]}>
                      <View style={[styles.dirRow , styles.baseline]}>
                        <Text
                          style={[styles.salePrice,BaseStyles.baseColor]}
                        >
                          <Text style={[BaseStyles.priceTextSize , BaseStyles.priceColor ]}>￥{v.price}</Text>/{v.sale_unit}
                        </Text>
                        <Text style={[BaseStyles.textLine , BaseStyles.baseColor]}>  ￥{v.original_price}</Text>
                      </View>
                      <View>
                        <Text style={[BaseStyles.brownColor]}>{v.update_time}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                {/* 活动 */}
                <View style={[styles.goodsActivity]}>
                {
                   v.active.map((a,sk) =>
                    <View style={[styles.goodsActivityItem]} key={'goodsTag-' + sk }>
                      <View
                        style={[styles.tag ,
                          a.type == 'sku_back_points' && styles.activityIntegral,
                          a.type == 'sku_back_subsidy' && styles.activityRuturn,
                          a.type == 'sku_consume_points' && styles.activityQuota,
                          a.type == 'sku_buy_number' && styles.activityBuckle
                        ]}
                      >
                        {
                          a.type == 'sku_back_subsidy' ?
                          <Text style={[styles.tagText]}>返</Text>
                          : null
                        }
                        {
                          a.type == 'sku_back_points' ?
          								<Text style={[styles.tagText]}>积</Text>
                          : null
                        }
                        {
                          a.type == 'sku_consume_points' ?
          								<Text style={[styles.tagText]}>扣</Text>
                          : null
                        }
                        {
                          a.type == 'sku_buy_number' ?
          								<Text style={[styles.tagText]}>限</Text>
                          : null
                        }
                      </View>
                      <Text style={[styles.tagInfo , BaseStyles.baseColor]}>{a.description}</Text>
                    </View>
                  )
                }
                </View>
              </View>
            )
          }
        </View>
      )
    })();

    return (
      <View style={styles.wrap}>
        {hotTitle}
        {viewList}
        <View style={[styles.dirRow , styles.moreBtnWrap]}>
          <TouchableOpacity>
            <Text style={[styles.moreBtn]}>点击查看全部商品</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let {w,h} = Dimensions.get('window');

let styles = StyleSheet.create({
  img :{
    width : 14,
    height : 14,

  },
  dirRow : {
    flexDirection : 'row',
  },
  goodsWrap : {
    backgroundColor : '#fff',
  },
  goodsStatus : {
    width : 100,
    height : 100,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'center',
    position : 'absolute',
    left : 0,
    top : 0,
    opacity : .6,
    backgroundColor : '#fff'
  },
  noticeWrap : {
    borderWidth : 2,
    borderColor : 'red',
    padding : 4,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection : 'row',
  },
  notice : {
    color : 'red',
    fontSize : 20,
    fontWeight : '400',
    flexDirection : 'row',
  },
  statusInfo : {
    width : 65,
    height : 65,
    fontSize : 20,
    fontWeight : '400',
    borderRadius : 32.5,
    borderWidth : 2,
    borderColor : '#000',
    textAlign : 'center',
    paddingTop : 22.5
  },
  row : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    height : 42,
    paddingHorizontal : 6
  },
  hotTitle : {
    marginLeft : 5,
  },
  line : {
    flex : 1,
    height : 1,
    backgroundColor : '#e3e3e3',
    marginLeft : 5,
  },
  wrap : {
    // marginBottom : 10,
  },
  goodsImg : {
    width : 100,
    height : 100
  },
  goodsRow : {
    padding : 10,
    borderBottomWidth : 1,
  },
  goodsShow : {
    marginBottom : 10,
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  goodsDir : {
    flex : 1,
    marginLeft : 10
  },
  goodsActivity : {
    borderTopWidth : 1,
    borderColor : '#f9f9f9',
    paddingTop : 10
  },
  goodsActivityItem : {
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center'
  },
  baseline : {
    alignItems : 'center'
  },
  tag : {
    width : 22,
    height : 22,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 12,
    flex : 0
  },
  tagText : {
    color : '#fff'
  },
  tagInfo : {
    flex : 1,
    marginLeft : 5

  },
  price : {
    justifyContent : 'space-between',
    alignItems : 'flex-end'
  },
  salePrice : {

  },
  moreBtnWrap : {
    padding : 10,
    justifyContent : 'center'
  },
  moreBtn : {
    padding : 10,
    borderWidth : 1,
    borderRadius : 5,
    borderColor : '#ccc'
  },
  rightWrap : {
    flex : 6
  },
  activityRuturn : {
  	backgroundColor:'#f26666',
  },
  activityIntegral : {
  	backgroundColor:'#ff9600',
  },
  activityQuota : {
  	backgroundColor:'#1bce8d',
  },
  activityBuckle :{
  	backgroundColor: '#4692f9',
  }
})
