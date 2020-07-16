import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, SafeAreaView, Dimensions } from "react-native";
import NaverMapView, {Circle, Marker, Path, Polyline, Polygon} from "react-native-nmap";

export default class Delicious extends React.Component {
  render() {
    return (
      <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.Header}>
        <View style={styles.Container}>
          <Image
            style={styles.Poster}
            source={{ uri: this.props.data.image }} />
          <View style={styles.Info}>
            <Text style={styles.Title}>{this.props.data.name}</Text>
            <Text style={styles.DataValue}>테마: {this.props.data.category}</Text>
          </View>
        </View>
      </View>
      <View style={styles.Data}>
        <Text style={styles.Score}>⭐️ {this.props.data.score ? this.props.data.score : null} / 100</Text>
        <Text style={styles.DataValue}>{this.props.data.address}</Text>
        <NaverMapView style={styles.NaverMap}
        showsMyLocationButton={true}
        center={{latitude: +this.props.data.lat, longitude: +this.props.data.lng, zoom: 16}}>
        <Marker coordinate={{latitude: +this.props.data.lat, longitude: +this.props.data.lng}}/>
        </NaverMapView>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#999999'
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  Poster: {
    width: 100,
    height: 100
  },
  Info: {
    width: '60%',
    marginLeft: 40
  },
  Title: {
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 10
  },
  Score: {
    fontWeight: '500',
    fontSize: 12
  },
  Data: {
    padding: 10
  },
  DataValue: {
    fontWeight: '500',
  },
  NaverMap: {
    width: '100%',
    height: Dimensions.get('window').height * 0.7
  }
});
