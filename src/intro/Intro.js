import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
// import { createNativeWrapper } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import Onboarding from 'react-native-onboarding-swiper';
import {Styles} from './Styleintro';
import {TouchableOpacity} from 'react-native-gesture-handler';

const skip = ({...props}) => (
  <TouchableOpacity>
    <Text style={Styles.txtskip} {...props}>
      SKIP
    </Text>
  </TouchableOpacity>
);
const next = ({...props}) => (
  <TouchableOpacity>
    <Text style={Styles.txtnext} {...props}>
      NEXT
    </Text>
  </TouchableOpacity>
);
const done = ({...props}) => (
  <TouchableOpacity>
    <Text style={Styles.txtdone} {...props}>
      DONE
    </Text>
  </TouchableOpacity>
);

const Intro = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={skip}
      NextButtonComponent={next}
      DoneButtonComponent={done}
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#a8d0da',
          image: (
            <LottieView
              source={require('../assets/31619-prevent-epidemic-rebound.json')}
              autoPlay={true}
              style={Styles.imgcorona}
            />
          ),
          title: <Text style={Styles.txttittle}>stay healthy</Text>,
          subtitle: (
            <Text style={Styles.txtsub}>
              Keep yourself safe from the dangers of{'\n'} the covid-19 virus
            </Text>
          ),
        },
        {
          backgroundColor: '#a8d0da',
          image: (
            <LottieView
              source={require('../assets/36098-courier.json')}
              autoPlay={true}
              style={Styles.imgcorona}
            />
          ),
          title: <Text style={Styles.txttittle}>Delivery</Text>,
          subtitle: (
            <Text style={Styles.txtsub}>Deliveries are safe and fast</Text>
          ),
        },
        {
          backgroundColor: '#a8d0da',
          image: (
            <LottieView
              source={require('../assets/31740-privacy.json')}
              autoPlay={true}
              style={Styles.imgcorona}
            />
          ),
          title: <Text style={Styles.tittletrue}>Trust</Text>,
          subtitle: (
            <Text style={Styles.txtsub}>
              Safe and reliable, has been proven{'\n'} by people all over the
              world
            </Text>
          ),
          subtitle2: (
            <Text>
              Safe and reliable, has been proven by people all over the world
            </Text>
          ),
        },
      ]}
    />
  );
};

export default Intro;
