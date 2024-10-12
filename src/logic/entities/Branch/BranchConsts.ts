import {
	createBranchID,
	dumpBranchToRawObject,
	getBranchFromObject,
} from "@logic/entities/Branch/BranchMethods";
import { IBranchBuilder } from "@logic/entities/Branch/BranchInterfaces";
import { emptyBranch } from "@data/templates/emptyBranch";

export const BranchBuilder: IBranchBuilder = {
	getFromObject: getBranchFromObject,
	getEmptyBranch: (repo) => {
		return { ...emptyBranch, id: createBranchID() };
	},
	dumpToRawObject: dumpBranchToRawObject,
};
