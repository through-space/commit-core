import { IBranch, TBranchID } from "@logic/entities/Branch/BranchInterfaces";
import { IRepo } from "@logic/entities/Repo/RepoInterfaces";

export interface IBranchEditFormProps {
	branchID?: TBranchID;
	// sourceProps?: ISourceBranchProps;
	onRemove?: (branchID: TBranchID) => void;
	onSave?: (branch: IBranch) => void;
	onCancel?: () => void;
	onError?: (error: string) => void;
}

export interface IGetFormBranchProps {
	repo: IRepo;
	branchID?: TBranchID;
}
