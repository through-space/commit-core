import { FC } from "react";
import { ISimpleModalProps } from "@components/molecules/modals/SimpleModal/SimpleModalInterfaces";
import { Modal } from "@components/atoms/modals/Modal";

export const SimpleModal: FC<ISimpleModalProps> = ({ isOpen, children }) => {
	return <Modal isOpen={isOpen}>{children}</Modal>;
};
