
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import rankingImg from '../../assets/images/home_ranking/ys_ranking.png';

export default class Ranking extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { data } = this.props;
    return (
      <View style={{paddingHorizontal : 5 , paddingVertical : 10}}>
        <Image
          source={rankingImg}
          style={styles.img}
          resizeMode={'contain'}
        />
      </View>
    )
  }
}

let {w,h} = Dimensions.get('window');

let styles = StyleSheet.create({
  img :{
    width : w,
    height : 90
  },
  wrap : {
    marginBottom : 10
  }
})
