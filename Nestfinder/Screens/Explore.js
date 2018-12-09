import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    ScrollView, 
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './Components/Explore/Categories';
import Home from './Components/Explore/Home';
import images from '../assets/Image';
const { height, width } = Dimensions.get('window')
class Explore extends Component{
  
    onShowHomeList = () => {
        this.props.navigation.navigate('HomeList');
    }
    onShowApartmentList = () =>{
        this.props.navigation.navigate('ApartmentDetails')
    }
    onShowHomeDetails = () =>{
        this.props.navigation.navigate('HomeDetails')
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
                               <TouchableOpacity onPress = {this.onShowHomeList.bind()}>
                                 <Category imageUri={require('../assets/Images/Apartments/app1.jpeg')}
                               name = "Apartment"
                               />
                               </TouchableOpacity>
                               <TouchableOpacity onPress = {this.onShowHomeList.bind()}>
                               <Category imageUri={require('../assets/Images/Rooms/room1.jpeg')}
                               name = "Rooms"
                               />
                               </TouchableOpacity>
                              
                            </ScrollView>
                            </View>
                            <View style={{marginTop:40,paddingHorizontal:20}}>
                            <Text style={{fontSize:24 , fontWeight:'700'}} >
                             Recently added
                             </Text>
                             <TouchableOpacity onPress = {this.onShowHomeDetails.bind()}>
                             <View style={{width:width-40,height:200,marginTop:20}}>
                              <Image 
                              style = {{flex:1,height:null,width:null,resizeMode:'cover',
                              borderRadius:5,
                              borderWidth:1,
                              borderColor:'#dddddd'}}
                              source = {require('../assets/Images/Houses/house5.jpeg')} />   
                             </View>
                             </TouchableOpacity>
                            </View>
                            <View style = {{ marginTop: 40 }}>
                             <Text style={{fontSize:24 , fontWeight:'700' , paddingHorizontal :20}} >
                             Houses Near You
                             </Text>
                             </View>
                             <View style = {{paddingHorizontal : 20 ,
                              marginTop: 20 ,flexDirection:"row",
                              flexWrap:"wrap",justifyContent:"space-between"}}>
                              <TouchableOpacity onPress = {this.onShowHomeDetails.bind()}>
                                <Home width = {width} source = {images.house6}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.onShowHomeDetails.bind()}>
                                <Home width = {width} source = {images.house7}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.onShowHomeDetails.bind()}>
                                <Home width = {width} source = {images.house8}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress = {this.onShowHomeDetails.bind()}>
                                <Home width = {width} source = {images.house9}/>
                                </TouchableOpacity>     
                             </View>
                             <View style = {{ marginTop: 40 }}>
                             <Text style={{fontSize:24 , fontWeight:'700' , paddingHorizontal :20}} >
                             Apartments Near You
                             </Text>
                             </View>
                             <View style = {{paddingHorizontal : 20 ,
                              marginTop: 20 ,flexDirection:"row",
                              flexWrap:"wrap",justifyContent:"space-between"}}>
                                <Home width = {width} source = {images.house6}/>
                                <Home width = {width} source = {images.house7}/>
                                <Home width = {width} source = {images.house8}/>
                                <Home width = {width} source = {images.house9}/>
                             </View>
                             <View style = {{ marginTop: 40 }}>
                             <Text style={{fontSize:24 , fontWeight:'700' , paddingHorizontal :20}} >
                             Rooms Near You
                             </Text>
                             </View>
                             <View style = {{paddingHorizontal : 20 ,
                              marginTop: 20 ,flexDirection:"row",
                              flexWrap:"wrap",justifyContent:"space-between"}}>
                                <Home width = {width} source = {images.house6}/>
                                <Home width = {width} source = {images.house7}/>
                                <Home width = {width} source = {images.house8}/>
                                <Home width = {width} source = {images.house9}/>
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