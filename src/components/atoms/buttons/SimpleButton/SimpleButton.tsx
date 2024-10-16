import { FC } from "react";
import { ISimpleButtonProps } from "@components/atoms/buttons/SimpleButton/SimpleButtonInterfaces";

export const SimpleButton: FC<ISimpleButtonProps> = ({
	onClick,
	children,
	isDisabled = false,
}) => {
	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick();
	};

	return (
		<button onClick={handleClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
