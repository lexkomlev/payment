export const CHANGE = 'Change';

export const change = (checked, value) => ({
	type: CHANGE,
	payload: { checked, value }
});