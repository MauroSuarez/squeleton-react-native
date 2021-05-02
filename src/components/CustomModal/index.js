import React, { useState, useContext, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Button, ActivityIndicator, TextInput, Platform } from "react-native"
import { styles } from './styles';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

export const CustomModal = ({
	onClose,
	onSave
}) => {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState([]);
	const [description, setDescription] = useState('');
	const [ammount, setAmount] = useState('');
	const [dateTime, setDateTime] = useState('');
	return (
		<View style={styles.containerModal}>
			<Text style={styles.text}>Cargar nuevo</Text>
			<SafeAreaView>
        <Text>Título</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
        <Text>Descripción</Text>
        <UselessTextInput
          style={styles.textarea}
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
          value={description}
        />
				<TextInput
          style={styles.input}
          onChangeText={setAmount}
					value={ammount}
					keyboardType='numeric'
					maxLength={10}
        />
				<TextInput
          style={styles.input}
          onChangeText={setDateTime}
					value={dateTime}
					maxLength={10}
        />
      </SafeAreaView>
			<View style={styles.fixToButton}>
				<Button style={styles.buttonLoggin} onPress={onClose} title="x Cerrar" color="#e67e22" />
				<Button style={styles.buttonLoggin} onPress={onSave} title="Guardar" color="#841584" />
			</View>
		</View>
	);
}