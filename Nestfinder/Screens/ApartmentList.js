import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class ApartmentList extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>Apartment</Text>
            </View>
        );
    }
}
export default ApartmentList;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});