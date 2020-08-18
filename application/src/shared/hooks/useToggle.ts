import { useState } from "react";

export default () => {
	const [open, setToggle] = useState<boolean>(false);
	const onToggle = (): void => setToggle(!open);
	return {
		open,
		onToggle,
	};
};
