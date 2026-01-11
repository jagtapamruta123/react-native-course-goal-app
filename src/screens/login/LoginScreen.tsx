import React, { useState } from 'react';

// or use react-native-vector-icons

import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Button,
  FlatList,
  Pressable,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LoginInput from '../../components/LoginInputComponent';
import PractLoginInput from '../../components/PracticeInputComponent';
import GoalListItem from '../../components/GoalListItem';

//Class component
const LoginScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const insets = useSafeAreaInsets();

  //set course goal
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      { key: Math.random().toString(), value: enteredGoalText },
    ]);
    cancelModalHandler();
    // setCourseGoals((currentCourseGoals) => [
    //   ...currentCourseGoals,
    //   { key: Math.random().toString(), value: enteredGoalText },
    // ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id);
    });
  }
  function setModalVisibilityHandler() {
    setModalVisibility(true);
  }

  function cancelModalHandler() {
    setModalVisibility(false);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View
              style={[
                styles.appBar,
                { paddingTop: insets.top, height: 60 + insets.top },
              ]}
            >
              <View>
                <Text style={styles.appBarTitle}>Generate Credentials</Text>
              </View>
            </View>
            <View style={{ padding: 16 }}></View>
            <StatusBar
              backgroundColor="#000000" // Android only
              barStyle="light-content"
            ></StatusBar>
            <Button
              title="Show Modal"
              onPress={setModalVisibilityHandler}
            ></Button>
            <View style={{ padding: 16 }}>
              <PractLoginInput
                addGoals={addGoalHandler}
                onCancel={cancelModalHandler}
                visible={isModalVisible}
              ></PractLoginInput>
              <View style={{ marginTop: 16 }}></View>
              <View>
                {' '}
                <FlatList
                  data={courseGoals}
                  renderItem={itemData => {
                    return (
                      <GoalListItem
                        text={itemData.item.value}
                        id={itemData.item.key}
                        onDelete={deleteGoalHandler}
                      ></GoalListItem>
                    );
                  }}
                  keyExtractor={(item, index) => item.key}
                ></FlatList>
              </View>

              {/* <LoginInput></LoginInput> */}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
  },
  appBar: {
    backgroundColor: '#ea9423ff', // purple
    justifyContent: 'center',

    elevation: 4,
  },
  appBarTitle: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'normal',
    color: '#fff',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonRowView: {
    marginTop: 16,
    flexDirection: 'row',
    height: 45,
  },
  switchView: {
    justifyContent: 'center',
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default LoginScreen;
