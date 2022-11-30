import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from 'react-native';
import { useState } from 'react';
function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText('');
	}
	return (
		<Modal visible={props.visible} animationType='fade'>
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Your Course Goal!'
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
					</View>
					<View style={styles.button}>
						<Button title='Cancel' onPress={props.onCancel} color='#f31282' />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#311b6b',
	},
	textInput: {
		borderColor: '#e4d0ff',
		backgroundColor: '#e4d0ff',
		borderRadius: 6,
		width: '100%',
		borderWidth: 1,
		padding: 8,
		marginRight: 8,
		marginBottom: 16,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		height: 100,
		width: 100,
		margin: 30,
	},
});
export default GoalInput;
