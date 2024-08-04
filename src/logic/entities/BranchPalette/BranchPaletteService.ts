// import {
// 	IBranchPalette,
// 	IBranchPaletteService,
// } from "@logic/entities/BranchPalette/PaletteInterfaces";
// import { getColorByScore } from "@logic/entities/BranchPalette/BranchPaletteMethods";
//
import {
	EBranchPalette,
	IBranchPalette,
	IBranchPaletteService,
	IBranchPaletteServiceConfig,
	TBranchPaletteSet,
	TBranchPalettesMap,
	TColor,
} from "@logic/entities/BranchPalette/BranchPaletteInterfaces";
import { fullBranchPalettesMap } from "@logic/entities/BranchPalette/palettes/fullBranchPalettesMap";

const activePalettes: TBranchPalettesMap = new Map();

const init = (config: IBranchPaletteServiceConfig) => {
	populateActivePalette(config.palettes);
};

const populateActivePalette = (palettes: TBranchPaletteSet) => {
	const allPalettes = getAllPalettes();
	palettes.forEach((paletteID) => {
		const palette = allPalettes.get(paletteID);

		if (palette) {
			activePalettes.set(paletteID, palette);
		}
	});
};

const getAllPalettes = (): TBranchPalettesMap => {
	return fullBranchPalettesMap;
};

const getPaletteColors = (palette: EBranchPalette): TColor[] => {
	const paletteData = activePalettes.get(palette);
	return paletteData ? paletteData.colors : [];
};

const getActivePalettes = (): TBranchPalettesMap => {
	return activePalettes;
};

const getPaletteByName = (
	palette: EBranchPalette,
): IBranchPalette | undefined => {
	return activePalettes.get(palette);
};

//TODO: add different functions, maybe to be used as injections
//TODO: move methods somewhere else

const getColorByScore = (
	palette: IBranchPalette,
	score: number,
): TColor | null => {
	if (score === 0) {
		return null;
	}
	const { colors } = palette;
	const colorIndex = Math.floor(score * colors.length);
	return colors[colorIndex];
};

export const BranchPaletteService: IBranchPaletteService = {
	init,
	getActivePalettes,
	getPaletteColors,
	getPaletteByName,
	getColorByScore,
};
