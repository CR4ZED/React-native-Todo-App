import { Pressable, StyleSheet, Text, TextInput, View, PanResponder } from "react-native";
import React, { useState } from "react";

const TodoItem = ({ todo, onClickUpdate, onClickRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [leftSwipe, setLeftSwipe] = useState(false)

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Determine if the gesture is a left swipe
      if(gestureState.dx < -50) {
        console.log(`remove this todo: ${todoTitle}`)
        setLeftSwipe(true)
        onClickRemove(todo.id)()
      }
      return gestureState.dx < -50;
    },

    onPanResponderRelease: (evt, gestureState) => {
      // Handle the release event (left swipe)
      if (gestureState.dx < -50) {
        console.log('Left swipe detected!');
        setLeftSwipe(false)
      }
    },
  });

  return (
    <View style={{...styles.conatiner, transform: !leftSwipe? 'none': [{ translateX: -75 }]}} {...panResponder.panHandlers}>
      {!isEditing ? (
        <Text style={styles.title}>{todoTitle}</Text>
      ) : (
        <TextInput
          style={styles.title}
          value={todoTitle}
          onChangeText={(text) => {
            setTodoTitle(text);
          }}
          autoFocus={isEditing}
          multiline
        />
      )}
      {!isEditing ? (
        <Pressable style={styles.button} onPress={() => setIsEditing(true)}>
          <Text>Edit</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.button}
          onPress={() => {
            onClickUpdate({id: todo.id, title: todoTitle })();
            setIsEditing(false);
          }}
        >
          <Text>Save</Text>
        </Pressable>
      )}
      <Pressable style={styles.button} onPress={onClickRemove(todo.id)}>
        <Text>Remove</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    flex: 1,
    minHeight: 30,
    textAlignVertical: 'top'
  },
  button: {
    marginLeft: 5,
  },
});
