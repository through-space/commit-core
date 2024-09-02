import {
	IScoreBuilderProps,
	IScoreEntry,
} from "@logic/entities/Score/ScoreInterfaces";
import dayjs from "dayjs";

export const getScoreFromObject = (props: IScoreBuilderProps): IScoreEntry => {
	const { rawObject } = props;
	const { timestamp } = rawObject;
	return {
		...rawObject,
		time: dayjs(timestamp),
	};
};
