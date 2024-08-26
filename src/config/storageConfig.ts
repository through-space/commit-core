import { EStorageProviderType } from "@services/StorageProvider/StorageProviderInterfaces";

export interface IStorageConfig {
	read: EStorageProviderType;
	write: EStorageProviderType;
}

export const activeStorageProviders: IStorageConfig = {
	read: EStorageProviderType.MOCKUP,
	write: EStorageProviderType.LOCAL_STORAGE,
};
