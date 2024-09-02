import { ReactNode } from "react";
import { EViewKeys } from "@components/organisms/views/viewsInterfaces";

export interface IComponentSwitcherProps {
	initView?: EViewKeys;
	children: ReactNode;
}
