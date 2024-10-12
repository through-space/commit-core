import { IRepo, IRepoBuilder } from "@logic/entities/Repo/RepoInterfaces";
import { getRepoFromObject } from "@logic/entities/Repo/RepoMethods";
import { emptyRawRepo } from "@data/templates/emptyRepo";

export const RepoBuilder: IRepoBuilder = {
	getFromRawObject: getRepoFromObject,
	dumpToRawObject: (repo: IRepo) => emptyRawRepo,
};
