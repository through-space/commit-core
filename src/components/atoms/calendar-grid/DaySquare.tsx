import { FC } from "react";
import { TColor } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import { DaySquareWrapper } from "@components/atoms/calendar-grid/CalendarGridStyledComponents";
import dayjs from "dayjs";

export interface IDaySquareProps {
	// color: string;
	// branch: IBranch;
	date: dayjs.Dayjs;
}

//TODO: this must receive only color and tooltip (or tooltip props)

// export const DaySquare: FC<IDaySquareProps> = ({ branch, date, color }) => {
export const DaySquare: FC<IDaySquareProps> = (props) => {
	const score = Math.random();
	const { date } = props;
	// const { getPaletteByName, getColorByScore } = useBranchPaletteService();
	//
	const getSquaredColor = (score: number): TColor => {
		return "red";
		// 	const palette = getPaletteByName(EBranchPalette.GREEN);
		// 	const color = palette
		// 		? getColorByScore(palette, score)
		// 		: TRANSPARENT_COLOR;
		// 	return color || TRANSPARENT_COLOR;
	};

	return (
		<DaySquareWrapper
			title={date.format("YYYY-MM-DD")}
			color={getSquaredColor(score)}
		/>
	);
};
