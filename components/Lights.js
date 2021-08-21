import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  AmbientLight,
  PointLight, 
  DirectionalLight
} from 'react-360';
import Entity from 'Entity';
export default class ArtGallery extends React.Component {
    render() {
      return (
        <View>  
          <AmbientLight intensity = {0.7}
          style = {{color: 'white'}}
          />
        
        
        
  
        
        
      </View>
     );
    }
  };