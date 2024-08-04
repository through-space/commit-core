import {
	EBranchPalette,
	IBranchPalette,
	TBranchPaletteSet,
} from "@logic/entities/BranchPalette/BranchPaletteInterfaces";

export const createPalette = (
	id: EBranchPalette,
	name: string,
	colors: string[],
): IBranchPalette => ({
	id,
	name,
	colors,
});

export const createPaletteSet = (
	palettes: EBranchPalette[],
): TBranchPaletteSet => {
	return new Set<EBranchPalette>(palettes);
};
