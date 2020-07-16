import React from "react";
import { Alert } from "react-native";
import RNShake from 'react-native-shake';
import Loading from "./Loading";
import Delicious from "./Delicious";

export default class App extends React.Component {
  state = {
    isLoading: true,
    deliData: {}
  };
  getRndDeli = async () => {
    
    const deliList = require('./deliList.json');
    const deliLength = deliList.length;
    const rndDeli = Math.floor(Math.random() * deliLength);
    this.setState({
      isLoading: false,
      deliData: deliList[rndDeli]
    });
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getRndDeli();
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  
  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      this.getRndDeli();
    });
  }

  componentDidMount() {
    //this.getLocation();
    this.getRndDeli();
  }

  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }

  render() {
    const { isLoading, deliData } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Delicious data={deliData} />
    );
  }
}
