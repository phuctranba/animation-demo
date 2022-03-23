import * as React from 'react';
import {useCallback} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from "../../utils";

const DATA_SCREEN = [
    {
        title: "Decay & spring",
        name: "Ex1"
    },
    {
        title: "Easing",
        name: "Ex2"
    },
    {
        title: "Use native driver",
        name: "Ex3"
    },
    {
        title: "Scroll animated",
        name: "Ex4"
    },
    {
        title: "Care app",
        name: "GetStartedCare"
    }
]

const Home = ({navigation}) => {

    const renderItem = useCallback(({item}) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate(item.name)} style={{marginVertical: 12}}>
                <Text style={{color: COLOR.color_1, fontSize: 24}}>{item.title}</Text>
            </TouchableOpacity>
        )
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<Text>sngsndfln</Text>*/}
            <FlatList
                style={{flex:1, width:'100%', marginTop:60}}
                contentContainerStyle={{paddingHorizontal: 12}}
                data={DATA_SCREEN}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
            />
        </View>
    );
}

export default Home;
