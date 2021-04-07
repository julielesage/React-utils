import React, { useReducer } from "react";

import en from "./en.json";
import tr from "./tr.json";
import es from "./es.json";

const translations = { en, tr, es };


// This function will be used to create `translate` function for the context
const getTranslate = langCode => key => translations[langCode][key] || key;

/* Default language will be English */
const initialState = {
	langCode: "en",
	translate: getTranslate("en"),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
	const reducer = (state, action) => {
		switch (action.type) {
			case "setLanguage":
				return {
					langCode: action.payload,
					translate: getTranslate(action.payload),
				};
			default:
				return { ...initialState };
		}
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<I18nContext.Provider value={{ ...state, dispatch }}>
			{children}
		</I18nContext.Provider>
	);
};