import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	// the textinputchange will automatically provided as a parameter i.e. enteredText
	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
			// To use FlatList make the data to non-primitive(Object) from primitive(String) because we are using objects as in data
		]);
		setModalIsVisible(false);
	}

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}
	return (
		<>
			<StatusBar style='inverted' />
			<View style={styles.appContainer}>
				<Button
					title='Add New Goal'
					color='#5e0acc'
					onPress={startAddGoalHandler}
				/>
				<View style={styles.goalsContainer}>
					{/* here we have to use view as wrapper arounf text as text does not
				support rounded corners in IOS but it do support in Android so view as a
				wrapper is used which supports rounded corners. Now as view is not a
				text the color will not applied on view so we have to apply another
				style to Text */}
					<GoalInput
						visible={modalIsVisible}
						onAddGoal={addGoalHandler}
						onCancel={endAddGoalHandler}
					/>
					<FlatList
						// here key will be automatically taken by the FlatList
						// We have to make the data as object i.e. non primitive because the data we are outputing is in Object
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteGoal={deleteGoalHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 5,
	},
});
