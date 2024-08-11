import { FC, ReactNode } from "react";
import { CalendarGridMonthsRowWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { ICalendarGridDateProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
import dayjs from "dayjs";
import {
	MonthName,
	WeekDayName,
} from "@components/atoms/calendar-grid/CalendarGridStyledComponents";
import weekday from "dayjs/plugin/weekday";

export const CalendarGridMonthsRow: FC<ICalendarGridDateProps> = (props) => {
	const { startDate, endDate } = props;
	dayjs.extend(weekday);

	const getMonthsHeaders = (): ReactNode[] => {
		const midWeekDay = 3;
		const allMonthsHeaders = [];
		let spanCounter = 0;
		let currentMonthName = startDate.format("MMM");
		let changeMonth = false;
		let firstWeekDay = startDate
			.clone()
			.subtract(startDate.weekday(), "days");

		let i = 0;
		while (firstWeekDay.isBefore(endDate)) {
			const lastWeekDay = firstWeekDay.clone().add(6, "days");

			// if (!currentMonth) {
			// 	allMonthsHeaders
			// }

			if (i > 50) {
				break;
			}
			if (firstWeekDay.month() !== lastWeekDay.month() || changeMonth) {
				const firstMonthDate = lastWeekDay.clone().set("date", 1);
				if (firstMonthDate.weekday() < midWeekDay || changeMonth) {
					console.log(spanCounter);
					allMonthsHeaders.push(
						<MonthName
							key={firstWeekDay.format("YYYY-MM-DD")}
							$span={spanCounter}
						>
							{currentMonthName}
						</MonthName>,
					);

					currentMonthName = lastWeekDay.format("MMM");
					spanCounter = 0;
					changeMonth = false;
				} else {
					changeMonth = true;
				}
			}

			firstWeekDay = firstWeekDay.add(7, "days");
			spanCounter++;
			i++;
		}

		return allMonthsHeaders;

		// spanCounter++;
	};

	return (
		<CalendarGridMonthsRowWrapper>
			{/*{getMonthsHeaders()}*/}
		</CalendarGridMonthsRowWrapper>
	);
};
