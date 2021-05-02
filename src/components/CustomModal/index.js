import React, { useState } from 'react';
import { Text, View, SafeAreaView, Button, TextInput, Picker } from "react-native"
import "react-datepicker/dist/react-datepicker.css";
import { CATEGORY, FORMATT_DATE } from '../../constant'
import { styles, DatePickerWrapper } from './styles';

// Render custom textintput simila textarea
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
    />
  );
}

export const CustomModal = ({
	onClose,
	onSave
}) => {
  const [message, setMessage] = useState('');
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');
	const [description, setDescription] = useState('');
	const [ammount, setAmount] = useState('');
  const [dateTime, setDateTime] = useState(new Date());
  const handleCategory = (itemValue, itemIndex) => {
    setCategory(itemValue);
  }
  // handle save callback onSave function
  const handleSave = () => {
    if(title !== '' && ammount !== 0 && category > 0 && dateTime !== null) {
      let obj = {
        title,
        category,
        description,
        ammount,
        dateTime
      };
      onSave(obj);
    } else {
      setMessage('Los campos son obligatorios');
    }
  }

  const handleChangeDatepicker = (date) => {
    setDateTime(date);
  }

  const renderElements = [
    {
      id: '1',
      label: <Text>Título</Text>,
      element: <TextInput
                  style={styles.input}
                  onChangeText={setTitle}
                  value={title}
                />
    },
    {
      id: '2',
      label: <Text>Categoría</Text>,
      element: <Picker
                selectedValue={category}
                style={{ height: 40, width: '100%', marginTop: '10px',
                marginBottom: '30px' }}
                onValueChange={(itemValue, itemIndex) => handleCategory(itemValue, itemIndex)}
              >
                {CATEGORY.map((item, index) => {
                  return (
                  <Picker.Item key={`key-picker-item-${item.id}`} label={item.label} value={item.id} />);
                })}
              </Picker>
    },
    {
      id: '3',
      label: <Text>Descripción</Text>,
      element: <UselessTextInput
                style={styles.textarea}
                multiline
                numberOfLines={4}
                onChangeText={setDescription}
                value={description}
              />
    },
    {
      id: '4',
      label: <Text>Monto</Text>,
      element: <TextInput
                style={styles.input}
                onChangeText={setAmount}
                value={ammount}
                keyboardType='numeric'
                maxLength={10}
              />
    },
    {
      id: '5',
      label: <Text>Fecha</Text>,
      element: <DatePickerWrapper
                  selected={dateTime}
                  onChange={date => handleChangeDatepicker(date)}
                  showTimeSelect={true}
                  dateFormat={FORMATT_DATE.formattDatePickerWithHourMinute}
                />
    },
  ];
	return (
		<View style={styles.containerModal}>
			<Text style={styles.text}>Cargar nuevo</Text>
      <Text style={{color: '#e74c3c', marginTop: '5px', marginBottom: '10px', textAlign: 'center'}}>{message}</Text>
			<SafeAreaView>
        {
          renderElements.map(item => {
            return (
              <React.Fragment key={item.id}>
                {item.label}
                {item.element}
              </React.Fragment>
            )
          })
        }
      </SafeAreaView>
			<View style={styles.fixToButton}>
				<Button style={styles.buttonLoggin} onPress={onClose} title="x Cerrar" color="#e67e22" />
				<Button style={styles.buttonLoggin} onPress={handleSave} title="Guardar" color="#841584" />
			</View>
		</View>
	);
}