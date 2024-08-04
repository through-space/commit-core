import {IRepo, IRepoRawObject} from "@logic/entities/Repo/Repo";
import {defaultRepo} from "@services/StorageProvider/common/defaultRepo";
import {buildBranch} from "@services/StorageProvider/common/buildBranch";

export const getRepoFromObject = (rawRepo: IRepoRawObject): IRepo => {
	const repo: IRepo = {
		...defaultRepo,
		id: rawRepo.id,
		mainBranchID: rawRepo.mainBranchID,
	};

	for (const branchID in rawRepo.branches) {
		repo.branches[branchID] = buildBranch(rawRepo.branches[branchID]);
	}

	return repo;
}

