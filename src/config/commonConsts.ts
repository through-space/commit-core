import { getCompletionRateByPercentage } from "@logic/entities/Branch/completion-methods/CompletionRateMethods";
import { testBranchPaletteSet } from "@logic/entities/BranchPalette/palettes/branchPaletteSets";
import { EBranchPalette } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";

type Year = `${number}${number}${number}${number}`;
type Month =
	| "01"
	| "02"
	| "03"
	| "04"
	| "05"
	| "06"
	| "07"
	| "08"
	| "09"
	| "10"
	| "11"
	| "12";
type Day = `${"0" | "1" | "2"}${number}` | "30" | "31";

export type T_DEFAULT_DATE_FORMAT = `${Year}-${Month}-${Day}`;

export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export const TRANSPARENT_COLOR = "unset";
export const DEFAULT_COMPLETION_RATE_METHOD = getCompletionRateByPercentage;
export const DEFAULT_MAIN_BRANCH_ID = "master";
export const DEFAULT_REPO_ID = "repoExampleObj_1";
export const DEFAULT_BRANCH_PALETTE_ID = EBranchPalette.GREEN;
export const DEFAULT_PALETTE_SET = testBranchPaletteSet;
