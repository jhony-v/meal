import { useState } from "react";

const useToggle = () => {
	const [open, setToggle] = useState(false);
	const onToggle = () => setToggle(!open);
	return {
		open,
		onToggle,
	};
};

export default useToggle;
