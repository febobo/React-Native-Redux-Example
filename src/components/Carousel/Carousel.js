
import Swiper from 'react-native-swiper';
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

export default class Carousel extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { data } = this.props;
    return (
      <View style={{height : 132 , marginBottom : 4}}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          height={132}
          paginationStyle={{right : 10 , bottom : 5 , justifyContent : 'flex-end'}}
        >
          <View style={styles.slide}>
            { data ? data.focus.map( (v,k) =>
              <View key={k}>
                <TouchableOpacity activeOpacity={1} >
                  <Image
                    style={[styles.img]}
                    source={{uri: v.image}}
                  />
                </TouchableOpacity>
              </View>
            ) : null }

          </View>
        </Swiper>
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
    height : 132,
    backgroundColor : 'red'
  }
})
