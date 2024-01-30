import React from 'react';
import {ActivityIndicator, StatusBar, useColorScheme} from 'react-native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@shopify/restyle';
import {AppModalGoSetting} from '@/components/AppModal';
import {Routes} from '@/navigator/Routes';
import {AppStackParamList} from '@/navigator/types';
import * as Screens from '@/screens';
import {useModalStore} from '@/stores';
import {theme, width} from '@/themes';
import {navigationRef} from './NavigationService';
import {useLocale} from '@/hooks';
import {AppView} from '@/components';

const Stack = createNativeStackNavigator<AppStackParamList>();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.HomePage}>
        <Stack.Screen name={Routes.HomePage} component={Screens.RnDScreen} />
    </Stack.Navigator>
  );
};
function AppNavigation() {
  const isDark = useColorScheme() === 'dark';
  const {isShowGoSetting} = useModalStore();
  const {isLoading} = useLocale();
  return (
    <ThemeProvider theme={theme}>
      {isLoading ? (
        <AppView flex={1} alignItems="center" justifyContent="center">
          <ActivityIndicator color={'#000000'} />
        </AppView>
      ) : (
        <BottomSheetModalProvider>
          <StatusBar
            barStyle={isDark ? 'light-content' : 'dark-content'}
            animated
            backgroundColor={isDark ? '#000000' : '#FFFFFF'}
            translucent
          />
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {}}
            onStateChange={() => {}}>
            {isShowGoSetting && <AppModalGoSetting />}
            <Drawer.Navigator
              // drawerContent={props => <Screens.Setting {...props} />}
              screenOptions={{
                headerShown: false,
                drawerPosition: 'left',
                drawerStyle: {width: width},
                swipeEnabled: false,
              }}>
              <Drawer.Screen name={'AppStack'} component={AppStack} />
            </Drawer.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      )}
    </ThemeProvider>
  );
}
export default AppNavigation;
