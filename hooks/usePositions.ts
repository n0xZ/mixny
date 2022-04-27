import { useState, startTransition } from 'react';
import { Position, PositionState } from 'types';
    
//This custom hook functionality is related to Filtering/displaying the positions based on the user's input value
export const usePositions = (initialState: Position[]) => {
	//An positionState is initialized with its functionality is to manage the state the search of the position, such as the input value and the results of that input
	const [positionState, setPositionState] =
		useState<PositionState>({
			searchPosition: '',
			searchPositionResult: [],
		});

	//This function sets the input value in the searchPositionState and filters the positions array to show only the positions that match the input value
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		//It destructures the value of the input
		const { value } = e.target;
		setPositionState({
			...positionState,
			searchPosition: value,
		});
		//It validates if the length of the input is greater than 3, and performs the filters of the position based on the input value
		if (positionState.searchPosition.length >= 3) {
			startTransition(() => {
				const filteredPositions = initialState.filter(
					(position: Position) => {
						return position.title
							.toLowerCase()
							.includes(value.toLowerCase());
					}
				);
				setPositionState({
					...positionState,
					searchPosition: value,
					searchPositionResult: filteredPositions,
				});
			});
		}
		//It the user didn't entered any value, or cleaned up the input field, it will display all the positions
		if (positionState.searchPosition.length === 0) {
			setPositionState({
				...positionState,
				searchPosition: value,
				searchPositionResult: initialState,
			});
		}
	};

	const filterByCategory = () => {};
	return {
		positionState,
		handleInputChange,
	};
};
