import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, SafeAreaView, Dimensions } from "react-native";
import NaverMapView, { Circle, Marker, Path, Polyline, Polygon } from "react-native-nmap";

export default class Delicious extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.Global}>
        <StatusBar barStyle="light-content" />
        <View style={styles.Header}>
          <Image
            style={styles.Background}
            source={{ uri: this.props.data.image }} />
          <View style={styles.Container}>

            <Image
              style={styles.Poster}
              source={{ uri: this.props.data.image }} />
            <View style={styles.Info}>
              <Text style={styles.Title}>{this.props.data.name}</Text>
              <Text style={styles.Score}>⭐️ {this.props.data.score ? this.props.data.score : null} / 100</Text>
            </View>
          </View>
        </View>
        <View style={styles.Data}>
          <Text style={styles.DataValue}>테마: {this.props.data.category}</Text>
          <Text style={styles.DataValue}>{this.props.data.address}</Text>
          <NaverMapView style={styles.NaverMap}
            showsMyLocationButton={true}
            center={{ latitude: +this.props.data.lat, longitude: +this.props.data.lng, zoom: 16 }}>
            <Marker coordinate={{ latitude: +this.props.data.lat, longitude: +this.props.data.lng }} />
          </NaverMapView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Global: {
    flex: 1,
    backgroundColor: 'black'
  },
  Header: {
    height: Dimensions.get("window").height / 6,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 30
  },
  Background: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
    position: 'absolute'
  },
  Poster: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  Info: {
    width: '60%',
    marginLeft: 40
  },
  Title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 36,
    marginBottom: 10
  },
  Score: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },
  Data: {
    top: 30,
    padding: 10
  },
  DataValue: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18
  },
  NaverMap: {
    width: '100%',
    height: Dimensions.get('window').height * 0.65,
    marginTop: 10,
    marginBottom: 10
  }
});
