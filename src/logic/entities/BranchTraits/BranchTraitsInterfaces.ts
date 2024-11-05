/*
 Types:
    - If commited add metric: daily score /
 */

import { IMetric } from "@logic/entities/Metric/MetricInterfaces";

export enum EBranchTraitsType {
	SCORE = "score",
}

export interface IBranchTrait {
	type: EBranchTraitsType;
}

export interface IUpdateScoreBranchTrait extends IBranchTrait {
	type: EBranchTraitsType.SCORE;
	score: number;
	metric: IMetric;
}

/*
    Types:
    - If commited 
 */
