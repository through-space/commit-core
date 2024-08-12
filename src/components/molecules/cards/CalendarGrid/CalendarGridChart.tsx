import React, { FC, ReactNode } from "react";
// import dayjs from "dayjs";
import { CalendarGridChartWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import { ICalendarGridChartProps } from "@components/molecules/cards/CalendarGrid/CalendarGridInterfaces";
import dayjs from "dayjs";
import { DaySquare } from "@components/atoms/calendar-grid/DaySquare";
import { DEFAULT_DATE_FORMAT } from "@config/commonConsts";

export const CalendarGridChart: FC<ICalendarGridChartProps> = (props) => {
	const { startDate, endDate } = props;
	const numberOfDays = endDate.diff(startDate, "days") + 1;

	const getDaySquares = (): ReactNode[] => {
		const daySquares = [];
		for (let i = 0; i < numberOfDays; i++) {
			const date = dayjs(startDate).add(i, "day");
			daySquares.push(
				<DaySquare
					key={date.format(DEFAULT_DATE_FORMAT)}
					date={date}
				/>,
			);
		}

		return daySquares;
	};

	const getNumOfWeeks = () => {
		const numOfWeeks = Math.ceil(
			Math.abs(endDate.diff(startDate, "days")) / 7,
		);
		return numOfWeeks + 1;
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
		<CalendarGridChartWrapper $columns={getNumOfWeeks()}>
			{getDaySquares()}
		</CalendarGridChartWrapper>
	);
};
