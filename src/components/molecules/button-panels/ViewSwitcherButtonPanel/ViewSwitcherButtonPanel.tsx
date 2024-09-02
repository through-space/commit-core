import { IViewSwitcherButtonPanelProps } from "@components/molecules/button-panels/ViewSwitcherButtonPanel/ViewSwitcherButtonPanelInterfaces";
import { useState } from "react";
import { SwitchViewButton } from "@components/atoms/buttons/SwitchViewButton/SwitchViewButton";
import { ESwitchViewButtonDirection } from "@components/atoms/buttons/SwitchViewButton/SwitchViewButtonInterfaces";

export const ViewSwitcherButtonPanel = (
	props: IViewSwitcherButtonPanelProps,
) => {
	const { childrenLength, currentIndex, setCurrentIndex } = props;

	const switchIndex = (step: number) => {
		const newIndex = (currentIndex + step) % childrenLength;
		console.log("newIndex", newIndex);
		setCurrentIndex(newIndex);
	};

	return (
		<div>
			<SwitchViewButton
				onClick={() => switchIndex(-1)}
				direction={ESwitchViewButtonDirection.LEFT}
			/>
			<SwitchViewButton
				onClick={() => switchIndex(1)}
				direction={ESwitchViewButtonDirection.RIGHT}
			/>
		</div>
	);
};
