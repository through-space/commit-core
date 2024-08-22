import {
	EStorageProviderType,
	IStorageProvider,
	IStorageProviderConfig,
	IStorageProviderFactory,
} from "./StorageProviderInterfaces";
import { LocalStorageProvider } from "@services/StorageProvider/providers/LocalStorageProvider";

const getStorageProviderByType = (
	storageProviderType: EStorageProviderType,
): IStorageProvider => {
	switch (storageProviderType) {
		case EStorageProviderType.MOCKUP:
			return LocalStorageProvider;
		case EStorageProviderType.OBSIDIAN:
			return LocalStorageProvider;
		case EStorageProviderType.LOCAL_STORAGE:
			return LocalStorageProvider;
		default:
			throw new Error("Invalid repo provider type");
	}
};

export const StorageProviderFactory: IStorageProviderFactory = {
	getStorageProvider: (config: IStorageProviderConfig) => {
		return getStorageProviderByType(config.type);
	},
};
