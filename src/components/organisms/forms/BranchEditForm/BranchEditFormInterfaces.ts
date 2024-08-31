import { IBranch } from "@logic/entities/Branch/BranchInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export interface IBranchEditFormProps {
	branch: IBranch;
	parent?: IBranch;
	onClose: () => void;
}

export interface ISaveBranchProps {
	branch: IBranch;
	parent?: IBranch;
	repo: IRepo;
}
