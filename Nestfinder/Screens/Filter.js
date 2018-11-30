import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";
import {houseRef} from '../Firebase/firebaseconfig';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = ({
            houses: [],
            loading : false,
            rooms : props.rooms
        });        
    }
   
    filterList(rooms){
        houseRef.once('value').then(snapshot => { 
            const houses = [];
            snapshot.forEach(function(child){
                var obj = child.val();
                if(obj.bedroom == rooms){
                    houses.push(obj); 
                }
               
            });
            this.setState({ houses: houses});
        }); 
    }

    onShowFilterList = (items) => {
        //var a = items;
        this.props.navigation.navigate('FilterList' , {items:items});
    }

    render(){
        const items = this.state.houses;
    
        var radio_props = [
            {label: '2', value: 2 },
            {label: '3', value: 3 },
            {label: '4', value: 4 },
          ];
        return(
            <View style ={styles.container}>
                <View style ={{paddingLeft: 10 
                    ,paddingTop : 20 ,flexDirection:'row',
                    borderBottomColor:'#dddddd',borderBottomWidth:1}}>
                <Text style={{fontSize:15, fontWeight:'700' , paddingTop : 10 ,paddingLeft : 10 ,paddingRight : 10}} >
                 Bedroom        
                </Text> 
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    formHorizontal={true}
                    labelHorizontal={true}
                    onPress={(rooms) => {this.setState({rooms:rooms}),this.filterList(rooms)}}
                />
                </View>
                <View>
                <Button
                    onPress={this.onShowFilterList.bind(this,items)}
                    title="Search"
                    color="red"
                />
                </View>
            </View>
        );
    }
}
export default Filter;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},

});