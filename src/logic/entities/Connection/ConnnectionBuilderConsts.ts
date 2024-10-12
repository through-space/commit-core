import { IBranchConnectionBuilder } from "@logic/entities/Connection/ConnectionInterfaces";
import { emptyConnection } from "@data/templates/emptyConnection";
// import { getBranchConnectionFromObject } from "@logic/entities/Connection/ConnectionBuilderMethods";

export const ConnectionBuilder: IBranchConnectionBuilder = {
	getFromObject: (rawEntity) => emptyConnection,
	// getFromObject: getBranchConnectionFromObject,
};
