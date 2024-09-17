import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CATEGORIES = [
  { id: '1', title: 'Pizza hải sản', image: require('../assets/anh2.jpg'), price:200000, detail: "Pizza Hải sản là món ăn hấp dẫn với lớp vỏ bánh giòn, nhân hải sản tươi ngon như tôm, mực và sò, thường được kết hợp với phô mai mozzarella và sốt cà chua. Món này không chỉ ngon mà còn bổ dưỡng, cung cấp protein và omega-3, thích hợp cho các bữa tiệc hay họp mặt gia đình." },
  { id: '2', title: 'Mỳ cay', image: require('../assets/mycay.jpg'), price:50000, detail:"Mỳ cay 7 cấp độ là món ăn Hàn Quốc nổi tiếng với nước dùng cay nồng và hương vị đậm đà. Mỗi cấp độ từ 1 đến 7 mang đến mức độ cay khác nhau, từ nhẹ đến cực kỳ cay. Món này thường được ăn kèm với kim chi, tạo nên trải nghiệm ẩm thực thú vị cho những tín đồ yêu thích sự cay nóng." },
  { id: '3', title: 'Bún riêu', image: require('../assets/bunrieu.jpg'), price:30000, detail: "Bún riêu là món ăn truyền thống của Việt Nam, nổi bật với nước dùng thơm ngon từ cua đồng, kết hợp với cà chua và gia vị. Món bún này thường được ăn kèm với rau sống, hành phi và những miếng đậu phụ chiên giòn. Nước dùng có vị chua nhẹ, tạo cảm giác thanh mát. Bún riêu không chỉ ngon mà còn mang đậm hương vị văn hóa ẩm thực Việt." },
  { id: '4', title: 'Phở bò', image: require('../assets/phobo.jpg'),price:300000 ,detail:"Phở bò là món ăn đặc trưng của Việt Nam, nổi tiếng với nước dùng thơm ngon được ninh từ xương bò và các gia vị như quế, hồi. Bánh phở mềm mịn được kết hợp với thịt bò tái hoặc chín, cùng với hành lá, giá đỗ và rau thơm. Nước dùng trong, thanh ngọt, thường được ăn kèm với chanh, ớt và tương đen. Phở bò không chỉ là món ăn mà còn là biểu tượng văn hóa ẩm thực Việt Nam."},
  { id: '5', title: '7up', image: require('../assets/7up.jpg'), price:10000 ,detail:"Nước ngọt"},
  { id: '6', title: 'Sting', image: require('../assets/sting.jpg'),price:10000 ,detail:"Nước ngọt"}, 
];

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity 
        style={styles.gridItem} 
        onPress={() => navigation.navigate('MealDetail', { 
          meal: {
            id: itemData.item.id,
            title: itemData.item.title,
            image: itemData.item.image,
            price: itemData.item.price,
            detail: itemData.item.detail
          }
        })}
        accessible={true}
        accessibilityLabel={itemData.item.title}
      >
        <View>
          <Image source={itemData.item.image} style={styles.image} />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList 
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#ccc',
  },
  image: {
    width: '100%',
    height: '72%',
    borderRadius: 10, // Added rounding to the image for consistency
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CategoriesScreen;