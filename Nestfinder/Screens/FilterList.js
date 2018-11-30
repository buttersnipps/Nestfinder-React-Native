import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity
} from "react-native";
import GridView from 'react-native-super-grid';

class FilterList extends Component{
    constructor(props){
        super(props);
        this.state = ({
           item : this.props.navigation.getParam('items', '')
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
        var items = this.state.item;
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
export default FilterList;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
gridView: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: 'white'
  },
});