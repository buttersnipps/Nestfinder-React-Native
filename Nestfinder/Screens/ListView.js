import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    TouchableOpacity
} from "react-native";
import GridView from 'react-native-super-grid';
import {houseRef} from '../Firebase/firebaseconfig';

class ListView extends Component{
    constructor(props){
        super(props);
        this.state = ({
            houses: [],
            loading : false,
        });
       // this.onPress = this.onPress.bind(this);
        
    }
    componentWillMount(){
        
        houseRef.once('value').then(snapshot => { 
            const houses = [];
            snapshot.forEach(function(child){
                var obj = child.val();
                houses.push(obj); 
            });
            this.setState({ houses: houses});
        });   
    }
    onShowHomeDetails = (item) => {
        this.props.navigation.navigate('HomeDetails' , {address : item.address ,
            price : item.price,
            imageUrl :item.imageUrl,
            bedroom : item.bedroom,
            bathroom : item.bathroom
        });
    }
    
    render(){
         const items = this.state.houses;
      
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
                <TouchableOpacity onPress = { this.onShowHomeDetails.bind(this,item)}>
                <View style = {{height: 130,width :130,
                    marginLeft : 20, borderWidth: 0.5,
                    borderColor: '#dddddd'}} > 
                      <View style={{flex: 2}}>
                        <Image source={{uri : item.imageUrl}} 
                        style={{flex:1, width: null,
                        height: null, resizeMode: 'cover'}} 
                        />
                    </View> 
                    <View style={{flex: 1 , paddingLeft: 10,paddingTop: 10}}>
                        <Text style={{fontWeight:"bold" , fontSize :12}}> {item.address} </Text>  
                    </View>
                    <View style={{flex: 1 , paddingLeft: 10}}>
                            <Text> ${item.price} </Text>    
                    </View>
                </View>
                </TouchableOpacity>
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