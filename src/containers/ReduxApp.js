import React, { Component , Navigator} from 'react-native';
import { bindActionCreators } from 'redux';
import Home from '../page/Home';
import * as IndexActions from '../actions/IndexActions';
import { connect } from 'react-redux';

class ReduxApp extends Component {
  constructor (props){
    super(props);
  }

  render (){
    const { state , actions } = this.props;
    const appName = 'ysApp';

    return (
      <Home {...this.props} />
    )
  }
}

export default connect ( state => ({
  state : state.Home
}),
  (dispatch) => ({
    actions : bindActionCreators(IndexActions , dispatch)
  })
)(ReduxApp)
