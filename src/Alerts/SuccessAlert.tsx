import {
    
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  ImageStyle
} from 'react-native';
import React, {Children} from 'react';
import { images } from '../../images';

type SuccessProps = {
  modalVisible: boolean;
  heading?: string;
  titleText?: string;
  okBtnAction?: () => void;
  children?: JSX.Element;
  closeFunction?: () => void;
  headingStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  canCloseOnClickOutside?: boolean;
  imageStyle?:StyleProp<ImageStyle>

};

export default function SuccessAlert({
  modalVisible,
  heading,
  titleText,
  okBtnAction,
  closeFunction,
  headingStyle,
  titleStyle,
  children,
  canCloseOnClickOutside,
  imageStyle
}: SuccessProps) {
  return (
    <Modal visible={!!modalVisible} animationType="fade" transparent={true}>
      <Pressable onPress={()=>canCloseOnClickOutside ?closeFunction?closeFunction():{}:{}} style={styles.outerView}>
        <Pressable style={styles.innerView}>
          {/* close modal button */}
          <View style={styles.closeModalView}>
            <TouchableOpacity
              style={styles.closeModalInnerRightView}
              onPress={closeFunction}>
              {/* <Ionicons
              name="close-outline"
              size={scale(20)}
              color={COLORS.defaultTextColor}
            /> */}
            </TouchableOpacity>
          </View>

          <Text style={[styles.HeadingTop, headingStyle]}>
            {heading || 'Congratulation'}
          </Text>
          {children}

          {/* image view*/}
          <View style={[styles.imageOuterView,imageStyle]}>
            <Image
            source={images.success}
            style={{
              height: 200,
              transform:[{scale:1}]
            
            }}
            resizeMode='contain'
          />
          </View>

          {/* bottom heading and button View */}
          <View style={styles.bottomView}>
            <Text style={[styles.bottomViewHeading, titleStyle]}>
              {titleText}
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(127, 127, 127, 0.7)',
    alignItems: 'center',
    paddingBottom: 10,
    // zIndex:100
  },
  innerView: {
    backgroundColor: '#FFFFFF',
    width: '78%',
    borderRadius: 15,
    padding: 16,
    // paddingBottom: 25,
    gap: 3,
    alignItems: 'center',
  },

  closeModalView: {
    // borderWidth: 1,
    width: '100%',
  },
  closeModalInnerRightView: {
    backgroundColor: '#F4F4F4',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 4,
  },

  HeadingTop: {
    fontSize: 16,
    textAlign: 'center',
  },

  imageOuterView: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  // bottom
  bottomView: {
    // borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  bottomViewHeading: {
    fontSize: 25,
    textAlign: 'center',
    color:"black"
  },
  bottomViewButton: {
    // width: '78%',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'blue',
    textAlign: 'center',
    paddingHorizontal: 10,
    // zIndex:500
  },
  bottomViewButtonText: {
    color: '#FFFFFF',
  },
  bottomViewLowerView: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },

  highlightedText: {
    color: 'blue',
  },
});
