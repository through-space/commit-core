import { EStorageProviderType } from "@services/StorageProvider/StorageProviderInterfaces";

export interface IStorageConfig {
	read: EStorageProviderType;
	write: EStorageProviderType;
}

export const activeStorageProviders: IStorageConfig = {
	read: EStorageProviderType.LOCAL_STORAGE,
	write: EStorageProviderType.LOCAL_STORAGE,
};
