import {
	IBranch,
	IBranchRawObject,
} from "@logic/entities/Branch/BranchInterfaces";

export const emptyRawBranch: IBranchRawObject = {
	id: "",
	name: "",
	connectionIDs: [],
};

export const emptyBranch: IBranch = {
	id: "",
	name: "",
	connectionIDs: [],
};
