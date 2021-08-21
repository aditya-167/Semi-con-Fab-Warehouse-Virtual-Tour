import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  VrButton,
  Environment,
} from 'react-360';
import Entity from 'Entity';
import WarehouseModel from './WarehouseModel'
import Lights from './Lights'

export default class ThreeD extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        xnow : -70,
        znow : 50,
        xtar : -70,
        ztar : 50,
        rotation: 0,
        scalesize: 3,
        imgsrc: "360_world.jpg",
        place: "warehouse",
        wafermachinesize: 0,
        soicSize: 0,
        qfnSize: 0,
        waferCutter: 0,
        markersize: 0.5,
        areaButton: 5,
        warehouseButtonSize: 0,
        };
    this.i=0;
    this.distanceCalculator = this.distanceCalculator.bind(this);
    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);
    }

 start(){
  if(this.i%8==0){
    this.setState({
      scalesize: 0,
        imgsrc: "image.jpg",
        place: 'fab1',
        wafermachinesize: 0.2,
        areaButton: 0,
        markersize: 0,
        warehouseButtonSize: 20,
    });

  }
  
  if(this.i%8==1){
    this.setState({
      scalesize: 3,
        imgsrc: "360_world.jpg",
        place: 'warehouse',
        wafermachinesize: 0,
        markersize: 0.5,
        areaButton: 5,
        warehouseButtonSize: 0,
    });
  }
  if(this.i%8==2){
    this.setState({
      scalesize: 0,
        imgsrc: "image.jpg",
        place: 'fab2',
        waferCutter: 0.08,
        areaButton: 0,
        markersize: 0,
        warehouseButtonSize: 20,
    });
  }
  if(this.i%8==3){
      this.setState({
        scalesize: 3,
          imgsrc: "image.jpg",
          place: 'warehouse',
          wafermachinesize: 0,
          waferCutter: 0,
          areaButton: 5,
          markersize: 0.5,
          warehouseButtonSize: 0,
      });
    }
    if(this.i%8==4){
        this.setState({
          scalesize: 0,
            imgsrc: "image.jpg",
            place: 'fab1',
            qfnSize: 1.5,
            areaButton: 0,
            markersize: 0,
            warehouseButtonSize: 20,
        });
      }
      if(this.i%8==5){
          this.setState({
            scalesize: 3,
              imgsrc: "image.jpg",
              place: 'warehouse',
              qfnSize: 0,
              areaButton: 5,
              markersize: 0.5,
              warehouseButtonSize: 0,
          });
        }
        if(this.i%8==6){
            this.setState({
              scalesize: 0,
                imgsrc: "image.jpg",
                place: 'fab2',
                soicSize: 1.2,
                areaButton: 0,
                markersize: 0,
                warehouseButtonSize: 20,
            });
          }
          if(this.i%8==7){
              this.setState({
                scalesize: 3,
                  imgsrc: "image.jpg",
                  place: 'warehouse',
                  soicSize: 0,
                  areaButton: 5,
                  markersize: 0.5,
                  warehouseButtonSize: 0,
              });
            }
            
            this.i++;
  }
    




componentDidMount(){
    this.distanceCalculator();
    this.rotate();
}

rotate(){
    
  const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
        rotation: this.state.rotation + delta / 60
    });
    this.frameHandle = requestAnimationFrame(this.rotate);

  }
  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

distanceCalculator(){
    if(Math.abs(this.state.xnow - this.state.xtar)>0.3){
        this.setState({
            xnow : this.state.xnow * (1-0.05) + this.state.xtar * 0.05
        });
        postMessage({type:"newPosition", x:this.state.xnow, z:this.state.znow});
        
    }
    if(Math.abs(this.state.znow - this.state.ztar)>0.3){
      this.setState({
          znow : this.state.znow * (1-0.05) + this.state.ztar * 0.05
      });
      postMessage({type:"newPosition", x:this.state.xnow, z:this.state.znow});
      
  }
    requestAnimationFrame(this.distanceCalculator);
}

      render() {
        //Environment.setBackgroundImage(asset(this.state.imgsrc),{format: '2D'});
        
        
        return (
          
          <View>
            <VrButton onClick={() =>{
              this.state.xtar = -125;
              this.state.ztar = -10;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [125, 22, 10]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>


        <VrButton onClick={() =>{
              this.state.xtar = -230;
              this.state.ztar = -10;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [230, 22, 10]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <VrButton onClick={() =>{
              this.state.xtar = 0;
              this.state.ztar = -10;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [0, 22, 10]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>


        <VrButton onClick={() =>{
              this.state.xtar = 0;
              this.state.ztar = 50;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [0, 22, -50]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <VrButton onClick={() =>{
              this.state.xtar = -125;
              this.state.ztar = 50;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [125, 22, -50]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <VrButton onClick={() =>{
              this.state.xtar = -230;
              this.state.ztar = 50;
            }
          }>
            <Entity
          source={{
            obj: asset('Marker.obj'),
            mtl: asset('Marker.mtl')
          }}
          
          style={{
            transform: [
              {translate: [230, 22, -50]},
              {scale: this.state.markersize}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <VrButton onClick = {()=>this.start()}>
            <Entity
          source={{
            obj: asset('FabAreaButton.obj'),
            mtl: asset('FabAreaButton.mtl')
          }}
          
          style={{
            transform: [
              {translate: [-20, 30, -50]},
              {scale: this.state.areaButton}
            ]
          }}
          lit = {true}
        />
        </VrButton>


        <VrButton onClick = {()=>this.start()}>
            <Entity
          source={{
            obj: asset('FabAreaButton.obj'),
            mtl: asset('FabAreaButton.mtl')
          }}
          
          style={{
            transform: [
              {translate: [-20, 30, 10]},
              {scale: this.state.areaButton}
            ]
          }}
          lit = {true}
        />
        </VrButton>
        
        <VrButton onClick = {()=>this.start()}>
            <Entity
          source={{
            obj: asset('assemblyAreaButton.obj'),
            mtl: asset('assemblyAreaButton.mtl')
          }}
          
          style={{
            transform: [
              {translate: [260, 30, 10]},
              {scale: this.state.areaButton},
              {rotateZ: 180},
              {rotateX: 180}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <VrButton onClick = {()=>this.start()}>
              <Entity
            source={{
              obj: asset('assemblyAreaButton.obj'),
              mtl: asset('assemblyAreaButton.mtl')
            }}
            
            style={{
              transform: [
                {translate: [260, 30, -50]},
                {scale: this.state.areaButton},
                {rotateZ: 180},
                {rotateX: 180}
              ]
            }}
            lit = {true}
          />
        </VrButton>
        
        
        <Entity
          source={{
            obj: asset('wm2.obj'),
            mtl: asset('wm2.mtl')
          }}
          
          style={{
            transform: [
              {translate: [-100, 0, -80]},
              {scale: this.state.wafermachinesize},
              {rotateY: this.state.rotation},
              //{rotateX: 270},
              
            ]
          }}
          lit = {true}
        />

        <Entity
          source={{
            obj: asset('wc.obj'),
            mtl: asset('wc.mtl')
          }}
          
          style={{
            transform: [
              {translate: [-200, 25, 0]},
              {scale: this.state.waferCutter},
              {rotateY: this.state.rotation},
              {rotateZ: 20}
            ]
          }}
          lit = {true}
        />

        <VrButton onClick = {()=>this.start()}>
            <Entity
          source={{
            obj: asset('WarehouseButton.obj'),
            mtl: asset('WarehouseButton.mtl')
          }}
          
          style={{
            transform: [
              {translate: [100, 28, -200]},
              {scale: this.state.warehouseButtonSize},
              {rotateZ: 0},
              {rotateY: 270}
            ]
          }}
          lit = {true}
        />
        </VrButton>

        <Entity
          source={{
            obj: asset('SOICs.obj'),
            mtl: asset('SOICs.mtl')
          }}
          
          style={{
            transform: [
              {translate: [260, 25, 30]},
              {scale: this.state.soicSize},
              {rotateY: this.state.rotation},
              {rotateX: 270},
              {rotateY: 30}
              
            ]
          }}
          lit = {true}
        />

      <Entity
          source={{
            obj: asset('QFN.obj'),
            mtl: asset('QFN.mtl')
          }}
          
          style={{
            transform: [
              {translate: [260, 30, -50]},
              {scale: this.state.qfnSize},
              {rotateY: this.state.rotation},
              {rotateZ: 20}
            ]
          }}
          lit = {true}
        />

        
           
          <WarehouseModel scalesize={this.state.scalesize}/>
          <Lights />
            
            
        </View>
        );
    }
  };