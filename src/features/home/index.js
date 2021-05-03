import React, { useState, useEffect, useContext } from 'react';
import { Text, View, FlatList, Button, ActivityIndicator, Platform, TouchableOpacity } from "react-native"
import { styles } from './styles';
import { CustomModal } from '../../components/CustomModal'
import { HEADERS, ANDROID } from '../../constant';
import { getBalance, deleteBalanceById, saveBalance } from '../../api/dataService';
import { AppContext } from '../../context';
import { convertDateToFormatt, filterCategory, sumAmmount } from '../../utils';

const Home = () => {
	const { setTotalAmmount, token } = useContext(AppContext);
	const [openModal, setOpenModal] = useState(false);
	const [listFinance, setListFinance] = useState([]);
	const [loading, setLoading] = useState(false);
	const handleButtonModalClose = () => setOpenModal(!openModal);

	// Call service saveBalance to new inserta balance data session storage
	const handleButtonModalSave = async (item) => {
		let humanDate = convertDateToFormatt(item.dateTime);
		delete item.dateTime;
		item.date = humanDate;
		item.type = item.ammount > 0 ? 'Ingreso' : 'Egreso';
		let resp = await saveBalance({item, token: token});
		setListFinance(resp.data);
		let total = sumAmmount(resp.data);
		setTotalAmmount(total);
		setOpenModal(!openModal);
	}

	// Call service getBalance all data
	const getAllBalance = async () => {
		setLoading(true);
		let resp = await getBalance({token: token});
		let balance = JSON.parse(resp.data);
		setListFinance(balance);
		let total = sumAmmount(balance);
		setTotalAmmount(total);
		setLoading(false);
	}

	// Call service delte balance by id, remove element session storage
	const deleteElementBalance = async (item) => {
		let resp = await deleteBalanceById({id: item.id, token: token});
		setListFinance(resp.data);
		let total = sumAmmount(resp.data);
		setTotalAmmount(total);
	}

	// Useeffect, init load data from session storage
	useEffect(() => {
		getAllBalance();
		return(() => {
			setLoading(false);
    });
	}, []);

	// Extract key for FlatList render
	const keyExtractor = (item, index) => item.id.toString();

	// Render item FlatList
	const renderItem = ({ item }) => (
		<View style={styles.fixToTextItem}>
			<Text style={styles.listItem}>{item.date.substring(0, 10)}</Text>
			<Text style={styles.listItem}>{item.type}</Text>
			<Text style={styles.listItem}>{filterCategory(item.category)}</Text>
			<Text style={styles.listItem}>{item.ammount}</Text>
			<TouchableOpacity onPress={() => deleteElementBalance(item)}>
				<Text style={styles.textDelete}>X</Text>
			</TouchableOpacity>
		</View>
	)

	// Render Headers text in Flatlist
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

	// Render empty text if not data in array
	const emptyListMessage = () => {
		return <Text style={styles.emptyText}>No hay datos en tu balance</Text>
	}
  return (
    <View style={styles.container}>
			{openModal
				? <CustomModal onClose={handleButtonModalClose} onSave={(item) => handleButtonModalSave(item)} />
				: (
					<>
						<Button style={styles.buttonLoggin} onPress={handleButtonModalClose} title="+ Cargar nuevo" color="#841584" />
						{loading
							? <ActivityIndicator size="small" color="#841584" />
							: <FlatList
								style={styles.flatlist}
								ItemSeparatorComponent={
									Platform.OS !== ANDROID &&
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
								ListEmptyComponent={emptyListMessage}
							/>}
					</>
				)
			}
		</View>
  );
}

export default Home;