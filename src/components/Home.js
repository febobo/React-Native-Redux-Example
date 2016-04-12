import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

export default class Home extends Component {
  render (){
    return (
      <View style={{flex : 1 , backgroundColor : 'red' , alignItems : 'center' , justifyContent : 'center' }}>
        <Text style={{ fontSize : 28 , color : '#fff'}}>React Native Es6 Example</Text>
      </View>
    )
  }
}
