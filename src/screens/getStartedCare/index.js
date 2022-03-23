import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from "../../utils";
import {handLeftImage, handRightImage} from "../../assets";
import * as Animatable from 'react-native-animatable';
import LineWave from "./lineWave";

const GetStartedCare = ({navigation}) => {

    return (
        <View style={{flex: 1, backgroundColor: COLOR.color_1}}>

            <View style={{flexDirection: 'row', marginTop: 220}}>
                <Animatable.Image animation={"slideInLeft"} duration={1500} source={handLeftImage}
                                  easing={"ease-in-out"}
                                  style={{width: '50%', height: 200, tintColor: COLOR.color_6}}/>
                <Animatable.Image animation={"slideInRight"} duration={1500} source={handRightImage}
                                  easing={"ease-in-out"}
                                  style={{width: '50%', height: 200, tintColor: COLOR.color_6}}/>
            </View>

            <View style={{alignItems: 'center', marginTop: 80}}>
                <Animatable.Text animation={"fadeInUp"} delay={500} duration={1500}
                                 style={{fontWeight: "600", color: COLOR.color_2, fontSize: 34}}>Therapy &
                    Care</Animatable.Text>
                <Animatable.Text animation={"fadeInUp"} delay={800} duration={1500} style={{
                    marginTop: 24,
                    color: COLOR.color_2,
                    fontSize: 15
                }}>{"We help proffesional therapists\nand patients find each other"}</Animatable.Text>
                <TouchableOpacity onPress={() => navigation.navigate("HomeCare")} style={{
                    marginTop: 40,
                    backgroundColor: COLOR.color_2,
                    borderRadius: 50,
                    paddingHorizontal: 40,
                    paddingVertical: 14
                }}>
                    <Text style={{fontWeight: "600", color: COLOR.color_1, fontSize: 16}}>Get started</Text>
                </TouchableOpacity>
            </View>

            <View style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0}}>
                <LineWave style={{transform: [{translateY: -240}]}}
                          a1={43} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{transform: [{translateY: -215}]}}
                          a1={40} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{transform: [{translateY: -160}]}}
                          a1={43} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{transform: [{translateY: -120}]}}
                          a1={10} a2={37} b1={37} b2={5} c1={165} c2={133} d1={108} d2={133}/>
                <LineWave style={{transform: [{translateY: -75}]}}
                          a1={43} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{transform: [{translateY: -10}]}}
                          a1={63} a2={87} b1={50} b2={20} c1={180} c2={140} d1={80} d2={150}/>
                <LineWave style={{transform: [{translateY: 40}]}}
                          a1={47} a2={79} b1={67} b2={31} c1={159} c2={100} d1={60} d2={110}/>

                <LineWave style={{bottom: 0, transform: [{translateY: 260}]}}
                          a1={43} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{bottom: 0, transform: [{translateY: 220}]}}
                          a1={10} a2={37} b1={37} b2={5} c1={165} c2={133} d1={108} d2={133}/>
                <LineWave style={{bottom: 0, transform: [{translateY: 175}]}}
                          a1={43} a2={67} b1={67} b2={35} c1={145} c2={113} d1={78} d2={103}/>
                <LineWave style={{bottom: 0, transform: [{translateY: 140}]}}
                          a1={63} a2={87} b1={50} b2={20} c1={180} c2={140} d1={80} d2={150}/>
                <LineWave style={{bottom: 0, transform: [{translateY: 80}]}}
                          a1={47} a2={79} b1={67} b2={31} c1={159} c2={100} d1={60} d2={110}/>
            </View>

        </View>
    );
}

export default GetStartedCare;
