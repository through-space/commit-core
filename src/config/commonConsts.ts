import { getCompletionRateByPercentage } from "@logic/entities/Branch/completion-methods/CompletionRateMethods";
import { testBranchPaletteSet } from "@logic/entities/BranchPalette/palettes/branchPaletteSets";
import { EBranchPalette } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";

export const commitKeyDateFormat = "YYYY-MM-DD";
export const DEFAULT_COMPLETION_RATE_METHOD = getCompletionRateByPercentage;
export const DEFAULT_MAIN_BRANCH_ID = "master";
export const DEFAULT_REPO_ID = "JsonTestRepo";
export const DEFAULT_BRANCH_PALETTE_ID = EBranchPalette.GREEN;
export const DEFAULT_PALETTE_SET = testBranchPaletteSet;
