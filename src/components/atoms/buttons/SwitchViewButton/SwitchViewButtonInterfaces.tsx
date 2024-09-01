export enum ESwitchViewButtonDirection {
	LEFT = "left",
	RIGHT = "right",
}

export interface ISwitchViewButtonProps {
	onClick: () => void;
	isAvailable: boolean;
	direction: ESwitchViewButtonDirection;
}
