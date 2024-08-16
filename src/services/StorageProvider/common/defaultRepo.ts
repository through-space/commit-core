import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { createBranchID, getBranch } from "./repoMethods";

export const defaultRepo: IRepo = {
	id: "",
	branches: {},
	mainBranchID: "",
	getBranch,
	createBranchID,
};
