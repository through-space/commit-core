import React, { FC, ReactNode } from "react";
import { CalendarGridChartWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { ICalendarGridChartProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
import dayjs from "dayjs";
import { DaySquare } from "@components/atoms/calendar-grid/DaySquare";
import { DAILY_DATE_FORMAT } from "@config/commonConsts";
import { getNumOfWeeks } from "@components/molecules/cards/CalendarGrid/CalendarGridConsts";

export const CalendarGridChart: FC<ICalendarGridChartProps> = (props) => {
	const { startDate, endDate } = props;
	const numberOfDays = endDate.diff(startDate, "days") + 1;

	const getDaySquares = (): ReactNode[] => {
		const daySquares = [];
		for (let i = 0; i < numberOfDays; i++) {
			const date = dayjs(startDate).add(i, "day");
			daySquares.push(
				<DaySquare key={date.format(DAILY_DATE_FORMAT)} date={date} />,
			);
		}

		return daySquares;
	};

	return (
		<CalendarGridChartWrapper $columns={getNumOfWeeks(startDate, endDate)}>
			{getDaySquares()}
		</CalendarGridChartWrapper>
	);
};
