import { IRepo, IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";

export const emptyRawRepo: IRepoRawObject = {
	id: "empty_repo_1",
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
