import {
	EStorageProviderType,
	IStorageProvider,
	IStorageProviderConfig,
	IStorageProviderFactory
} from "./StorageProviderInterfaces";
import {JsonStorageProvider} from "@services/StorageProvider/providers/JsonRepoProvider";

const getStorageProviderByType = (storageProviderType: EStorageProviderType): IStorageProvider => {
	switch (storageProviderType) {
		case EStorageProviderType.JSON:
			return JsonStorageProvider;
		case EStorageProviderType.MOCKUP:
			return JsonStorageProvider;
		default:
			throw new Error("Invalid repo provider type");
	}
}

export const StorageProviderFactory: IStorageProviderFactory = {
	getStorageProvider: (config: IStorageProviderConfig) => {
		return getStorageProviderByType(config.type);
	},
}
