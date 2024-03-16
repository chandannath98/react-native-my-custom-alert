import React, {createContext, useState, useContext} from 'react';
import {Modal, Pressable, View,TouchableOpacity,Text,StyleSheet, StyleProp, TextStyle, ImageStyle} from 'react-native';
import ConfirmationAlert from './src/Alerts/ConfirmationAlert';
import SuccessAlert from './src/Alerts/SuccessAlert';



// **********************
// confirmation modal props****************
// **********************

type openConfirmationModalProps = {
  
  title?: string;
  subtitle?: any;
  okBtnAction?: () => void;
  canCloseOnClickOutside?: boolean;
  closeFunction?: () => void;
  color?: string;
  titleStyle?:StyleProp<TextStyle>
  subtitleStyle?:StyleProp<TextStyle>
};



//*******************************
// Success modal props****************
// **********************

type openSuccessModalProps = {
  heading: string;
  titleText?: string;
  okBtnAction?: ()=>void;
  closeFunction?: ()=>()=>{};
  children?: JSX.Element;
  canCloseOnClickOutside?: boolean;
  headingStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  imageStyle?:StyleProp<ImageStyle>
};


//*******************************
// Default values of createContext
//*******************************



const defaultValues = {
  openConfirmationModal: ({
    title,
    subtitle,
    closeFunction,
    canCloseOnClickOutside,
    color,
    titleStyle,
    subtitleStyle


  }: openConfirmationModalProps) => {},
  closeConfirmationModal: () => {},


 


  openSuccessModal: ({
    heading,
    titleText,
   
    okBtnAction,
    children,
    closeFunction,
    headingStyle,
    titleStyle,
    imageStyle
  }: openSuccessModalProps) => {},
  closeSuccessModal: () => {},

  
};

//*******************************
// Context for Modal
//*******************************

const AlertContext = createContext(defaultValues);

type modalProps = {children: any,
  
  
  confirmationAlertConfiguration?:{
    color?:string,
    titleStyle?:StyleProp<TextStyle>,
    subtitleStyle?:StyleProp<TextStyle>
  },
  successAlertConfiguration?:{
    headingStyle?: StyleProp<TextStyle>;
    titleStyle?: StyleProp<TextStyle>;
    imageStyle?:StyleProp<ImageStyle>
  
  }


};

//*******************************
//*******************************
// Main Modal component
//*******************************
//*******************************
 const AlertProvider = ({children,confirmationAlertConfiguration: confirmationAlertConfiguration,successAlertConfiguration: successAlertConfiguration}: modalProps) => {
  //*******************************
  // Confirmation Modal State
  //*******************************

  const [confirmationModalStates, setConfirmationModalStates] = useState<{
    modalVisible: boolean,
    title: string,
    subtitle: string,
    okBtnAction: () => void,
    closeFunction: () => void,
    canCloseOnClickOutside:boolean,
    color:string,
    titleStyle:StyleProp<TextStyle>,
    subtitleStyle:StyleProp<TextStyle>
  }>({
    modalVisible: false,
    title: '',
    subtitle: '',
    okBtnAction: () => {
      console.log('first');
    },
    closeFunction: () => () => {},
    canCloseOnClickOutside:false,
    color:confirmationAlertConfiguration?.color || "#2196F3",
    titleStyle:confirmationAlertConfiguration?.titleStyle ||{},
    subtitleStyle:confirmationAlertConfiguration?.subtitleStyle ||{}
  });

  //*******************************
  // Success Modal State
  //*******************************

  const [successModalStates, setSuccessModalStates] = useState<{
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
  
  }>({
    modalVisible: false,
    heading: '',
    titleText: '',
    children: <></>,
    okBtnAction: () => {
      console.log('first');
    },
    closeFunction: () => () => {},
    headingStyle:successAlertConfiguration?.headingStyle ||{},
    titleStyle:successAlertConfiguration?.titleStyle ||{},
    imageStyle:successAlertConfiguration?.imageStyle||{},
    canCloseOnClickOutside:true
    
  });





  //*******************************
  // Function For Close Confirmation Modal
  //*******************************



  const closeConfirmationModal = () => {
    setConfirmationModalStates({
      modalVisible: false,
    title: '',
    subtitle: '',
    okBtnAction: () => {
      console.log('first');
    },
    closeFunction: () => () => {},
    canCloseOnClickOutside:false,
    color:confirmationAlertConfiguration?.color || "#2196F3",
    titleStyle:confirmationAlertConfiguration?.titleStyle ||{},
    subtitleStyle:confirmationAlertConfiguration?.subtitleStyle ||{}
    });
  };



  //**********************************************
  //*******Function For Close Success Modal*******
  //**********************************************


  const closeSuccessModal = () => {
    console.log("first")
    setSuccessModalStates({...{
      modalVisible: false,
      heading: '',
      titleText: '',
      children: <></>,
      okBtnAction: () => {
        console.log('first');
      },
      closeFunction: () => () => {},
      headingStyle:successAlertConfiguration?.headingStyle ||{},
    titleStyle:successAlertConfiguration?.titleStyle ||{},
    imageStyle:successAlertConfiguration?.imageStyle||{},
      canCloseOnClickOutside:false
    }});
  };

  //*******************************
  // Function For Open Confirmation Modal
  //*******************************

  const openConfirmationModal = ({
    title,
    subtitle,
    okBtnAction,
    closeFunction,
    canCloseOnClickOutside,
    color,
    titleStyle,
    subtitleStyle,
    

  }: openConfirmationModalProps) => {





    const onOKBtnPress = () => {
      closeConfirmationModal();

      if (okBtnAction) {
        okBtnAction();
      }
    };

    setConfirmationModalStates({
      title: title as string,
      modalVisible: true,

      subtitle: subtitle,
      okBtnAction: onOKBtnPress ,
      closeFunction: ()=> {
        console.log(!!closeFunction)
      if(closeFunction){
        
        closeFunction()
      }
        closeConfirmationModal()
      
      } ,
      canCloseOnClickOutside: !!canCloseOnClickOutside,
      color:color || confirmationAlertConfiguration?.color || "#2196F3",
      titleStyle:titleStyle || confirmationAlertConfiguration?.titleStyle || {},
      subtitleStyle:subtitleStyle || confirmationAlertConfiguration?.subtitleStyle || {}
    });
  };
  //*****************************************
  //*****Function For Open Success Modal*****
  //*****************************************

  const openSuccessModal = ({
    heading,
    titleText,
    okBtnAction,
    closeFunction,
    children,
    headingStyle,
    titleStyle,
    canCloseOnClickOutside,
    imageStyle
  }: openSuccessModalProps) => {
    const onOKBtnPress = () => {
      closeSuccessModal();

      if (okBtnAction) {
        okBtnAction();
      }
    };

    setSuccessModalStates({
      modalVisible: true,
      heading: heading,
      titleText: titleText,
      children:children,
      okBtnAction: onOKBtnPress,
      closeFunction: closeFunction || closeSuccessModal,
      headingStyle :headingStyle || successAlertConfiguration?.headingStyle || {},
      titleStyle: titleStyle || successAlertConfiguration?.titleStyle || {},
      imageStyle:imageStyle|| successAlertConfiguration?.imageStyle || {},
      canCloseOnClickOutside: canCloseOnClickOutside|| true

    });
  };

  //*******************************************************************************
  //******************************* Return Statement*******************************
  //*******************************************************************************

  return (
    <AlertContext.Provider
      value={{
        openConfirmationModal,
        closeConfirmationModal,
        openSuccessModal,
        closeSuccessModal,
      }}>
      {children}

      <ConfirmationAlert {...confirmationModalStates} />
      <SuccessAlert {...successModalStates}  />
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
export const ConfirmationAlertBox = ConfirmationAlert;
export const SuccessAlertBox = SuccessAlert;
export default AlertProvider;

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
    gap: 12,
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
    height: 42,
    width: '48%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    alignItems: 'center',
  },
  buttonNO: {
    backgroundColor: '#000000',
    height: 42,
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

  outerView: {
    flex: 1,
    justifyContent: 'flex-end',
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
    paddingBottom: 25,
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
    fontSize: 16,
    textAlign: 'center',
  },
  bottomViewButton: {
    // width: '78%',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: "blue",
    textAlign: 'center',
    paddingHorizontal:10,
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
    color: "blue",
  },
});
