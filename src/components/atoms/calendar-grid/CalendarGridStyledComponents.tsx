import styled from "styled-components";

export const WeekDayName = styled.div``;

export const MonthName = styled.div``;

export const DaySquareWrapper = styled.div<{ color: string }>`
	background-color: ${({ color }) => color};
	border-radius: 2px;
	//border: 1px solid var(--background-modifier-border);
	border: 0.05em solid grey;
	aspect-ratio: 1 / 1;
`;
