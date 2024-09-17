import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Meals in Category ${categoryId}`,
    });
  }, [navigation, categoryId]);

  return (
    <View style={styles.screen}>
      <Text>Meals for Category ID: {categoryId}</Text>
      <Button title="Mark as Favorite" onPress={() => alert('Marked as favorite!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsScreen;
