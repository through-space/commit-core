import { IModalProps } from "@components/atoms/modals/ModalInterfaces";
import { createPortal } from "react-dom";
import {
	ModalWrapper,
	Overlay,
} from "@components/atoms/modals/ModalStyledComponents";
import React from "react";

export const Modal = (props: IModalProps) => {
	const { isOpen, onClose, children } = props;

	if (!isOpen) {
		return null;
	}

	const ModalPopup = () => {
		return (
			<Overlay onClick={onClose}>
				<ModalWrapper
					onClick={(e: React.MouseEvent<HTMLDivElement>) =>
						e.stopPropagation()
					}
				>
					<div>{children}</div>
				</ModalWrapper>
			</Overlay>
		);
	};

	return createPortal(<ModalPopup />, document.body);
};
