import { IViewSwitcherProps } from "@components/organisms/utils/ViewSwitcher/ViewSwitcherInterfaces";
import React, { FC, useEffect, useState } from "react";
import { ViewSwitcherButtonPanel } from "@components/molecules/button-panels/ViewSwitcherButtonPanel/ViewSwitcherButtonPanel";
import { ViewSwitcherViewWrapper } from "@components/organisms/utils/ViewSwitcher/ViewStyledComponents";

//TODO: maybe use https://www.npmjs.com/package/react-swipe only for mobile

export const ViewSwitcher: FC<IViewSwitcherProps> = ({
	views,
	initViewKey,
}) => {
	const [currentComponentIndex, setCurrentComponentIndex] =
		useState<number>(0);

	if (!views.length) {
		return null;
	}

	const initCurrentComponent = () => {
		if (!initViewKey) {
			return;
		}

		const index = views.findIndex((view) => {
			return view.key === initViewKey;
		});

		setCurrentComponentIndex(index > -1 ? index : 0);
	};

	useEffect(() => {
		initCurrentComponent();
	}, []);

	const getComponent = () => {
		const currentView = views[currentComponentIndex];
		return (
			<ViewSwitcherViewWrapper key={currentView.key}>
				{currentView.renderView()}
			</ViewSwitcherViewWrapper>
		);
	};

	return (
		<>
			{getComponent()}
			<ViewSwitcherButtonPanel
				childrenLength={views.length}
				currentIndex={currentComponentIndex}
				setCurrentIndex={setCurrentComponentIndex}
			/>
		</>
	);
};
