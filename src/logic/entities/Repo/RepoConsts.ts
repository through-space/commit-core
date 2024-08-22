import { IRepoBuilder } from "@logic/entities/Repo/RepoInterfaces";
import { getRepoFromObject } from "@logic/entities/Repo/RepoMethods";

export const RepoBuilder: IRepoBuilder = {
	getFromRawObject: getRepoFromObject,
};
