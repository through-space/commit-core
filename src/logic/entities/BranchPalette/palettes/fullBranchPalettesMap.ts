import { EBranchPalette, TBranchPalettesMap } from "../BranchPaletteInterfaces";
import { createPalette } from "@logic/entities/BranchPalette/methods/constructors";

console.log("fullBranchPalettesMap.ts");

export const fullBranchPalettesMap: TBranchPalettesMap = new Map([
	[
		EBranchPalette.RED,
		createPalette(EBranchPalette.RED, "red", [
			"#330000",
			"#660000",
			"#990000",
			"#CC0000",
			"#FF0000",
		]),
	],
	[
		EBranchPalette.GREEN,
		createPalette(EBranchPalette.GREEN, "green", [
			"#003300",
			"#006600",
			"#009900",
			"#00CC00",
			"#00FF00",
		]),
	],
	[
		EBranchPalette.BLUE,
		createPalette(EBranchPalette.BLUE, "blue", [
			"#000033",
			"#000066",
			"#000099",
			"#0000CC",
			"#0000FF",
		]),
	],
	[
		EBranchPalette.OCEAN,
		createPalette(EBranchPalette.OCEAN, "ocean", [
			"#003333",
			"#006666",
			"#009999",
			"#00CCCC",
			"#00FFFF",
		]),
	],
]);
