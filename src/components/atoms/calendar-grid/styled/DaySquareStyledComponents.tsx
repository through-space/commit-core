import styled from "styled-components";

export const DaySquareWrapper = styled.div<{ color: string }>`
	background-color: ${({color}) => color};
	border-radius: 2px;
	border: 1px solid var(--background-modifier-border);
`;
