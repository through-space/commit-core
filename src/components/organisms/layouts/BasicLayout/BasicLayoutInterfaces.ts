import {ReactNode} from "react";

export interface IBasicLayoutProps {
	topComponents?: ReactNode[] | null;
	middleComponents?: ReactNode[] | null;
	bottomComponents?: ReactNode[] | null;
}
