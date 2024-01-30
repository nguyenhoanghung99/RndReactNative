import {AppButton, AppSafeAreaView, AppText, AppView} from '@/components';
import {Appearance} from 'react-native';
import React, { useState } from 'react';

export default function RnDScreen() {
  const colorScheme = Appearance.getColorScheme();
  const [width, setWidth] = useState<string>('0%')
  return (
    <AppSafeAreaView backgroundColor="bgBlack" flex={1}>
      <AppText variant="heading1" color="black">
        {colorScheme}
      </AppText>
      <AppView width={`${width || '0%'}` as any} height={2} backgroundColor="red" />
      <AppButton onPress={() => setWidth('25%')}>
        <AppText variant="heading1" color="black">Test</AppText>
      </AppButton>
    </AppSafeAreaView>
  );
}
