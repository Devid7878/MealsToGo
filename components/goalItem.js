import { StyleSheet, View, Text, Pressable } from 'react-native';
function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: '#210644' }}
				onPress={props.onDeleteGoal.bind(this, props.id)}
				// The below ones is require for ripple effect in IOS only
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	goalText: {
		color: 'white',
		padding: 8,
	},
	// The below property is for IOS
	pressedItem: {
		opacity: 0.5,
	},
});
export default GoalItem;
