import {
	createBranchID,
	getBranchFromObject,
} from "@logic/entities/Branch/BranchMethods";
import { IBranchBuilder } from "@logic/entities/Branch/BranchInterfaces";

export const BranchBuilder: IBranchBuilder = {
	getFromObject: getBranchFromObject,
	getEmptyBranch: (repo) => {
		return getBranchFromObject({
			rawObject: {
				id: createBranchID(),
				name: "",
			},
			repo,
		});
	},
};
