import { useState, startTransition } from 'react';
import { Position, PositionState } from 'types';

export const usePositions = (initialState: Position[]) => {
	const [actualPositions, setActualPositions] =
		useState<Position[]>(initialState);
	const [positionState, setPositionState] =
		useState<PositionState>({
			searchPosition: '',

			searchPositionResult: [],
		});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = e.target;
		setPositionState({
			...positionState,
			searchPosition: value,
		});
		if (positionState.searchPosition.length >= 3) {
			startTransition(() => {
				const filteredPositions = actualPositions.filter(
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
		if (positionState.searchPosition.length === 0) {
			setPositionState({
				...positionState,
				searchPosition: value,
				searchPositionResult: actualPositions,
			});
		}
	};
	return {
		actualPositions,
		positionState,
		handleInputChange,
	};
};
