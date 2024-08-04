import {FC} from "react";
import {IBasicLayoutProps} from "@components/organisms/layouts/BasicLayout/BasicLayoutInterfaces";
import {
	BasicLayoutBottomComponentWrapper,
	BasicLayoutContentWrapper, BasicLayoutMiddleComponentWrapper,
	BasicLayoutTopComponentWrapper
} from "@components/organisms/layouts/BasicLayout/BasicLayoutStyledComponents";
import {ComponentSwitcher} from "@components/molecules/utils/ComponentSwitcher/ComponentSwitcher";
import {CurrentBranchInfo} from "@components/molecules/cards/CurrentBranchInfo/CurrentBranchInfo";
import {CliPanel} from "@components/molecules/cards/CliPanel/CliPanel";
import {TasksView} from "@components/organisms/views/TasksView/TasksView";

// TODO: This component must have all logic of default and component switcher
// TODO: Maybe navigation is here?
// Add kind of navigation to the top of the page Provider?

const defaultLayoutComponents = {
	// topComponent: [<CurrentBranchInfo/>],
	// middleComponent: [],
	// bottomComponent: [CliPanel],
}

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
					<CurrentBranchInfo/>
				</ComponentSwitcher>
			</BasicLayoutTopComponentWrapper>
			<BasicLayoutMiddleComponentWrapper>
				<ComponentSwitcher>
					<TasksView/>
				</ComponentSwitcher>
			</BasicLayoutMiddleComponentWrapper>
			<BasicLayoutBottomComponentWrapper>
				<CliPanel/>
			</BasicLayoutBottomComponentWrapper>
		</BasicLayoutContentWrapper>
	);
};
