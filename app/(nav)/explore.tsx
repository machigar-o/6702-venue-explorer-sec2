import { StyleSheet, Image, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAppContext } from './_layout';
import { ScrollView } from 'react-native';

export default function TabTwoScreen() {
  const {selectedVenue, setSelectedVenue} = useAppContext()

  return (
    <ScrollView style={{marginTop:25}}>
      <ThemedView>
        <ThemedText>Selected Venue is: {selectedVenue}</ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
