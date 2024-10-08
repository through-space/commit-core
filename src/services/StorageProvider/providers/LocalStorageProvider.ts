import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { emptyRawRepo } from "@data/templates/emptyRepo";

export const getLocalStorageKey = (repoID: string) => `repo_${repoID}`;

export const LocalStorageProvider: IStorageProvider = {
	getRepo: async (repoID) => {
		const localStorageKey = getLocalStorageKey(repoID);
		const json = localStorage.getItem(localStorageKey);
		if (!json) {
			return emptyRawRepo;
		}

		return JSON.parse(json);
	},
	saveRepo: async (repo) => {
		const localStorageKey = getLocalStorageKey(repo.id);
		localStorage.setItem(
			localStorageKey,
			JSON.stringify(repo.dumpToRawObject()),
		);
	},
};
