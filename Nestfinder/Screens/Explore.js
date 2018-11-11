import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView, 
    Image,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Components/Explore/Categories';
import ListView from './ListView';

class Explore extends Component{
    onShowHomeList = () => {
        this.props.navigation.navigate('HomeList');
    }

    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex: 1}}>
                    <View style = {{height:80,backgroundColor:'white',
                    borderBottomWidth:1,boderBottonColor:'#dddddd'}}>
                        <View style={{flexDirection:'row',padding: 10, backgroundColor:'white',
                        marginHorizontal : 20,shadowOffset:{width: 0, height:0},
                        shadowOpacity :0.2,
                        elevation:1   
                        }}>
                            <Icon name="ios-search" size={20} style ={{marginRight: 10 }}/>
                                <TextInput
                                    placeholder="Search by city...."
                                    placeholderTextColor="grey"
                                    style={{flex:1,fontWeight:'700',
                                    backgroundColor:'white'}}
                                />
                        </View>
                    </View>
                    <ScrollView 
                        scrollEventThrottle ={16}
                    >
                        <View style = {{flex :1 , backgroundColor: 'white',
                            paddingTop : 20}}>
                            <Text style={{fontSize: 24 , fontWeight:'700',
                            paddingHorizontal : 20 }}>
                            Look for your next home here...
                            </Text>
                            <View style={{height: 130 , marginTop : 20}}>
                            <ScrollView
                                horizontal ={true}
                                showsHorizontalScrollIndicator= {false}
                            >
                                <TouchableOpacity  onPress = {this.onShowHomeList.bind()}>
                               <Category imageUri={require('../assets/Images/Houses/house1.jpeg')}
                               name = "Houses"
                               />
                               </TouchableOpacity>
                                 <Category imageUri={require('../assets/Images/Apartments/app1.jpeg')}
                               name = "Apartment"
                               />
                                 <Category imageUri={require('../assets/Images/Rooms/room1.jpeg')}
                               name = "Rooms"
                               />
                            </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({

container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
});