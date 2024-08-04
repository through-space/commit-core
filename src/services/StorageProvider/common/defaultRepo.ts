import {IRepo} from "@logic/entities/Repo/Repo";
import {createBranchID, getBranch} from "./repoMethods";

export const defaultRepo: IRepo = {
	id: "",
	branches: {},
	mainBranchID: "",
	getBranch,
	createBranchID,
};
