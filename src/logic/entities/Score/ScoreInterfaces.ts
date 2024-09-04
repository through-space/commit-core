import { TCommitID } from "@logic/entities/Commit/CommitInterfaces";
import { T_DEFAULT_DATE_FORMAT } from "@config/commonConsts";
import dayjs from "dayjs";

export interface IRawScoreEntry {
	score: number;
	max: number;
	commitID: TCommitID;
}

export interface IScoreEntry {
	score: number;
	max: number;
	time: dayjs.Dayjs;
	commitID?: TCommitID;
}

export type TDailyScoreMap = Map<T_DEFAULT_DATE_FORMAT, IScoreEntry[]>;

export interface IScoreBuilderProps {
	rawObject: IRawScoreEntry;
}

export interface IScoreBuilder {
	getFromObject(props: IScoreBuilderProps): IScoreEntry;

	getEmptyScore(): IScoreEntry;
}
