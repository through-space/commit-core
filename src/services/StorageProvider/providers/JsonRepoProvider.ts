import {emptyRepo} from "@data/emptyRepo";
import {IRepo, TRepoID} from "@logic/entities/Repo/Repo";
import {IStorageProvider} from "@services/StorageProvider/StorageProviderInterfaces";
import {repoExampleJson} from "@data/repoExampleJson";
import {getRepoFromObject} from "@services/StorageProvider/common/buildRepo";

export const JsonStorageProvider: IStorageProvider = {
	async getRepo(repoID: TRepoID) {
		const json = repoExampleJson;
		if (!json) {
			return Promise.resolve(emptyRepo);
		}

		return Promise.resolve(JSON.parse(json)).then(allRepos => {
			const repo = allRepos.find((repo: IRepo) => repo.id === repoID);

			if (!repo) {
				return emptyRepo;
			}

			return getRepoFromObject(repo);
		});
	}
}
