import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from 'react-native';

function PractLoginInput(props) {
  //const [mobileNumber, setMobileNumber] = useState('');
  //set entered goal
  const [enteredGoalText, setGoalInput] = useState('');

  //   function loginInputHandler(inputMobileNumber) {
  //     setMobileNumber(inputMobileNumber);
  //   }
  function goalInputHandler(text: string) {
    setGoalInput(text);
  }

  function addGoalHandler() {
    props.addGoals(enteredGoalText);
    console.log('   Entered Goal Text:', enteredGoalText);
    setGoalInput('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainerStyle}>
        <Image
          source={'vfd'}
          // require('../assets/images/techmaster_logo.png')

          style={styles.imageStyle}
        />
        <View style={styles.textInputView}>
          <TextInput
            placeholder="Mobile Number"
            placeholderTextColor="#ffff"
            maxLength={10} // Assuming a 10-digit phone number
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
        </View>

        <View style={styles.buttonContainerStyle}>
          <View style={styles.addButtonStyle}>
            <Button
              title="Add goal"
              color="#3423eaff"
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.cancelButtonStyle}>
            <Button
              title="Cancel modal"
              color="#ea23d6ff"
              onPress={props.onCancel}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  imageStyle: { width: 100, height: 100, marginBottom: 20 },
  inputContainerStyle: {
    alignItems: 'center',

    paddingRight: 10,
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: '#7766c4ff',
  },
  textInputView: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 8,

    width: '80%',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButtonStyle: {
    marginRight: 8,
  },
  cancelButtonStyle: {
    marginLeft: 8,
  },
});
export default PractLoginInput;
