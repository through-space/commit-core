import { FC } from "react";
import { CalendarGrid } from "@components/molecules/cards/CalendarGrid/CalendarGrid";
import {
	CalendarViewContentWrapper,
	CalendarViewTopComponentWrapper,
	CalendarViewWrapper,
} from "@components/organisms/views/CalendarView/CalendarViewStyledComponents";
import dayjs from "dayjs";

export const CalendarView: FC = () => {
	const endDay = dayjs();
	const startDay = dayjs().subtract(1, "year");

	return (
		<CalendarViewWrapper>
			<CalendarViewTopComponentWrapper>
				<div>buttons</div>
			</CalendarViewTopComponentWrapper>
			<CalendarViewContentWrapper>
				<CalendarGrid startDate={startDay} endDate={endDay} />
			</CalendarViewContentWrapper>
		</CalendarViewWrapper>
	);
};
