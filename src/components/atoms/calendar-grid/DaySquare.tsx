import { FC } from "react";
import { useBranchPaletteService } from "@hooks/useBranchPaletteService";
import {
	EBranchPalette,
	TColor,
} from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import { TRANSPARENT_COLOR } from "@config/commonConsts";
import { DaySquareWrapper } from "@components/atoms/calendar-grid/CalendarGridStyledComponents";

export interface IDaySquareProps {
	// color: string;
	// branch: IBranch;
	// date?: dayjs.Dayjs;
}

//TODO: this must receive only color and tooltip (or tooltip props)

// export const DaySquare: FC<IDaySquareProps> = ({ branch, date, color }) => {
export const DaySquare: FC<IDaySquareProps> = () => {
	const score = Math.random();
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

	return <DaySquareWrapper color={getSquaredColor(score)} />;
};
