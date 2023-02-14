import React from 'react';
import {Header, Icon} from '@rneui/themed';
import {Box, Pressable} from 'native-base';
import {AppText, FontWeight, TextSize} from './text';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const BackHeaderButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      height={10}
      width={10}
      borderRadius={14}
      alignItems="center"
      justifyContent="center"
      backgroundColor="#fff"
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon
        name={
          Platform.OS === 'ios'
            ? 'ios-chevron-back-outline'
            : 'md-chevron-back-outline'
        }
        type="ionicon"
        size={25}
        color="black"
        //tvParallaxProperties={undefined}
      />
    </Pressable>
  );
};
export const RootHeader = ({
  title,
  showBackButton,
}: {
  title: string;
  showBackButton: boolean;
}) => {
  return (
    <Header
      containerStyle={{borderBottomWidth: 0, alignItems: 'center'}}
      backgroundColor={'transparent'}
      centerComponent={
        <Box>
          <AppText
            size={TextSize.Heading2}
            weight={FontWeight.SemiBold}
            color="black">
            {title}
          </AppText>
        </Box>
      }
      leftComponent={showBackButton ? BackHeaderButton() : null}
    />
  );
};
