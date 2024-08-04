import { BranchPaletteService } from "@logic/entities/BranchPalette/BranchPaletteService";
import { useEffect, useState } from "react";
import {
	IBranchPaletteService,
	IBranchPaletteServiceConfig,
	TBranchPaletteSet,
} from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import { DEFAULT_PALETTE_SET } from "@config/commonConsts";

export interface IUseBranchPaletteServiceProps {
	palettesSet?: TBranchPaletteSet;
}

// TODO: loads twice

export const useBranchPaletteService = (
	props: IUseBranchPaletteServiceProps,
) => {
	console.log("useBranchPaletteService");
	const { palettesSet = DEFAULT_PALETTE_SET } = props;

	const [service, setService] =
		useState<IBranchPaletteService>(BranchPaletteService);

	useEffect(() => {
		console.log("useBranchPaletteService: useEffect");
		console.log("useBranchPaletteService: palettesSet", palettesSet);
		const config: IBranchPaletteServiceConfig = {
			palettes: palettesSet,
		};
		const service = BranchPaletteService;
		service.init(config);
		setService(service);
	}, [palettesSet]);

	return service;
};
