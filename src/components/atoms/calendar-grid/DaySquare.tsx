import { FC } from "react";
import {
	EBranchPalette,
	TColor,
} from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import { DaySquareWrapper } from "@components/atoms/calendar-grid/CalendarGridStyledComponents";
import dayjs from "dayjs";
import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { useBranchPaletteService } from "@hooks/useBranchPaletteService";
import { DAILY_DATE_FORMAT, TRANSPARENT_COLOR } from "@config/commonConsts";

export interface IDaySquareProps {
	branch: IBranch;
	date: dayjs.Dayjs;
}

//TODO: this must receive only color and tooltip (or tooltip props)

export const DaySquare: FC<IDaySquareProps> = (props) => {
	const { date, branch } = props;
	const { getPaletteByName, getColorByScore } = useBranchPaletteService();

	const getSquareColor = (): TColor => {
		const score = branch.getDailyScore(date);
		const palette = getPaletteByName(EBranchPalette.GREEN);
		const color = palette
			? getColorByScore(palette, score.max ? score.score / score.max : 0)
			: TRANSPARENT_COLOR;
		return color || TRANSPARENT_COLOR;
	};

	return (
		<DaySquareWrapper
			title={date.format(DAILY_DATE_FORMAT)}
			color={getSquareColor()}
		/>
	);
};
