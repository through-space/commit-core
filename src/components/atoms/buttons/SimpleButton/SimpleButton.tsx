import { FC } from "react";
import { ISimpleButtonProps } from "@components/atoms/buttons/SimpleButton/SimpleButtonInterfaces";

export const SimpleButton: FC<ISimpleButtonProps> = ({
	onClick,
	children,
	isDisabled = false,
}) => {
	return (
		<button onClick={onClick} disabled={isDisabled}>
			{children}
		</button>
	);
};
