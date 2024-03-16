# react-native-my-custom-alert


Custom React Native Alerts.

![progress-demo](https://i.ibb.co/hYQZfCq/Screenshot-1710574644.png)
![progress-demo](https://i.ibb.co/1GpPdqr/Screenshot-1710574653.png)
![progress-demo](https://i.ibb.co/KDrPyQj/Screenshot-1710574666.png)

## Installation

`$ npm install react-native-my-custom-alert --save`

### React Native Custom Alerts

To use the `Success Alert` you have to add the below line in your android/app/build.gradle.

For react native version>=0.60 :


```js
implementation 'com.facebook.fresco:fresco:2.0.0'
implementation 'com.facebook.fresco:animated-gif:2.0.0'
```

For latest react native version 0.66 :

```js
implementation 'com.facebook.fresco:animated-gif:2.6.0'
```


## Usage

_Note: There are two ways to use the Alerts: `1. Use Alert Components Directly by Importing them 2. Wrap your App.js with AlertProvider and use Alert Box by directly calling the open ALert functions';`._


### 1. Use Alert Components Directly by Importing them


```js
import {ConfirmationAlertBox} from 'react-native-my-custom-alert';

function App() {


  const [confirmationModalVisible, setConfirmationModalVisible] =useState(false);


    const [successAlert, setSuccessAlert] = useState(false)
 

  return (
    <View style={{flex: 1}}>
     
     <ConfirmationAlert
        modalVisible={true} // boolean value to control the visibility of the modal
        title="Confirmation Title" // Title text for the confirmation dialog
        Subtitle="Confirmation Subtitle" // Optional subtitle text for the confirmation dialog
        okBtnAction={() => {}} // Action to perform when the "Yes" button is pressed
        closeFunction={() => {}} // Action to perform when the "No" button is pressed or modal is closed
        canCloseOnClickOutside={true} // Boolean value to enable closing the modal by clicking outside
        color="#2196F3" // Color theme for the buttons
/>

     <SuccessAlert
        modalVisible={true} // boolean value to control the visibility of the modal
        heading="Congratulations" // Optional heading text for the success alert
        titleText="Action completed successfully" // Optional text for the title displayed below the image
        okBtnAction={() => {}} // Optional action to perform when the "OK" button is pressed
        closeFunction={() => {}} // Optional action to perform when the modal is closed
        canCloseOnClickOutside={true} // Boolean value to enable closing the modal by clicking outside
/>

      <Button
        title="Confirmation Alert"
        onPress={() => setConfirmationModalVisible(true)}
      />
      <Button
        title="Success Alert"
        onPress={() => setSuccessAlert(true)}
      />

    </View>
  );
}
```

### Properties for Alerts

### `ConfirmationAlertBox`


| Prop             | Description                                                       | Default  |
| ---------------- | ----------------------------------------------------------------- | -------- |
| **`modalVisible`** | (Required) Boolean value to control the visibility of the modal. | _None_   |
| **`title`**     | (Required) Title text for the confirmation dialog.               | `false`  |
| **`Subtitle`**  | (Optional) subtitle text for the confirmation dialog.              | _None_   |
| **`okBtnAction`** | (Optional) action to perform when the "Yes" button is pressed.     | _None_   |
| **`closeFunction`** | (Optional) action to perform when the "No" button is pressed or modal is closed. | _None_   |
| **`canCloseOnClickOutside`** | (Optional) boolean value to enable closing the modal by clicking outside. | _None_   |
| **`color`**     | (Optional) Color theme for the buttons.                                     | `#2196F3`|
| **`titleStyle`**| (Optional) Custom styles for the title text.                                 | _None_   |
| **`subtitleStyle`** | (Optional) Custom styles for the subtitle text.                             | _None_   |

### `SuccessAlertBox`

All of the props under _Properties_ in addition to the following:

| Prop                      | Description                                                       | Default       |
| -------------------------| ----------------------------------------------------------------- | ------------- |
| **`modalVisible`**          | (Required) Boolean value to control the visibility of the modal. | _None_        |
| **`heading`**            | (Optional) heading text for the success alert.                     | `'Congratulation'` |
| **`titleText`**          | (Optional) text for the title displayed below the image.           | _None_        |
| **`okBtnAction`**        | (Optional) action to perform when the "OK" button is pressed.      | _None_        |
| **`closeFunction`**      | (Optional) action to perform when the modal is closed.             | _None_        |
| **`headingStyle`**       | (Optional) Custom styles for the heading text.                              | _None_        |
| **`titleStyle`**         | (Optional) Custom styles for the title text.                                 | _None_        |
| **`children`**           | (Optional) Additional JSX elements to render inside the success alert.      | _None_        |
| **`canCloseOnClickOutside`** | (Optional) Boolean value to enable closing the modal by clicking outside. | _None_        |
| **`imageStyle`**         | (Optional) Custom styles for the success image. | _None_ 



### 2. Using AlertProvider

Import the AlertProvider component into your React Native file and wrap your application with it as follows:


```js
<AlertProvider>
  {/* Your application components */}
</AlertProvider>

```

### `Example`

Wrap your components with the AlertProvider

```js
import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  
} from 'react-native';
import AlertProvider from 'react-native-my-custom-alert';
import MyComponent from './MyComponent';

function App() {
  
 

  return (
    
    <View style={{flex: 1}}>
        <AlertProvider >
            <MyComponent/>
        </AlertProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;


```

You can Configure the styling of Alerts by default configurations


```js

import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  
} from 'react-native';
import AlertProvider from 'react-native-my-custom-alert';
import MyComponent from './MyComponent';

function App() {
  
 

  return (
    
    <View style={{flex: 1}}>
       <AlertProvider 

        confirmationAlertConfiguration={{
        color:"red",
        
        }}

        successAlertConfiguration={{
            headingStyle:{}
        }}
      >
            <MyComponent/>
        </AlertProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;

```

### Properties for AlertProvider Functions


Use Alerts in Your Components


```js

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAlert} from 'react-native-my-custom-alert';

export default function MyComponent() {
  const { openConfirmationModal, openSuccessModal } = useAlert();

  const handleConfirmation = () => {
    openConfirmationModal({
      title: 'Confirmation Title',
      subtitle: 'Are you sure you want to proceed?',
      okBtnAction: () => {
        console.log('Confirmed');
        // Perform your action here upon confirmation
      },
      closeFunction: () => {
        console.log('Modal closed');
        // Perform any action upon closing the modal
      },
    });
  };

  const handleSuccess = () => {
    openSuccessModal({
      heading: 'Success!',
      titleText: 'Action completed successfully',
      okBtnAction: () => {
        console.log('Success modal closed');
        // Perform any action upon closing the success modal
      },
    });
  };

  return (
    <View>
      <Button title="Open Confirmation Modal" onPress={handleConfirmation} />
      <Button title="Open Success Modal" onPress={handleSuccess} />
    </View>
  );
}

const styles = StyleSheet.create({});

```



### `openConfirmationModal`


| Prop             | Description                                                       | Default  |
| ---------------- | ----------------------------------------------------------------- | -------- |
|  **`title`** | Required title text for the confirmation dialog. | None |
|  **`subtitle`** | Optional subtitle text for the confirmation dialog. | None |
|  **`okBtnAction`** | Optional action to perform when the "Yes" button is pressed. | None |
|  **`closeFunction`** | Optional action to perform when the modal is closed. | None |
|  **`canCloseOnClickOutside`** | Boolean value to enable closing the modal by clicking outside. | None |
|  **`color`** | Color theme for the buttons. | None |
|  **`titleStyle`** | Custom styles for the title text. | None |
|  **`subtitleStyle`** | Custom styles for the subtitle text. | None |

### `openSuccessModal`


| Prop                      | Description                                                       | Default       |
| -------------------------| ----------------------------------------------------------------- | ------------- |
| **`heading`** | (Required) Heading text for the success alert. | None |
| **`titleText`** | Optional text for the title displayed below the image. | None |
| **`okBtnAction`** | Optional action to perform when the "OK" button is pressed. | None |
| **`closeFunction`** | Optional action to perform when the modal is closed. | None |
| **`children`** | Additional JSX elements to render inside the success alert. | None |
| **`headingStyle`** | Custom styles for the heading text. | None |
| **`titleStyle`** | Custom styles for the title text. | None |
| **`canCloseOnClickOutside`** | Boolean value to enable closing the modal by clicking outside. | None |
| **`imageStyle`** | Custom styles for the success image. | None |





Props for the default configuration for the Alerts which use in AlertProvider

### `confirmationAlertConfiguration`


| Prop             | Description                                                       | Default  |
| ---------------- | ----------------------------------------------------------------- | -------- |
|  **`color`** | Color theme for the buttons. | None |
|  **`titleStyle`** | Custom styles for the title text. | None |
|  **`subtitleStyle`** | Custom styles for the subtitle text. | None |

### `successAlertConfiguration`


| Prop             | Description                                                       | Default  |
| ---------------- | ----------------------------------------------------------------- | -------- |
| **`headingStyle`** | Custom styles for the heading text. | None |
| **`titleStyle`** | Custom styles for the title text. | None |
| **`imageStyle`** | Custom styles for the success image. | None |
