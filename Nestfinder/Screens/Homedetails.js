import React,{Component} from "react";
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from "react-native";
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/Ionicons'
import images from '../assets/Image';
const { height, width } = Dimensions.get('window')
class HomeDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            address : this.props.navigation.getParam('address', ''),
            price : this.props.navigation.getParam('price', ''),
            imageUrl : this.props.navigation.getParam('imageUrl', ''),
            bedroom : this.props.navigation.getParam('bedroom', ''),
            bathroom : this.props.navigation.getParam('bathroom', ''),
        };
    }
    onShowFavorite = () =>{
        this.props.navigation.navigate('Saved',{address : this.state.address});
    }
    render(){

        const items = [
            { image: images.house6} , { image: images.house7} , 
            { image: images.house8} , { image: images.house9} , 
          ];


        return(
            <SafeAreaView style ={{flex:1}}>
              <ScrollView scrollEventThrottle ={16}>
             <View style = {{flex :1 , backgroundColor: 'white',}}>
               <View>
                    <View style={{width:width,height:200}}>
                        <ImageBackground
                            style = {{flex:1,height:null,width:null,resizeMode:'cover',
                            borderRadius:5,
                            borderWidth:1,
                            borderColor:'#dddddd'}}
                            //source = {{uri : this.state.imageUrl}} 
                            source = {require('../assets/Images/Houses/house1.jpeg')}
                        >
                        <View>
                        <TouchableOpacity onPress={this.onShowFavorite.bind()}>
                        <Icon name ="ios-heart"  size={40} style={{position:'absolute', right: 0}}/>
                        </TouchableOpacity>
                        </View>
                        </ImageBackground>            
                    </View>
                    <Text style={{fontSize:20, fontWeight:'700' , paddingTop : 20 ,paddingLeft : 10}} >
                        Location :  <Text style={{fontSize:15,fontWeight:'700'}}>{this.state.address}</Text>
                    </Text>
                    <View style ={{paddingLeft: 10 
                    ,paddingTop : 20 ,flexDirection:'row',
                    borderBottomColor:'#dddddd',borderBottomWidth:1}}>             
                    <Image source = {require('../assets/Icons/bed.png')} />
                    <Text style = {{paddingLeft: 10, paddingTop: 5}}> {this.state.bedroom}</Text>
                    <Image source = {require('../assets/Icons/shower.png')}
                            style = {{paddingLeft:20,paddingTop: 10}} />
                    <Text style = {{paddingLeft: 10,paddingTop:5 ,paddingBottom:10}}> 
                    {this.state.bathroom}</Text>
                    </View>  
                    <View style={{ borderBottomColor:'#dddddd',borderBottomWidth:1}}>
                    <Text style={{fontSize:20, fontWeight:'700' , paddingTop : 10,
                    paddingLeft : 10 ,paddingBottom : 10}} >
                             Price :  <Text style={{fontSize:15,fontWeight:'700' }}> 
                              ${this.state.price}</Text>
                    </Text> 
                    </View> 
                    <View>
                    <Text style={{fontSize:20, fontWeight:'700' , paddingTop : 20 ,paddingLeft : 10}} >
                        Take a look inside
                    </Text> 
                    <GridView
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        renderItem={(item) => (
                            <View style = {{height: 130,width :130,
                                    marginLeft : 20, borderWidth: 0.5,
                                    borderColor: '#dddddd'}} > 
                            <View style={{flex: 2}}>
                            <Image source={item.image} 
                                   style={{flex:1, width: null,
                                height: null, resizeMode: 'cover'}} />
                            </View> 
                            </View>
                            )}/>
                    </View>
                </View>
            </View>
            </ScrollView>
            </SafeAreaView>
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
infoView:{
    borderBottomColor: 'black',
        borderBottomWidth: 1,
},

});