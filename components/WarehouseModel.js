import React from 'react';
import {
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';
export default class WarehouseModel extends React.Component {
    render() {
      return (
        <View>  
        <Entity
          source={{
            obj: asset('mw.obj'),
            mtl: asset('mw.mtl')
          }}
          
          style={{
            transform: [
              {translate: [100, -30,50]},
              {scale: this.props.scalesize}
            ]
          }}
          lit = {true}
        />
        
      </View>
     );
    }
};


