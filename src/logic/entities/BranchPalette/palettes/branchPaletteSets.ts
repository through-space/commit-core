import { createPaletteSet } from "@logic/entities/BranchPalette/methods/constructors";
import { EBranchPalette } from "@logic/entities/BranchPalette/BranchPaletteInterfaces";

export const testBranchPaletteSet = createPaletteSet([
	EBranchPalette.GREEN,
	EBranchPalette.RED,
	EBranchPalette.BLUE,
	EBranchPalette.OCEAN,
]);
