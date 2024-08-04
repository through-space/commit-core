import * as dayjs from "dayjs";

export type TBranchID = string;

export interface IBranchCompletionScoreCalculationMethod {
	(date?: dayjs.Dayjs): number;
}

export interface IDoCommitProps {
	message: string;
	value?: number;
}
