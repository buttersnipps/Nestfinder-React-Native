
import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet
} from "react-native";

class Saved extends Component{
    constructor(props){
        super(props);
        this.state = {
        address : props.navigation.getParam('address', '')
        };
    }
    render(){
        return(
            <View style ={styles.container}>
                <Text>Favroite</Text>
                <Text>{this.state.address}</Text>
            </View>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});