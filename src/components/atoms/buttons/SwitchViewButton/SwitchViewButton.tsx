import {
	ESwitchViewButtonDirection,
	ISwitchViewButtonProps,
} from "@components/atoms/buttons/SwitchViewButton/SwitchViewButtonInterfaces";

export const SwitchViewButton = (props: ISwitchViewButtonProps) => {
	const { onClick, isAvailable = true, direction } = props;
	const icon = direction === ESwitchViewButtonDirection.LEFT ? "⬅️" : "➡️";

	return (
		<button onClick={onClick} disabled={!isAvailable}>
			{icon}
		</button>
	);
};
