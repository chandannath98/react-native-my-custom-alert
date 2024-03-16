import {Image, Modal, Pressable, StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {images} from '../../images';

type ConfirmationAlertProps = {
  modalVisible: boolean;
  title: string;
  Subtitle?: any;
  okBtnAction?: () => void;
  canCloseOnClickOutside?: boolean;
  closeFunction?: () => void;
  color?: string;
  titleStyle?:StyleProp<TextStyle>
  subtitleStyle?:StyleProp<TextStyle>

};



export default function ConfirmationAlert({
  modalVisible,
  title,
  Subtitle,
  canCloseOnClickOutside,
  okBtnAction,
  closeFunction,
  color = '#2196F3',
  titleStyle,
  subtitleStyle
}: ConfirmationAlertProps) {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={canCloseOnClickOutside ? closeFunction : () => {}}
        style={styles.centeredView}>
        <Pressable style={styles.modalView}>
          <Image source={images.info} style={{height: 55, aspectRatio: 1}} />

          <View style={{gap: 3}}>
            <Text style={[styles.modalText,titleStyle]}>{title}</Text>
            {Subtitle && (
              <Text
                style={[{
                  fontSize: 14,
                  color: color,
                },subtitleStyle]}>
                {Subtitle}
              </Text>
            )}
          </View>

          <View style={{flexDirection: 'row', gap: 10}}>
            <Pressable
              android_ripple={{color: 'white'}}
              style={[
                styles.button,
                styles.buttonyes,
                {backgroundColor: color},
              ]}
              onPress={() => {
                if (okBtnAction) {
                  okBtnAction();
                  return;
                }
                // selected("Yes")
              }}>
                <Image style={{width:'13%',aspectRatio:1}} source={images.check} />
              {/* <AntDesign name="check" size={20} color="#ffffff" /> */}
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
            <Pressable
              onPress={closeFunction}
              android_ripple={{color: 'white'}}
              style={[styles.button, styles.buttonNO]}>
                <Image style={{width:'13%',aspectRatio:1}} source={images.close} />

              {/* <AntDesign name="close" size={scale(20)} color="#ffffff" /> */}
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(127, 127, 127, 0.7)',
    paddingHorizontal: 30,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 13,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // flexDirection:'row',
    gap: 15,

    // zIndex: 5,
  },
  button: {
    borderRadius: 20,

    elevation: 2,
    // borderWidth:1
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonyes: {
    backgroundColor: '#2196F3',
    height: 48,
    width: '48%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
  },
  buttonNO: {
    backgroundColor: '#000000',
    height: 48,
    width: '48%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    alignItems: 'center',
  },

  textStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    fontSize: 16,
    color: '#000000',
  },
});
