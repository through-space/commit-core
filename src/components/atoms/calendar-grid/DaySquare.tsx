import { FC } from "react";
import * as dayjs from "dayjs";
import { DaySquareWrapper } from "@components/atoms/calendar-grid/styled/DaySquareStyledComponents";
import { IBranch } from "@logic/entities/Branch/Branch";

export interface IDaySquareProps {
	color: string;
	branch: IBranch;
	date?: dayjs.Dayjs;
}

export const DaySquare: FC<IDaySquareProps> = ({ branch, date, color }) => {
	const score = branch.getCompletionScore(date);

	return <DaySquareWrapper color={color} />;
};
