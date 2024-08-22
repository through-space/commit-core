import { IRepo, IRepoRawObject } from "@logic/entities/Repo/RepoInterfaces";

export const emptyRawRepo: IRepoRawObject = {
	id: "empty_repo_1",
	branches: [],
	commits: [],
	connections: [],
};

export const emptyRepo: IRepo = {
	id: "empty_repo_1",
	raw: emptyRawRepo,
	getBranchByID: () => undefined,
	getConnectionByID: () => undefined,
};
