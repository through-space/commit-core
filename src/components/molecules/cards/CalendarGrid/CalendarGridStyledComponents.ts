import styled from "styled-components";

export const CalendarGridWrapper = styled.div`
	display: grid;
	grid-template-areas: "empty month" "day chart";
	gap: 1em 1em;
	height: 100%;
`;

export const CalendarGridWeekDaysColumnWrapper = styled.div`
	grid-area: day;
	display: grid;
	grid-template-rows: repeat(7, 1fr);
`;

export const CalendarGridMonthsRowWrapper = styled.div`
	grid-area: month;
	display: grid;
`;

export const CalendarGridChartWrapper = styled.div`
	grid-area: chart;
	display: grid;
	grid-template-columns: repeat(53, max-content);
	grid-template-rows: repeat(7, auto);
	grid-auto-flow: column;
`;

// export const CalendarGridDaysWrapper = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(${(props) => props.$columns}, auto);
// 	grid-template-rows: repeat(7, auto);
// 	grid-auto-flow: column;
// `;
