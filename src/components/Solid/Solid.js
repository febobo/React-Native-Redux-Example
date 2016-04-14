
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

export default class Solid extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { data } = this.props;
    return (
      <View>
        <View class={[styles.leftWrap]}>
        </View>
        <View class={[styles.rightWrap]}>
        </View>
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
  },
  leftWrap : {
    flex : 4
  },
  rightWrap : {
    flex : 6
  }
})
