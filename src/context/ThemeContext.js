import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
	const [isDarkMode, toggleTheme] = useToggleState(false);// use a custom toggle
	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = React.useContext(ThemeContext);
	if(context === undefined) {
		throw new Error(`useTheme must be used within  a ThemeProvider`);
	}
	return context;
}

function useToggleState(initialVal = false) {
	// call useState, "reserve piece of state"
	const [state, setState] = useState(initialVal);
	const toggle = () => {
		setState(!state);
	};
	// return piece of state AND a function to toggle it
	return [state, toggle];
}
// export default useToggle;
