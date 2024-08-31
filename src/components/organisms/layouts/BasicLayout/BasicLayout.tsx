import { FC } from "react";
import { IBasicLayoutProps } from "@components/organisms/layouts/BasicLayout/BasicLayoutInterfaces";
import {
	BasicLayoutBottomComponentWrapper,
	BasicLayoutContentWrapper,
	BasicLayoutMiddleComponentWrapper,
	BasicLayoutTopComponentWrapper,
} from "@components/organisms/layouts/BasicLayout/BasicLayoutStyledComponents";
import { ComponentSwitcher } from "@components/molecules/utils/ComponentSwitcher/ComponentSwitcher";
import { CliPanel } from "@components/molecules/cards/CliPanel/CliPanel";
import { TasksView } from "@components/organisms/views/TasksView/TasksView";
import { CalendarView } from "@components/organisms/views/CalendarView/CalendarView";
import { ChildrenView } from "@components/organisms/views/ChildrenView/ChildrenView";

// TODO: This component must have all logic of default and component switcher
// TODO: Maybe navigation is here?
// Add kind of navigation to the top of the page Provider?

const defaultLayoutComponents = {
	// topComponent: [<CurrentBranchInfo/>],
	// middleComponent: [],
	// bottomComponent: [CliPanel],
};

export const BasicLayout: FC<IBasicLayoutProps> = (props) => {
	// const {
	// 	topComponents = defaultLayoutComponents.topComponent,
	// 	middleComponents = defaultLayoutComponents.middleComponent,
	// 	bottomComponents = defaultLayoutComponents.bottomComponent,
	// } = props;

	return (
		<BasicLayoutContentWrapper>
			<BasicLayoutTopComponentWrapper>
				<ComponentSwitcher>
					{/*<CurrentBranchInfo/>*/}
					<CalendarView />
				</ComponentSwitcher>
			</BasicLayoutTopComponentWrapper>
			<BasicLayoutMiddleComponentWrapper>
				<ComponentSwitcher>
					<ChildrenView />
				</ComponentSwitcher>
			</BasicLayoutMiddleComponentWrapper>
			<BasicLayoutBottomComponentWrapper>
				<CliPanel />
			</BasicLayoutBottomComponentWrapper>
		</BasicLayoutContentWrapper>
	);
};
