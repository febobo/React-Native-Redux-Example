
import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';



export default class Promotion extends Component {

  constructor (props){
    super(props);
  }

  render (){
    const { data } = this.props;
    return (
      <View style={{height : 142}}>
        { data && data.active ? data.active.map( (v,k) =>
          <TouchableOpacity key={k} >
            <View style={styles.wrap}>
              <Image
                source={{uri : v.image}}
                style={styles.img}
                resizeMode={'cover'}
              >
              </Image>
            </View>
          </TouchableOpacity>
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
  }
})
