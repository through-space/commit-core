import { FC } from "react";
import { IBasicLayoutProps } from "@components/organisms/layouts/BasicLayout/BasicLayoutInterfaces";
import {
	BasicLayoutBottomComponentWrapper,
	BasicLayoutContentWrapper,
	BasicLayoutMiddleComponentWrapper,
	BasicLayoutTopComponentWrapper,
} from "@components/organisms/layouts/BasicLayout/BasicLayoutStyledComponents";
import { ViewSwitcher } from "@components/organisms/utils/ViewSwitcher/ViewSwitcher";
import { CliPanel } from "@components/molecules/cards/CliPanel/CliPanel";
import { TasksView } from "@components/organisms/views/TasksView/TasksView";
import { CalendarView } from "@components/organisms/views/CalendarView/CalendarView";
import { ChildrenView } from "@components/organisms/views/ChildrenView/ChildrenView";
import { EViewKeys } from "@components/organisms/views/viewsInterfaces";

// TODO: This component must have all logic of default and component switcher
// TODO: Maybe navigation is here?
// Add kind of navigation to the top of the page Provider?

export const BasicLayout: FC<IBasicLayoutProps> = (props) => {
	const topViews = [
		{ key: EViewKeys.CALENDAR, renderView: () => <CalendarView /> },
	];

	const middleViews = [
		{ key: EViewKeys.CHILDREN, renderView: () => <ChildrenView /> },
		{ key: EViewKeys.TASKS, renderView: () => <TasksView /> },
	];

	return (
		<BasicLayoutContentWrapper>
			<BasicLayoutTopComponentWrapper>
				<ViewSwitcher views={topViews} />
			</BasicLayoutTopComponentWrapper>
			<BasicLayoutMiddleComponentWrapper>
				<ViewSwitcher views={middleViews} />
			</BasicLayoutMiddleComponentWrapper>
			<BasicLayoutBottomComponentWrapper>
				<CliPanel />
			</BasicLayoutBottomComponentWrapper>
		</BasicLayoutContentWrapper>
	);
};
