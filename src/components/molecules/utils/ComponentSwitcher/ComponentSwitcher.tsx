import {IComponentSwitcherProps} from "@components/molecules/utils/ComponentSwitcher/ComponentSwitcherInterfaces";
import {FC, useState} from "react";

// TODO: Maybe not a great idea to use index as currentComponent?
// TODO: add switcher buttons Panel

export const ComponentSwitcher: FC<IComponentSwitcherProps> = ({children}) => {
	const [currentComponentIndex, setCurrentComponentIndex] = useState<number>(0);

	if (!children) {
		return null;
	}

	const getComponent = () => {
		const childrenArray = Array.isArray(children) ? children : [children];

		return childrenArray[currentComponentIndex] ?? null;
	};

	// const nextComponent = () => {
	// 	if (currentComponentIndex < children.length - 1) {
	// 		setCurrentComponentIndex(currentComponentIndex + 1);
	// 	}
	// };
	//
	// const prevComponent = () => {
	// 	if (currentComponentIndex > 0) {
	// 		setCurrentComponentIndex(currentComponentIndex - 1);
	// 	}
	// };

	return <>{getComponent()}</>

}
