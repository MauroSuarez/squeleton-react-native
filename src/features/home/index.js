import React, { useState, useContext, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView, Button, ActivityIndicator, TextInput, Platform } from "react-native"
import { styles } from './styles';
import { CustomModal } from '../../components/CustomModal'
import { HEADERS, TYPES } from '../../constant';
import { AppContext } from '../../context'
import { render } from 'react-dom';


const Home = () => {
	const [openModal, setOpenModal] = useState(false);
	const [listFinance, setListFinance] = useState([
		{
			id: 1,
			date: '01/01/2020',
			type: 'Ingreso',
			category: 'Freelance',
			ammount: '1000'
		},
		{
			id: 2,
			date: '11/01/2020',
			type: 'Egreso',
			category: 'Freelance',
			ammount: '500'
		},
	]);
	const handleButtonModalClose = () => setOpenModal(!openModal);
	const handleButtonModalSave = () => {

	}

	const keyExtractor = (item, index) => item.id.toString()

	const renderItem = ({ item }) => (
		<View style={styles.fixToTextItem}>
			<Text style={styles.listItem}>{item.date}</Text>
			<Text style={styles.listItem}>{item.type}</Text>
			<Text style={styles.listItem}>{item.category}</Text>
			<Text style={styles.listItem}>{item.ammount}</Text>
		</View>
	)

	const renderHeader = () => {
		return (
		<View style={styles.fixToText}>
			{HEADERS.map(item => {
				return (
				<View key={`header-key-${item.id}`} style={styles.listItemContentHeader}>
					<Text style={styles.listItem}>{item.label}</Text>
				</View>
				)
			})}
		</View>);
	} 
  return (
    <View style={styles.container}>
			{openModal
				? <CustomModal onClose={handleButtonModalClose} onSave={handleButtonModalSave} />
				: (
					<>
						<Button style={styles.buttonLoggin} onPress={handleButtonModalClose} title="+ Cargar nuevo" color="#841584" />
						<FlatList
							style={styles.flatlist}
							ItemSeparatorComponent={
								Platform.OS !== 'android' &&
								(({ highlighted }) => (
									<View
										style={[
											styles.separator,
											highlighted && { marginLeft: 0 }
										]}
									/>
								))
							}
							ListHeaderComponent={renderHeader}
							data={listFinance}
							keyExtractor={keyExtractor}
							renderItem={renderItem}
						/>
					</>
				)
			}
		</View>
  );
}

export default Home;