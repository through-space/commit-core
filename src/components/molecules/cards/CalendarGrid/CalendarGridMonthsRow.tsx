import { FC, ReactNode } from "react";
import { CalendarGridMonthsRowWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { ICalendarGridDateProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
import dayjs from "dayjs";
import { MonthName } from "@components/atoms/calendar-grid/CalendarGridStyledComponents";
import weekday from "dayjs/plugin/weekday";
import { getMonthWeekNumMap } from "@components/molecules/cards/CalendarGrid/CalendarGridConsts";

export const CalendarGridMonthsRow: FC<ICalendarGridDateProps> = (props) => {
	const { startDate, endDate } = props;

	const getMonthsHeaders = (
		startDate: dayjs.Dayjs,
		endDate: dayjs.Dayjs,
	): ReactNode[] => {
		const monthHeaders: ReactNode[] = [];
		getMonthWeekNumMap(startDate, endDate).forEach((weeks, monthKey) => {
			monthHeaders.push(
				<MonthName key={monthKey} $span={weeks}>
					{dayjs(monthKey).format("MMM")}
				</MonthName>,
			);
		});

		return monthHeaders;
	};

	return (
		<CalendarGridMonthsRowWrapper>
			{getMonthsHeaders(startDate, endDate)}
		</CalendarGridMonthsRowWrapper>
	);
};
