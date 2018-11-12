import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from "react-native";
import GridView from 'react-native-super-grid';
import * as firebase from 'firebase';

class ListView extends Component{
    
    
    componentWillMount(){
  
        var config = {
            apiKey: "AIzaSyAtwTUv9Dr608Fv4x7QTcWEfbos-HKyuk8",
            authDomain: "nestfinder-react-natice.firebaseapp.com",
            databaseURL: "https://nestfinder-react-natice.firebaseio.com",
            projectId: "nestfinder-react-natice",
            storageBucket: "nestfinder-react-natice.appspot.com",
            messagingSenderId: "502710052203"
        };
        firebase.initializeApp(config);

        function writeUserData(houseId, address, price) {
            firebase.database().ref('houses/' + houseId).set({
              address: address,
              price: price,
            });
          }
       //   writeUserData(2,'36 Evelyn Wiggins','2500');
        var fetchHouses = firebase.database().ref('houses/');
      this.list =  fetchHouses.once('value').then(snapshot => { 
            snapshot.forEach(function(child){
                this.add = child.val();    
            });
        })  
       // this.setState({list : this.state.list})  
    }
       
    render(){
       const items = [
            { name: '66 Haynes',imageUri:require('../assets/Images/Houses/house1.jpeg'),price:"$2000"}, 
            { name: '36 Evelyn Wiggins',imageUri:require('../assets/Images/Houses/house2.jpeg'),price:"$2500"},
            { name: '70 Pond Road',imageUri:require('../assets/Images/Houses/house3.jpeg'),price:"$2700"}, 
            { name: '80 Lulu Street',imageUri:require('../assets/Images/Houses/house4.jpeg'),price:"$3000"},
          ]
         // var a = this.add;
        return(
           <SafeAreaView style={{flex:1}}>
           <Text style={{fontSize: 24 , fontWeight:'700',
                            paddingHorizontal : 20 ,backgroundColor:'white' }}>
                             Available Homes near you..
            </Text>
            <GridView
            itemDimension={130}
            items={items}
            style={styles.gridView}
            renderItem={(item) => (
                <View style = {{height: 130,width :130,
                    marginLeft : 20, borderWidth: 0.5,
                    borderColor: '#dddddd'}} >
                    <View style={{flex: 2}}>
                        <Image source={item.imageUri} 
                        style={{flex:1, width: null,
                        height: null, resizeMode: 'cover'}} 
                        />
                    </View> 
                    <View style={{flex: 1 , paddingLeft: 10,paddingTop: 10}}>
                            <Text style={{fontWeight:"bold"}}> {item.name} </Text>    
                    </View>
                    <View style={{flex: 1 , paddingLeft: 10}}>
                            <Text> {item.price} </Text>    
                    </View>
                </View>
            )}
            />
           </SafeAreaView>
          
          
        );
    }
}
export default ListView;

const styles = StyleSheet.create({

    gridView: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: 'white'
      },
     
});