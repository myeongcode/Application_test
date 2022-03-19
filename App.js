import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';


const {width: SCREEN_WIDTH} = Dimensions.get("window");

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>NORAJORA</Text>
      </View>

      <ScrollView
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.center}
      >
        <View style={styles.centerForm}>
          <Text>매칭화면</Text>
        </View>
        <View style={styles.centerForm}>
          <Text>게시물화면</Text>
        </View>
        <View style={styles.centerForm}>
          <Text>홈화면</Text>
        </View>
        <View style={styles.centerForm}>
          <Text>채팅화면</Text>
        </View>
        <View style={styles.centerForm}>
          <Text>마이페이지</Text>
        </View>
      </ScrollView>
      

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => {
          console.log("1번째 버튼 클릭");
        }}>
          <Text>안녕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    height: 90,
    backgroundColor: "#FB9393",
    justifyContent: "flex-end",
  },
  topTitle: {
    fontSize: 30,
    color: "white",
    margin: 10,
    fontWeight: "600",
  },
  center: {
    backgroundColor: "white",
  },
  centerForm: {
    flexDirection: "row",
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    height: 80,
    borderTopWidth: 1,
    borderColor: "#dcdcdc",
  },

});

export default App;
