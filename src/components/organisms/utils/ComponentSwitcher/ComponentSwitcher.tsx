import { IComponentSwitcherProps } from "@components/organisms/utils/ComponentSwitcher/ComponentSwitcherInterfaces";
import React, { FC, useEffect, useState } from "react";
import { ViewSwitcherButtonPanel } from "@components/molecules/button-panels/ViewSwitcherButtonPanel/ViewSwitcherButtonPanel";

//TODO: maybe use https://www.npmjs.com/package/react-swipe only for mobile
//TODO: consider React.Children alternatives: https://react.dev/reference/react/Children#alternatives

export const ComponentSwitcher: FC<IComponentSwitcherProps> = ({
	children,
	initView,
}) => {
	const [currentComponentIndex, setCurrentComponentIndex] =
		useState<number>(0);

	if (!children) {
		return null;
	}

	const initCurrentComponent = () => {
		if (!initView) {
			return;
		}

		const index = React.Children.toArray(children).findIndex(
			(child: React.ReactNode) => {
				if (React.isValidElement(child)) {
					return child?.key === initView;
				}
			},
		);

		setCurrentComponentIndex(index > -1 ? index : 0);
	};

	useEffect(() => {
		initCurrentComponent();
	}, []);

	const getComponent = () => {
		const childrenArray = Array.isArray(children) ? children : [children];

		return childrenArray[currentComponentIndex] ?? null;
	};

	return (
		<>
			{getComponent()}
			<ViewSwitcherButtonPanel
				childrenLength={React.Children.count(children)}
				currentIndex={currentComponentIndex}
				setCurrentIndex={setCurrentComponentIndex}
			/>
		</>
	);
};
