import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  PropTypes
} from 'react-native';

export default class CountDown extends Component {

  constructor (props){
    super(props);
  }

  render (){

    const { time , style , day , hours , minute , seconds} = this.props;
    const times = {};
    times.current = new Date().getTime();
    times.leftTime = time - times.current ;
    if(times.leftTime <= 0) return ;
    // 天
    times.day = Math.floor(times.leftTime / (1000 * 60 * 60 *24));
    // 时
    times.leftHours = times.leftTime % (1000 * 60 * 60 *24);
    times.hours = Math.floor(times.leftHours / (1000 * 60 * 60))
    // 分
    times.leftMinute = times.leftTime % (1000 * 60 * 60);
    times.minute = Math.floor(times.leftMinute / (1000 * 60))
    // 秒
    times.leftSeconds = times.leftTime % (1000 * 60);
    times.seconds = Math.floor(times.leftSeconds / (1000))

    return (

        <Text>
          {
            day ?
              <Text style={style}>{times.day}天</Text>
            : null
          }
          {
            hours ? <Text style={style}>{times.hours}时</Text> : null
          }
          {
            minute ? <Text style={style}>{times.minute}分</Text> : null
          }
          {
            seconds ? <Text style={style}>{times.seconds}秒</Text> : null
          }
        </Text>



    )
  }
}


CountDown.propTypes = {
  time : PropTypes.number.isRequired
}
