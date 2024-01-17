import { TextInput, View, Button, StyleSheet } from "react-native";
import React, { Component, useState } from "react";

export const TodoInput = ({ onClickAdd }) => {
  const [todo, setTodo] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        inputMode="text"
        placeholder="Add a todo"
        style={styles.inputBox}
        onChangeText={(text) => {
          setTodo(text);
        }}
        value={todo}
      />
      <Button
        title="Add Todo"
        style={styles.button}
        onPress={() => {
          if(todo) {
            onClickAdd({
              title: todo,
              id: Math.floor(Math.random() * 10000000000).toString(),
            })();
            setTodo("");
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.25)",
    padding: 8,
    marginBottom: 10,
  },
});

export default TodoInput;
