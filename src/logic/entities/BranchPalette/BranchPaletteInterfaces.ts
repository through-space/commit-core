export type TColor = string;

export interface IBranchPalette {
	id: EBranchPalette;
	name: string;
	colors: TColor[];
}

export enum EBranchPalette {
	GREEN = "GREEN",
	RED = "RED",
	BLUE = "BLUE",
	OCEAN = "OCEAN",
}

export type TBranchPaletteSet = Set<EBranchPalette>;

export type TBranchPalettesMap = Map<EBranchPalette, IBranchPalette>;

export interface IBranchPaletteServiceConfig {
	palettes: TBranchPaletteSet;
}

export interface IBranchPaletteService {
	getActivePalettes(): TBranchPalettesMap;

	init(config: IBranchPaletteServiceConfig): void;

	getPaletteColors(palette: EBranchPalette): TColor[];

	getPaletteByName(palette: EBranchPalette): IBranchPalette | undefined;

	//TODO: maybe add functions for score calculation
	getColorByScore(palette: IBranchPalette, score: number): TColor | null;
}
