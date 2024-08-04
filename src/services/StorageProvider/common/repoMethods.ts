import {IRepo} from "@logic/entities/Repo/Repo";
import {TBranchID} from "@logic/entities/Branch/BranchInterfaces";
import {IBranch} from "@logic/entities/Branch/Branch";

export function getBranch(this: IRepo, branchID: TBranchID): IBranch | null {
	return this.branches[branchID] || null;
}

export function createBranchID(this: IRepo): TBranchID {
	return `branch-${Object.keys(this.branches).length}`;
}
