import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, Dimensions } from 'react-native';
import  { Audio } from 'expo-av';

const listBackgroundColors = {
  1: "#E74292",
  2:"#01CBC6",
  3:"#BB2CD9",
  4:"#FF3031",
  5:"#FF3E4D",
  6:"#758AA2",
  7:"#F5BCBA",
  8:"#00CCCD",
  9:"#4C4B4B",
  10:"#EEC213"
}

const soundList = {
  one:require('./assets/one.wav'),
  two:require('./assets/two.wav'),
  three:require('./assets/three.wav'),
  four:require('./assets/four.wav'),
  five:require('./assets/five.wav'),
  six:require('./assets/six.wav'),
  seven:require('./assets/seven.wav'),
  eight:require('./assets/eight.wav'),
  nine:require('./assets/nine.wav'),
  ten:require('./assets/ten.wav')
}

export default class App extends React.Component {

  playSound = async number => {
    const soundObject = new Audio.Sound()
    try {
      let path = soundList[number]
      await soundObject.loadAsync(path)       
      await soundObject.playAsync()
      .then( async playbackStatus => {
        //console.log(playbackStatus)
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(err => console.log(err))
    } catch (error) {
      console.log(error);
      
    }


  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.gridContainer}>          
          <Image 
          style={styles.logo}
          source={require('./assets/logo.png')}
          />
          <View style={styles.headerC}><Text style={styles.header}>Numbers</Text></View>
          <ScrollView style={styles.rowContainer} 
          horizontal={true} 
          scrollEventThrottle={40}
          decelerationRate="fast"
          >
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[1]}]}
            onPress={() => {
              this.playSound("one")
            }}
            >
              <Text style={styles.itemText}>One</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/7-2-1-number-png.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[2]}]}
            onPress={() => {
              this.playSound("two")
            }}
            >
              <Text style={styles.itemText}>Two</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/2-2-2-number-png.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[3]}]}
            onPress={() => {
              this.playSound("three")
            }}
            >
              <Text style={styles.itemText}>Three</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/5-2-3-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[4]}]}
            onPress={() => {
              this.playSound("four")
            }}
            >
              <Text style={styles.itemText}>Four</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/1-2-4-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[5]}]}
            onPress={() => {
              this.playSound("five")
            }}
            >
              <Text style={styles.itemText}>Five</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/11-2-5-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[6]}]}
            onPress={() => {
              this.playSound("six")
            }}
            >
              <Text style={styles.itemText}>Six</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/8-2-6-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[7]}]}
            onPress={() => {
              this.playSound("seven")
            }}
            >
              <Text style={styles.itemText}>Seven</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/4-2-7-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[8]}]}
            onPress={() => {
              this.playSound("eight")
            }}
            >
              <Text style={styles.itemText}>Eight</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/6-2-8-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[9]}]}
            onPress={() => {
              this.playSound("nine")
            }}
            >
              <Text style={styles.itemText}>Nine</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/3-2-9-number-png-thumb.png'}}
          />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.item,{backgroundColor:listBackgroundColors[10]}]}
            onPress={() => {
              this.playSound("ten")
            }}
            >
              <Text style={styles.itemText}>Ten</Text>
              <Image 
          style={{width:200,height:200}}
          source={{uri:'https://www.freepngimg.com/thumb/numbers/10-2-10-number-png-thumb.png'}}
          />
            </TouchableOpacity>
          </ScrollView>          
        </View>                        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  },
  gridContainer:{
    flex:1,
    margin:5,    
  },
  logo:{
    alignSelf:'center',
    marginTop:15
  },
  rowContainer:{
    flexDirection:"row",    
  },
  item:{
    flex:1,
    height:300,
    width:(Dimensions.get('window').width - 20),
    alignItems:'center',
    justifyContent:'center',    
    borderWidth:1,
    borderRadius:10,
    borderColor:'#FFF',  
    marginHorizontal:4,
    marginVertical:6,
    padding:5,         
  },
  itemText:{
    marginLeft:20,
    alignSelf:'flex-start', 
    color:'#fff',
    fontSize:20
  },
  header:{
    fontSize:30,
    alignSelf:'center'       
  },
  headerC:{
    backgroundColor:'#F5BCBA',
    borderWidth:2,
    borderColor:'#FFF',
    borderRadius:10
  }
});
