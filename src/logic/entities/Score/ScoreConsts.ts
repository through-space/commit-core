import { IScoreBuilder } from "@logic/entities/Score/ScoreInterfaces";
import { getScoreFromObject } from "@logic/entities/Score/ScoreMethods";

export const ScoreBuilder: IScoreBuilder = {
	getFromObject: getScoreFromObject,
};
