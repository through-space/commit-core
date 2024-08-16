import {
	IBuildObjectsMapProps,
	IGetEntityByIDProps,
	IInitRawObjectProps,
	TLogicEntity,
	TLogicEntityID,
} from "@logic/common/LogicEntityInterfaces";

const initRawObject = (props: IInitRawObjectProps): TLogicEntity => {
	return props.builder.getEntityFromObject({
		rawObject: props.rawObject,
		repo: props.repo,
	});
};

export const buildObjectsMap = (
	props: IBuildObjectsMapProps,
): Map<TLogicEntityID, TLogicEntity> => {
	const objectMap = new Map<TLogicEntityID, TLogicEntity>();

	props.rawObjects.forEach((rawObject) => {
		const entity = initRawObject({
			rawObject,
			builder: props.builder,
			repo: props.repo,
		});
		objectMap.set(entity.id, entity);
	});

	return objectMap;
};

export const getEntityByID = (props: IGetEntityByIDProps): TLogicEntity => {
	const entity = props.entityMap.get(props.id);
	if (!entity) {
		throw new Error(`Entity with ID ${props.id} not found`);
	}
	return entity;
};
