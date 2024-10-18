import {
	IBranch,
	ISourceBranchProps,
} from "@logic/entities/Branch/BranchInterfaces";
import { Dispatch } from "react";
import { TRepoAction } from "@reducers/repo/repoReducerInterfaces";

export interface IChildrenViewButtonPanelProps {
	sourceProps?: ISourceBranchProps;
}

export interface ISetNewChildConnectionProps {
	sourceProps: ISourceBranchProps;
	childBranch: IBranch;
	repoDispatch: Dispatch<TRepoAction>;
}
