import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class ListView extends Component{
    render(){
        return(
            <View style ={styles.container}>
                <Text>List View</Text>
            </View>
        );
    }
}
export default ListView;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});