import React from 'react';
import {FlatList, Image, Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from 'react-native-animatable';
import {SIZES} from "../../utils";

const DATA = [
    {
        avatar: require("../../assets/images/avatar2.jpg"),
        name: "Sarah Miller",
        age: 25,
        somethings: "Depression",
        time: "11 Feb 2021 09:00-09:30",
        meds: "Takes meds",
        check: true
    },
    {
        avatar: require("../../assets/images/avatar3.png"),
        name: "Jill Robbins",
        age: 23,
        somethings: "ADHD",
        time: "11 Feb 2021 12:00-13:30",
        meds: "No meds",
        check: false
    },
    {
        avatar: require("../../assets/images/avatar4.jpg"),
        name: "Tom Stuart",
        age: 25,
        somethings: "Depression",
        time: "11 Feb 2021 16:00-17:00",
        meds: "Takes meds",
        check: false
    }
]

const ListSession = () => {

    const translateX = {
        from: {
            transform: [{translateX: SIZES.WIDTH_WINDOW}],
        },
        to: {
            transform: [{translateX: 0}],
        },
    };

    const translateTitle = {
        from: {
            transform: [{translateY: 30}],
            opacity: 0
        },
        to: {
            transform: [{translateY: 0}],
            opacity: 1
        },
    };

    const renderItem = ({item, index}) => {
        return (
            <Animatable.View animation={translateX} duration={1300} delay={8000+((DATA.length - index) * 300)}
                             easing={"ease-out-sine"}
                             style={{
                                 marginVertical: 6,
                                 flexDirection: 'row',
                                 width: '100%',
                                 backgroundColor: '#f8f8f8',
                                 borderRadius: 18,
                                 padding: 12
                             }}>


                    <Image source={item.avatar}
                           style={{width: 50, height: 50, borderRadius: 30, marginHorizontal: 4}}/>

                    <View style={{flex: 1}}>

                        <View style={{flex: 1, marginHorizontal: 12}}>
                            <Text style={{
                                color: "#12452c",
                                fontSize: 18
                            }}>{item.name}</Text>

                            <Text style={{
                                marginTop: 3,
                                color: "#6b6b6b",
                                fontSize: 14
                            }}>{item.age} yo • {item.somethings} • {item.meds}</Text>

                            <Text style={{
                                marginTop: 52,
                                color: "#12452c",
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>{item.time}</Text>
                        </View>

                    </View>

                    <Icon name={item.check ? "checkbox-marked" : "checkbox-blank-outline"}
                          style={{color: "#178550", fontSize: 30}}/>

            </Animatable.View>
        )
    }

    return (
        <View style={{flex: 1, width: '100%'}}>
            <Animatable.Text style={{
                marginHorizontal: 20,
                marginTop: 32,
                marginBottom: 12,
                color: "#12452c",
                fontWeight: '600',
                fontSize: 20
            }}
                             animation={translateTitle} delay={9800}
                             duration={1500}>Upcoming Sessions</Animatable.Text>

            <FlatList data={DATA}
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 110}}
                      renderItem={renderItem}/>
        </View>
    )

}

export default ListSession;
