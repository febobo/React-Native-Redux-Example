
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
    })()


    return (
      <View style={styles.wrap}>
        {hotTitle}
        <View>
          {
            goods.map( (v, k) =>
              <View style={[styles.goodsRow]} key={'goods-' + k }>
                <View style={[styles.goodsShow]}>
                  <View>
                    <Image
                      source={{uri :v.preview_pic }}
                      style={styles.goodsImg}
                      resizeMode={'contain'}
                    />
                  </View>
                  <View style={[styles.goodsDir]}>
                    <Text style={[BaseStyles.baseBlodFont]}>{v.name}</Text>
                    <View>
                      {
                        v.service && v.service.map( (sv,sk) =>
                          {
                            if( sv.service_type == 2){
                              return (
                                <View key={'service' + sk} style={[BaseStyles.baseServiceTag]}>
                                  <Text style={[BaseStyles.baseServiceTagColor]}>{sv.service_name}</Text>
                                </View>
                              )
                            }
                          }
                        )
                      }
                    </View>
                  </View>
                </View>
                <View style={[styles.goodsActivity]}>
                {
                   v.active.map((a,sk) =>
                    <View style={[styles.goodsActivityItem]} key={'goodsTag-' + sk }>
                      <View style={[styles.tag , BaseStyles.baseOrangeBg]}>
                        <Text style={[styles.tagText]}>积</Text>
                      </View>
                      <Text style={[styles.tagInfo]}>{a.description}</Text>
                    </View>
                  )
                }
                </View>
              </View>
            )
          }
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
  row : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    height : 42,
    paddingHorizontal : 6
  },
  hotTitle : {
    flex : 2,
    marginLeft : 5,
  },
  line : {
    flex : 9,
    height : 1,
    backgroundColor : '#e3e3e3'
  },
  wrap : {
    marginBottom : 10,
  },
  goodsImg : {
    width : 100,
    height : 100
  },
  goodsRow : {
    padding : 10
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

  },
  goodsActivityItem : {
    flex : 1,
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center'
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
  leftWrap : {
    flex : 4
  },
  rightWrap : {
    flex : 6
  }
})
