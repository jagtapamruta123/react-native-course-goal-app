import { Pressable, View, Text } from 'react-native';

function GoalListItem(props) {
  return (
    <View
      style={{
        padding: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        backgroundColor: '#c58383ff',
      }}
    >
      <Pressable
        android_ripple={{ color: '#ffff' }}
        onPress={props.onDelete.bind(this, props.id)}
      >
        <Text>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalListItem;
