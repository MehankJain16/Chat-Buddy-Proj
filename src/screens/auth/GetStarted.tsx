import React, { createRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  FlatList,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import Animated from "react-native-reanimated";
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  DEFAULT_INDICATOR_COLOR,
} from "../../helpers/Constants";
import { ScheduleSvg } from "../../helpers/Schedule_SVG's/ScheduleSvg";
import { ScheduleBg } from "../../helpers/Schedule_SVG's/ScheduleBg";
import { VideocallBg } from "../../helpers/Videocall_SVG's/VideocallBg";
import { VideocallSvg } from "../../helpers/Videocall_SVG's/VideocallSvg";
import { SendmediaBg } from "../../helpers/Sendmedia_SVG's/SendmediaBg";
import { SendmediaSvg } from "../../helpers/Sendmedia_SVG's/SendmediaSvg";
import { CustomButton } from "../../components/CustomButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

const data = [
  {
    key: "0",
    imageSource: require("../../../assets/schedule_bg.png"),
    svg: <ScheduleSvg />,
    backgroundSvg: <ScheduleBg />,
    text: `"Now You Can Never\nMiss Your Loved\nOnes Special Days"`,
    textColor: "#B07A6A",
    indicatorColor: "#E58571",
  },
  {
    key: "1",
    imageSource: require("../../../assets/videocall_bg.png"),
    svg: <VideocallSvg />,
    backgroundSvg: <VideocallBg />,
    text: `"Never Miss Any\nMoments Even If You\nAre Far Away"`,
    textColor: "#6B9890",
    indicatorColor: "#02D2B1",
  },
  {
    key: "2",
    imageSource: require("../../../assets/sendmedia_bg.png"),
    svg: <SendmediaSvg />,
    backgroundSvg: <SendmediaBg />,
    text: `"Don't Just Send\nOld And Boring Text\nMessages"`,
    textColor: "#B18AB7",
    indicatorColor: "#D492DF",
  },
];

const GetStarted = () => {
  const listRef = createRef<FlatList<any>>();

  const skipPressHandler = () => {
    listRef.current?.scrollToEnd({
      animated: true,
    });
  };

  const continuePressHandler = ({ index }: { index: number }) => {
    listRef.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const renderSliderItem = ({
    imageSource,
    svg,
    backgroundSvg,
    key,
    text,
    textColor,
    indicatorColor,
  }: {
    imageSource: ImageSourcePropType;
    svg: React.ReactNode;
    backgroundSvg: React.ReactNode;
    key: string;
    text: string;
    textColor: string;
    indicatorColor: string;
  }) => {
    return (
      <ImageBackground key={key} source={imageSource} style={styles.image}>
        {backgroundSvg}
        <View
          style={{
            position: "absolute",
            top: 24,
            left: 46,
            right: 46,
            width: SCREEN_WIDTH - 48,
            height: SCREEN_HEIGHT / 2.4,
            justifyContent: "center",
            paddingTop: 15,
          }}
        >
          {svg}
        </View>
        <View
          style={{
            borderRadius: 15,
            height: SCREEN_HEIGHT / 2.02,
            flex: 1,
            position: "absolute",
            backgroundColor: "#FFFFFF",
            bottom: 12,
            left: 12,
            right: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              position: "absolute",
              top: (SCREEN_HEIGHT / 2.1) * (1 / 12),
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: `${
                  key === "0" ? indicatorColor : DEFAULT_INDICATOR_COLOR
                }`,
                fontSize: 20,
                paddingHorizontal: 4,
              }}
            >
              ⬤
            </Text>
            <Text
              style={{
                color: `${
                  key === "1" ? indicatorColor : DEFAULT_INDICATOR_COLOR
                }`,
                fontSize: 20,
                paddingHorizontal: 4,
              }}
            >
              ⬤
            </Text>
            <Text
              style={{
                color: `${
                  key === "2" ? indicatorColor : DEFAULT_INDICATOR_COLOR
                }`,
                fontSize: 20,
                paddingHorizontal: 4,
              }}
            >
              ⬤
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              textAlign: "center",
              fontSize: SCREEN_HEIGHT / 28,
              paddingTop: (SCREEN_HEIGHT / 2.1) * (1 / 5.4),
              color: textColor,
            }}
          >
            {text}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Number(key) !== 2 && (
              <View>
                <CustomButton
                  text="Continue"
                  bgColor={indicatorColor}
                  borderRadius={40}
                  width={SCREEN_WIDTH / (1 * 2.3)}
                  verticalPadding={12}
                  textSize={16}
                  onPress={() => {
                    if (Number(key) !== 2) {
                      continuePressHandler({ index: Number(key) + 1 });
                    }
                  }}
                />
                <CustomButton
                  text="Skip"
                  type="transparent"
                  textSize={20}
                  textColor={textColor}
                  onPress={skipPressHandler}
                />
              </View>
            )}
            {Number(key) === 2 && (
              <Animated.View>
                <CustomButton
                  text="Get Started"
                  bgColor={indicatorColor}
                  borderRadius={40}
                  width={SCREEN_WIDTH / (1 * 2.3)}
                  verticalPadding={12}
                  textSize={16}
                  onPress={() => {
                    console.log("Get Started");
                  }}
                />
              </Animated.View>
            )}
          </View>
        </View>
      </ImageBackground>
    );
  };

  // const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
  //   console.log(event.nativeEvent.contentOffset.x);
  //   listRef.current?.state
  // };

  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={data}
        renderItem={({ item }) => {
          return renderSliderItem(item);
        }}
        horizontal
        pagingEnabled
        // onScroll={(e) => {e.nativeEvent.contentOffset === 600}}
        keyExtractor={(item: any) => item.key}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GetStarted;
