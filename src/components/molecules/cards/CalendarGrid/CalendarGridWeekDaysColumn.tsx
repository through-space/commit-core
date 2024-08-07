import { FC } from "react";
import { WeekDayName } from "@components/atoms/calendar-grid/CalendarGridStyledComponents";
import { CalendarGridWeekDaysColumnWrapper } from "@components/molecules/cards/CalendarGrid/CalendarGridStyledComponents";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

export const CalendarGridWeekDaysColumn: FC = () => {
	dayjs.extend(weekday);

	const getWeekdays = (emptyOdd: boolean, emptyEven: boolean): string[] => {
		const weekdays = [];
		for (let i = 0; i < 7; i++) {
			if ((i % 2 === 0 && emptyEven) || (i % 2 !== 0 && emptyOdd)) {
				weekdays.push("");
				continue;
			}

			weekdays.push(dayjs().weekday(i).format("ddd"));
		}
		return weekdays;
	};

	return (
		<CalendarGridWeekDaysColumnWrapper>
			{getWeekdays(false, true).map((weekday, index) => (
				<WeekDayName key={`weekday_${index}`}>{weekday}</WeekDayName>
			))}
		</CalendarGridWeekDaysColumnWrapper>
	);
};
