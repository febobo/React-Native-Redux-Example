
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

// const allclassify = require('../../assets/images/category/allclassify.png');

import allclassify from '../../assets/images/category/allclassify.png';

export default class Category extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { classify , BaseStyles} = this.props;
    const classifyList =  classify.map( (v,k) => {
        return (
          <TouchableOpacity key={k} style={[styles.item]}>
            <View style={styles.wrap}>
              <Image
                source={{uri : v.title_img}}
                style={styles.img}
                resizeMode={'cover'}
              >
              </Image>
            </View>
            <Text style={[styles.direction , BaseStyles.baseColor]}>{v.name}</Text>
          </TouchableOpacity>
        )
      }
    )

    return (
      <View style={styles.wrapper}>
        <View style={styles.col}>
          {classifyList.splice(0,4)}
        </View>
        <View style={styles.col}>
          {classifyList}
          <TouchableOpacity key={'more'} style={[styles.item]}>
            <View style={styles.wrap}>
              <Image
                source={allclassify}
                style={styles.img}
                resizeMode={'cover'}
              >
              </Image>
            </View>
            <Text style={[styles.direction , BaseStyles.baseColor]}>全部分类</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

let {w,h} = Dimensions.get('window');

let styles = StyleSheet.create({
  wrapper: {
    flex : 1,
    flexDirection : 'column',
    paddingVertical : 18,
    backgroundColor : '#fff'
  },
  col : {
    flex : 1,
    flexDirection : 'row'
  },
  item: {
    flex: 1,
    alignItems : 'center',
    marginBottom : 18
  },
  img :{
    width : 52,
    height : 52,
  },
  direction : {
    marginTop : 4,
    textAlign : 'center'
  }
})
