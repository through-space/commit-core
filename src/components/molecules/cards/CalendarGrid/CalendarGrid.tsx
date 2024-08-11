import { FC } from "react";
import { CalendarGridWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { CalendarGridChart } from "@components/molecules/cards/CalendarGrid/CalendarGridChart";
import { CalendarGridMonthsRow } from "@components/molecules/cards/CalendarGrid/CalendarGridMonthsRow";
import { CalendarGridWeekDaysColumn } from "@components/atoms/calendar-grid/CalendarGridWeekDaysColumn";
import { ICalendarGridProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";

export const CalendarGrid: FC<ICalendarGridProps> = (props) => {
	const { startDate, endDate } = props;

	return (
		<CalendarGridWrapper>
			<CalendarGridMonthsRow startDate={startDate} endDate={endDate} />
			<CalendarGridWeekDaysColumn />
			<CalendarGridChart startDate={startDate} endDate={endDate} />
		</CalendarGridWrapper>
	);
};
