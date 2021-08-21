import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
  Environment,
  StyleSheet,
  Text,
} from 'react-360';
import ThreeD from './components/ThreeD'
export default class ArtGallery extends React.Component {
  /*constructor(props)
	{
		super(props);
		this.state =
		{
			Txt: "Hello_default",
			imgSrc: "360_world.jpg",
		};
		this.i=0;
	}

  start()
	{
		if(this.i%2==0)
		{
		   this.setState({
					Txt: "State 1",
					imgSrc: "img2.jpg",
		   });
		}
		else{
		    this.setState({
				  Txt: "State 2",
				  imgSrc: "image.jpg",
			  });
		}
    this.i++;
	}

	render() {
    Environment.setBackgroundImage(asset(this.state.imgSrc));
		return (
		  <View>
			<VrButton onClick={() => this.start()}>
				<Text
				  style={{
					backgroundColor: '#777879',
					fontSize: 60,
          fontWeight: 500,
          color: '#fff',
          //transform: [-70, -30, 50]
				  }}>
				  {this.state.Txt}
				</Text>
        
			</VrButton>
		  </View>
		);
    
  }*/
  render() {
    return(
      <View>
        <ThreeD />
       </View> 
    )
  }
};


AppRegistry.registerComponent('ArtGallery', () => ArtGallery);