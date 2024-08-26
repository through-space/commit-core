import styled from "styled-components";

export const CalendarGridWrapper = styled.div`
	display: grid;
	grid-template-areas: "empty month" "day chart";
	grid-template-rows: 0.2fr;
	grid-template-columns: min-content;
	gap: 0.1em 1em;
	width: 80%;
	font-size: 1.4rem;
`;

export const CalendarGridWeekDaysColumnWrapper = styled.div`
	grid-area: day;
	display: grid;
	grid-template-rows: repeat(7, 1fr);
	line-height: 0.1rem;
`;

export const CalendarGridMonthsRowWrapper = styled.div<{ $columns: number }>`
	grid-area: month;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
`;

export const CalendarGridChartWrapper = styled.div<{ $columns: number }>`
	grid-area: chart;
	display: grid;
	grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
	grid-template-rows: repeat(7, auto);
	grid-auto-flow: column;
`;
