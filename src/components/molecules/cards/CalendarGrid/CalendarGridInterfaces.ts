import dayjs from "dayjs";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";

export interface ICalendarGridDateProps {
	startDate: dayjs.Dayjs;
	endDate: dayjs.Dayjs;
}

export interface ICalendarGridProps extends ICalendarGridDateProps {
	branch: IBranch;
}

export interface ICalendarGridChartProps extends ICalendarGridDateProps {
	branch: IBranch;
}

export type ICalendarGridMonthsRowProps = ICalendarGridDateProps;
