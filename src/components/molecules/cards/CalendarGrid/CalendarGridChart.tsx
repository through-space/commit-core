import React, { FC, ReactNode } from "react";
// import dayjs from "dayjs";
import { CalendarGridChartWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { ICalendarGridChartProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
import dayjs from "dayjs";
import { DaySquare } from "@components/atoms/calendar-grid/DaySquare";
import { DEFAULT_DATE_FORMAT } from "@config/commonConsts";

export const CalendarGridChart: FC<ICalendarGridChartProps> = (props) => {
	const { startDate, endDate } = props;
	//TODO: what if number of days is less than 6 weeks
	const numberOfDays = endDate.diff(startDate, "days") + 1;
	console.log("numberOfDays", numberOfDays);
	// const weekStart = 0;
	// const numberOfWeeks = 6;
	//
	// const getStartDate = (): Dayjs => {
	// 	return dayjs()
	// 		.startOf("week")
	// 		.add(weekStart, "day")
	// 		.subtract(numberOfWeeks, "week");
	// };

	// const getNumberOfDays = () => {
	// 	return numberOfWeeks * 7;
	// };
	//
	const getDaySquares = (): ReactNode[] => {
		const daySquares = [];
		for (let i = 0; i < numberOfDays; i++) {
			const date = dayjs(startDate).add(i, "day");
			daySquares.push(
				<DaySquare key={date.format(DEFAULT_DATE_FORMAT)} />,
			);
		}

		return daySquares;
	};
	// 	const startDate = getStartDate();
	// 	const numberOfDays = getNumberOfDays();
	// 	for (let i = 0; i < numberOfDays; i++) {
	// 		const date = startDate.add(i, "day");
	// 		daySquares.push(
	// 			<DaySquare key={date.format(DEFAULT_DATE_FORMAT)} />,
	// 		);
	// 	}
	// 	return daySquares;
	// };

	return (
		<CalendarGridChartWrapper>{getDaySquares()}</CalendarGridChartWrapper>
	);
};
