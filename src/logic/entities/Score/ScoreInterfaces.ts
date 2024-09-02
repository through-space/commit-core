import { TCommitID } from "@logic/entities/Commit/CommitInterfaces";
import { T_DEFAULT_DATE_FORMAT } from "@config/commonConsts";
import dayjs from "dayjs";

export interface IRawScoreEntry {
	score: number;
	max: number;
	commitID: TCommitID;
	timestamp: string;
}

export interface IScoreEntry extends IRawScoreEntry {
	time: dayjs.Dayjs;
}

export type TDailyScoreMap = Map<T_DEFAULT_DATE_FORMAT, IScoreEntry[]>;

export interface IScoreBuilderProps {
	rawObject: IRawScoreEntry;
}

export interface IScoreBuilder {
	getFromObject(props: IScoreBuilderProps): IScoreEntry;
}
