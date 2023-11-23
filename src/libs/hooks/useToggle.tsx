import { useState, useCallback } from "react";

export default function useToggle(defaultValue: boolean) {
	const [value, setValue] = useState(defaultValue);
	const onToggle = useCallback(() => {
		setValue((_value) => !_value);
	}, []);
	return [value, onToggle] as [boolean, typeof onToggle];
}
