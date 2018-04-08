import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexColumnAndRow extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItem: 'center', justifyContent: 'center'}}>
        <View style={{paddingLeft: 10, paddingRight: 10, height: 50, backgroundColor: 'powderblue'}}>
          <View style={{flex: 1, flexDirection: 'column', alignItem: 'center', justifyContent: 'center'}}>
            <View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{height: 30, width: 80, backgroundColor: 'tomato'}} />
                <View style={{height: 30, width: 80, backgroundColor: 'tomato'}} />
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingLeft: 10, paddingRight: 10, height: 50, backgroundColor: 'skyblue'}}>
          <View style={{flex: 1, flexDirection: 'column', alignItem: 'center', justifyContent: 'center'}}>
            <View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{height: 30, width: 80, backgroundColor: 'tomato'}} />
                <View style={{height: 30, width: 80, backgroundColor: 'tomato'}} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('JustCollection', () => FlexColumnAndRow);
