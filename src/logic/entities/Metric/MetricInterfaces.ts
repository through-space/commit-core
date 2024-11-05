export enum EMetricType {
	DAILY_SCORE = "daily_score",
	COMPLETION_SCORE = "completion_score",
}

export interface IMetric {
	type: EMetricType;
}
