import { IViewSwitcherButtonPanelProps } from "@components/organisms/button-panels/ViewSwitcherButtonPanel/ViewSwitcherButtonPanelInterfaces";
import { SwitchViewButton } from "@components/atoms/buttons/SwitchViewButton/SwitchViewButton";
import { ESwitchViewButtonDirection } from "@components/atoms/buttons/SwitchViewButton/SwitchViewButtonInterfaces";

export const ViewSwitcherButtonPanel = (
	props: IViewSwitcherButtonPanelProps,
) => {
	const { childrenLength, currentIndex, setCurrentIndex } = props;

	if (childrenLength < 2) {
		return null;
	}

	const switchIndex = (step: number) => {
		const newIndex = Math.abs((currentIndex + step) % childrenLength);
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
