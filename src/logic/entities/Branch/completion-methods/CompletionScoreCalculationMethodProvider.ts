import {
	CompletionScoreCalculationMethodsMap,
	ECompletionScoreCalculationMethod,
	ICompletionScoreCalculationMethodProvider
} from "./CompletionScoreCalculationMethodTypes";
import {DEFAULT_COMPLETION_RATE_METHOD} from "@config/commonConsts";

export const CompletionScoreCalculationMethodProvider: ICompletionScoreCalculationMethodProvider = {
	getByMethodName: (methodName: ECompletionScoreCalculationMethod) => {
		const method = CompletionScoreCalculationMethodsMap.get(methodName);
		return method || DEFAULT_COMPLETION_RATE_METHOD;
	}
};
