import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import Carousel from '../components/Carousel/Carousel'
import Promotion from '../components/Promotion/Promotion'
import Category from '../components/Category/Category'
import Ranking from '../components/Ranking/Ranking'
import Solid from '../components/Solid/Solid'
import HotGoods from '../components/HotGoods/HotGoods'

import BaseStyles from '../styles/BaseStyles'


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

        <ScrollView>
          <View style={{backgroundColor : '#eee' , flex : 1}}>

            <Carousel {...this.props.state}/>
            <Promotion {...this.props.state}/>
            {
              data && data.classify ?
              <Category
                classify={data.classify}
                BaseStyles={styles}
              /> :
              null
            }
            {
              data && data.goods ?
              <Ranking
                BaseStyles={styles}
              /> :
              null
            }
            {
              data && data.solid ?
              <Solid
                BaseStyles={styles}
                solid = {data.solid}
              /> :
              null
            }
            {
              data && data.goods ?
              <HotGoods
                BaseStyles={styles}
                goods = {data.goods}
              /> :
              null
            }
          </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create(Object.assign(
  {},
  BaseStyles
))
