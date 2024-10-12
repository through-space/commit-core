import { IRepoBuilder } from "@logic/entities/Repo/RepoInterfaces";
import {
	dumpRepoToRawObject,
	getRepoFromObject,
} from "@logic/entities/Repo/RepoMethods";

export const RepoBuilder: IRepoBuilder = {
	getFromRawObject: getRepoFromObject,
	dumpToRawObject: dumpRepoToRawObject,
};
