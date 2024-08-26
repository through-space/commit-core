import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	cursor: pointer;
`;

export const ModalWrapper = styled.div`
	position: fixed;
	display: block;
	width: 50%;
	height: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
`;
