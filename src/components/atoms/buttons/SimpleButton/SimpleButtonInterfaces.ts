import { ReactNode } from "react";

export interface ISimpleButtonProps {
	onClick: () => void;
	children: ReactNode;
	isDisabled?: boolean;
}
