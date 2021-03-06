export interface PositionResult {
	total: number;
	start: number;
	count: number;
	data: Position[];
}

//This type is related to usePosition state
export interface PositionState {
	searchPosition: string;
	searchPositionResult: Position[];
}
export interface Position {
	employmentType: EmploymentType;
	publicDescription: string;
	address: Address;
	publishedZip: null;
	title: string;
	salary: number;
	salaryUnit: string;
	isOpen: boolean;
	isDeleted: boolean;
	dateLastPublished: number;
	publishedCategory: PublishedCategory;
	isPublic: number;
	id: number;
	_score: number;
}

export interface Address {
	city: null;
	state: null;
}

export enum EmploymentType {
	DirectHire = 'Direct Hire',
}

export interface PublishedCategory {
	id: number;
	name: string;
}

export type Category = {
	[key: string]: number;
};
