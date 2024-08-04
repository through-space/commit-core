import { IBranch } from "@logic/entities/Branch/Branch";
import { CompletionScoreCalculationMethodProvider } from "@logic/entities/Branch/completion-methods/CompletionScoreCalculationMethodProvider";
import { getConnections } from "@logic/methods/branchMethods";
import { ECompletionScoreCalculationMethod } from "@logic/entities/Branch/completion-methods/CompletionScoreCalculationMethodTypes";
import { DEFAULT_BRANCH_PALETTE_ID } from "@config/commonConsts";

export const defaultBranch: IBranch = {
	id: "",
	name: "",
	connections: [],
	commits: {},
	palette: DEFAULT_BRANCH_PALETTE_ID,
	contributionValue: 0,
	getCompletionScore:
		CompletionScoreCalculationMethodProvider.getByMethodName(
			ECompletionScoreCalculationMethod.PERCENTAGE,
		),
	getConnections,
};
