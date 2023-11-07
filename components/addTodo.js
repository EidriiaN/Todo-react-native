import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, Alert, Platform } from 'react-native';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }

    const addTodo = () => {
        if (text.trim() !== '') {
            submitHandler(text)
            setText('')
        }
        else {
            if (Platform.OS == 'web') {
                alert("Todos must not be empty");
            }
            Alert.alert('OOPS!', 'Todos must not be empty', [
                { text: 'Ok' }
            ])
        }
    }
    return (
        <View>
            <TextInput
                style={style.input}
                placeholder='new todo...'
                placeholderTextColor='gray'
                onChangeText={changeHandler}
                value={text}
            />
            <Button
                onPress={addTodo}
                title='add todo'
                color='coral'
            />
        </View>

    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})