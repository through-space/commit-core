import { IBranchConnectionBuilder } from "@logic/entities/Connection/ConnectionInterfaces";
import { getBranchConnectionFromObject } from "@logic/entities/Connection/ConnectionBuilderMethods";

export const ConnectionBuilder: IBranchConnectionBuilder = {
	getFromObject: getBranchConnectionFromObject,
};
