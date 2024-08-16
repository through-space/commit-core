import { emptyRepo } from "@data/emptyRepo";
import { IRepo, TRepoID } from "@logic/entities/Repo/RepoInterfaces";
import { IStorageProvider } from "@services/StorageProvider/StorageProviderInterfaces";
import { repoExampleJson } from "@data/repoExampleJson";
import { getRepoFromObject } from "@logic/entities/Repo/RepoConsts";

export const JsonStorageProvider: IStorageProvider = {
	async getRepo(repoID: TRepoID) {
		const json = repoExampleJson;
		if (!json) {
			return Promise.resolve(emptyRepo);
		}

		return Promise.resolve(JSON.parse(json)).then((allRepos) => {
			const repo = allRepos.find((repo: IRepo) => repo.id === repoID);

			if (!repo) {
				return emptyRepo;
			}

			return getRepoFromObject(repo);
		});
	},
	async saveRepo(repo: IRepo) {
		const json = repoExampleJson;
		const allRepos = json ? JSON.parse(json) : [];
		const repoIndex = allRepos.findIndex((r: IRepo) => r.id === repo.id);

		if (repoIndex === -1) {
			allRepos.push(repo);
		} else {
			allRepos[repoIndex] = repo;
		}

		// const newJson = JSON.stringify(allRepos);
	},
};
