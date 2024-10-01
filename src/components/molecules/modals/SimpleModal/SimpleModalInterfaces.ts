import { ReactNode } from "react";

export interface ISimpleModalProps {
	isOpen: boolean;
	onClose?: () => void;
	children: ReactNode;
}
