import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class HomeDetails extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>Details </Text>
            </View>
        );
    }
}
export default HomeDetails;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});