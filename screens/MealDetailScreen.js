import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const MealDetailScreen = ({ route }) => {
  const { meal } = route.params;

  const ingredients = meal.ingredients || [];
  const steps = meal.steps || [];

  return (
    <ScrollView>
      <Image source={meal.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.price}>{meal.price} VNĐ</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giới thiệu</Text>
        <Text style={styles.ingredient}>{meal.detail}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ingredient: {
    fontSize: 16,
    color: '#333',
  },
  step: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
});

export default MealDetailScreen;