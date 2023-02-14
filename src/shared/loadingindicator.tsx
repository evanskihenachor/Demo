import React from 'react';
import {Platform} from 'react-native';
import {MaterialIndicator, UIActivityIndicator} from 'react-native-indicators';
import {Box} from 'native-base';

export const LoadingComponent = () => {
  return (
    <>
      <Box alignItems="center" justifyContent="center" flex={1}>
        {Platform.OS === 'ios' ? (
          <UIActivityIndicator size={25} />
        ) : (
          <MaterialIndicator size={25} />
        )}
      </Box>
    </>
  );
};
