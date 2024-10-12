import { IBranchConnectionBuilder } from "@logic/entities/Connection/ConnectionInterfaces";
import {
	createByType,
	dumpConnectionToRawObject,
	getFromObject,
} from "@logic/entities/Connection/ConnectionBuilderMethods";

export const ConnectionBuilder: IBranchConnectionBuilder = {
	getFromObject,
	createByType,
	dumpToRawObject: dumpConnectionToRawObject,
};
