import { DEFAULT_REPO_ID } from "@config/commonConsts";
import { IRepo, IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";

export const emptyRawRepo: IRepoRawObject = {
	id: DEFAULT_REPO_ID,
	branches: [],
	commits: [],
	connections: [],
	mainBranchID: "",
};

export const emptyRepo: IRepo = {
	branches: [],
	commits: [],
	connections: [],
	id: "empty_repo_1",
	mainBranchID: "",
};
