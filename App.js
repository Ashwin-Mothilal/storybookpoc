import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Avatar from './scripts/components/Avatar';
import Button from './scripts/components/Button';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            minHeight: '100%',
          }}>
          <Button />
          <Avatar />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
