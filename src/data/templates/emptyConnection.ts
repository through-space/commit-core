import {
	EBranchConnectionType,
	IBranchConnection,
} from "@logic/entities/Connection/ConnectionInterfaces";

export const emptyConnection: IBranchConnection = {
	id: "",
	type: EBranchConnectionType.PARENT_CHILD,
	members: [],
};
