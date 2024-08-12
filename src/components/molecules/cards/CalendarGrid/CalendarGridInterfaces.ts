import dayjs from "dayjs";

export interface ICalendarGridDateProps {
	startDate: dayjs.Dayjs;
	endDate: dayjs.Dayjs;
}

export type ICalendarGridProps = ICalendarGridDateProps;

export type ICalendarGridChartProps = ICalendarGridDateProps;

export type ICalendarGridMonthsRowProps = ICalendarGridDateProps;
