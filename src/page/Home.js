import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Carousel from '../components/Carousel/Carousel'
import Promotion from '../components/Promotion/Promotion'


export default class Home extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount (){
    const { getIndexData } = this.props.actions;
    getIndexData('/YsApp/index/index/allapi?market_id=1');
  }

  render (){
    const { data } = this.props.state;
    console.log(data)
    return (
        <View style={{backgroundColor : '#eee'}}>
          <Carousel {...this.props.state}/>
          <Promotion {...this.props.state}/>
        </View>

    )
  }
}
