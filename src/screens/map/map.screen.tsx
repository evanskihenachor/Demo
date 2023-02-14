import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {styles} from '../../shared/styles';
import {Address} from '../../models/address.type';
import {SafeAreaView} from 'react-native';
import {BackHeaderButton} from '../../shared/headers';
import {Box} from 'native-base';

export const MapScreen = (props: any) => {
  const [address] = useState<Address>(props.route.params.address);

  return (
    <>
      <SafeAreaView style={{position: 'absolute', zIndex: 1}}>
        <Box paddingLeft={3}>{BackHeaderButton()}</Box>
      </SafeAreaView>
      <MapView
        style={styles.map}
        region={{
          latitude: parseFloat(address.geo?.lat),
          longitude: parseFloat(address.geo?.lng),
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          key={1}
          coordinate={{
            latitude: parseFloat(address.geo?.lat),
            longitude: parseFloat(address.geo?.lng),
          }}
          title={address.street}
          //description={marker.description}
        />
      </MapView>
    </>
  );
};
