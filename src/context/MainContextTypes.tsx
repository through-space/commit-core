import { IRepo } from "@logic/entities/Repo/RepoInterfaces";
import { TBranchID } from "@logic/entities/Branch/BranchInterfaces";

export interface IMainContextProps {
	children: any;
}

export interface IMainContext {
	// obsidianApp?: App;
	// obsidianFilesProvider?: IObsidianFilesProvider;
	currentBranchID: TBranchID | null;
	repo: IRepo | null;
}
