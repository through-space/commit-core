import { FC } from "react";
import { CalendarGridWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
// import { CalendarGridWeekDaysColumn } from "@components/molecules/cards/CalendarGrid/CalendarGridWeekDaysColumn";
import { CalendarGridChart } from "@components/molecules/cards/CalendarGrid/CalendarGridChart";
import { CalendarGridMonthsRow } from "@components/molecules/cards/CalendarGrid/CalendarGridMonthsRow";
import { CalendarGridWeekDaysColumn } from "@components/molecules/cards/CalendarGrid/CalendarGridWeekDaysColumn";
import { ICalendarGridProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
// import { CalendarGridMonthsRow } from "@components/molecules/cards/CalendarGrid/CalendarGridMonthsRow";

//TODO: add start and from date
export const CalendarGrid: FC<ICalendarGridProps> = (props) => {
	const { startDate, endDate } = props;
	// const tableHeaders = [];
	// const tableRows = [];

	return (
		<CalendarGridWrapper>
			<CalendarGridMonthsRow />
			<CalendarGridWeekDaysColumn />
			<CalendarGridChart startDate={startDate} endDate={endDate} />
		</CalendarGridWrapper>
	);
};
