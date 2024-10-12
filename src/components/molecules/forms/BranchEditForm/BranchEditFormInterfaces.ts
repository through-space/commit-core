import {
	IBranch,
	ISourceBranchProps,
	TBranchID,
} from "@logic/entities/Branch/BranchInterfaces";

export interface IBranchEditFormProps {
	branchID?: TBranchID;
	sourceProps?: ISourceBranchProps;
	onSave?: (branch: IBranch) => void;
	onCancel?: () => void;
	onError?: (error: string) => void;
}
