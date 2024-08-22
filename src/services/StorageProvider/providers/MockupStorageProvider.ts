import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { repoExampleObj } from "@data/repoExampleObj";

export const MockupStorageProvider: IStorageProvider = {
	getRepo: async (repoID) => {
		return repoExampleObj;
	},
	saveRepo: async (repo) => {},
};
