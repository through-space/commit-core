import {IBranchCompletionScoreCalculationMethod} from "../BranchInterfaces";
import {getCompletionRateByPercentage} from "./CompletionRateMethods";

export enum ECompletionScoreCalculationMethod {
	PERCENTAGE = "PERCENTAGE",
	AVERAGE = "AVERAGE",
	AT_LEAST_ONE = "AT_LEAST_ONE",
}

export interface ICompletionScoreCalculationMethodProvider {
	getByMethodName: (methodName: ECompletionScoreCalculationMethod) => IBranchCompletionScoreCalculationMethod;
}

export const CompletionScoreCalculationMethodsMap = new Map<ECompletionScoreCalculationMethod, IBranchCompletionScoreCalculationMethod>(
	[
		[ECompletionScoreCalculationMethod.PERCENTAGE, getCompletionRateByPercentage]
	]
);
