import styled from "styled-components";

export const WeekDayName = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
`;

export const MonthName = styled.div<{ $span?: number }>`
	grid-column: ${(props) => (props.$span ? `span ${props.$span}` : "auto")};
`;

export const DaySquareWrapper = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	border-radius: 2px;
	//border: 1px solid var(--background-modifier-border);
	border: 0.05em solid #000000;
	aspect-ratio: 1 / 1;
`;
