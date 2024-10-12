import { ReactNode } from "react";
import { EViewKeys } from "../../../../views/viewsInterfaces";

export interface IViewSwitcherViewItem {
	key: EViewKeys;
	renderView: () => ReactNode;
}

export interface IViewSwitcherProps {
	initViewKey?: EViewKeys;
	views: IViewSwitcherViewItem[];
}
