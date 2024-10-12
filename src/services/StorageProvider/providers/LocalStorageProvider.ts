import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { emptyRawRepo } from "@data/templates/emptyRepo";
import { RepoBuilder } from "@logic/entities/Repo/RepoConsts";

export const getLocalStorageKey = (repoID: string) => `repo_${repoID}`;

export const LocalStorageProvider: IStorageProvider = {
	getRepo: async (repoID) => {
		const json = localStorage.getItem(getLocalStorageKey(repoID));
		if (!json) {
			return emptyRawRepo;
		}

		return JSON.parse(json);
	},
	saveRepo: async (repo) => {
		const localStorageKey = getLocalStorageKey(repo.id);
		localStorage.setItem(
			localStorageKey,
			JSON.stringify(RepoBuilder.dumpToRawObject(repo)),
			// JSON.stringify(emptyRawRepo),
		);
	},
};
