import {IRepo, TRepoID} from "@logic/entities/Repo/Repo";

export enum EStorageProviderType {
	JSON = "JSON",
	MOCKUP = "MOCKUP",
	OBSIDIAN = "OBSIDIAN"
}

export interface IStorageProviderProps {
	type: EStorageProviderType;
	getRepo: (repoID: TRepoID) => Promise<IRepo>
}

// export interface IJsonStorageProviderProps extends IStorageProviderProps {
// 	path: string;
// }

// export interface IMockupStorageProviderProps extends IStorageProviderProps {
// 	repo: IRepo;
// }

export type IObsidianStorageProviderProps = IStorageProviderProps


export interface IStorageProviderConfig {
	type: EStorageProviderType;
}

export interface IStorageProvider {
	getRepo: (repoID: TRepoID) => Promise<IRepo>
}

export interface IStorageProviderFactory {
	getStorageProvider: (config: IStorageProviderConfig) => IStorageProvider
}
