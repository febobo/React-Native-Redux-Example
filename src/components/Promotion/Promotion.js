
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

// 所需图片引入
import jyh_bg from '../../assets/images/promotion/jyh_bg.png';
import jyh_btn from '../../assets/images/promotion/jyh_btn.png';
import jyh_logo from '../../assets/images/promotion/jyh_logo.png';

import CountDown from '../CountDown/CountDown'




export default class Promotion extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { data } = this.props;
    return (
      <View style={{height : 142}}>
        { data && data.active ? data.active.map( (v,k) =>
          <View key={k}>
            <View style={styles.wrap}>
              <Image
                source={{uri : v.image}}
                style={styles.img}
              >
              </Image>

            </View>
            <Image
              source={jyh_bg}
              style={styles.jyhBg}
              resizeMode={'contain'}
            >
            </Image>
            <View style={[styles.entry]}>
              <Image
                source={jyh_logo}
                style={styles.jyhLogo}
              >
              </Image>
              <CountDown
                style={styles.countDownStyle}
                time={data.active && data.active.length && new Date(data.active[0].end_time).getTime()}
                day={true}
                hours={true}
                minute={true}
              />
              <TouchableOpacity>
                <Image
                  source={jyh_btn}
                  style={styles.jyhBtn}
                  resizeMode={'contain'}
                >
                </Image>
              </TouchableOpacity>
            </View>
          </View>
        ) : null }
      </View>
    )
  }
}

let {w,h} = Dimensions.get('window');

let styles = StyleSheet.create({
  wrapper: {
    height : 132,
    flexDirection : 'row',
  },
  slide: {
    flex: 1,
  },
  img :{
    width : w,
    height : 142,
  },
  wrap : {
    marginBottom : 10
  },
  jyhBg : {
    position : 'absolute',
    top : 0,
    left : -42,
    height : 142,
    // width : 3
  },
  entry : {
    position : 'absolute',
    top : 0,
    left : 0,
    height : 142,
    paddingHorizontal : 10,
    paddingVertical : 19,
    backgroundColor : 'transparent',
    flexDirection : 'column',
    justifyContent : 'space-between'
  },
  jyhBtn : {
    width : 77
  },
  jyhLogo : {
    width : 75,
    height : 25
  },
  countDownStyle : {
    color : '#fff',
    fontSize : 16,
    fontWeight : '400'
  }
})
