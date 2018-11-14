import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class AppartmentList extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>Appartment</Text>
            </View>
        );
    }
}
export default AppartmentList;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});