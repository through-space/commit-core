import { IScoreBuilder } from "@logic/entities/Score/ScoreInterfaces";
import { getScoreFromObject } from "@logic/entities/Score/ScoreMethods";
import dayjs from "dayjs";

export const ScoreBuilder: IScoreBuilder = {
	getFromObject: getScoreFromObject,
	getEmptyScore: () => {
		return {
			time: dayjs(),
			score: 0,
			max: 0,
		};
	},
};
