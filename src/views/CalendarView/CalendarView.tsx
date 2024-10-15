import { FC } from "react";
import { CalendarGrid } from "@components/molecules/cards/CalendarGrid/CalendarGrid";
import {
	CalendarViewContentWrapper,
	CalendarViewTopComponentWrapper,
	CalendarViewWrapper,
} from "./CalendarViewStyledComponents";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import { EmptyPage } from "@pages/common/EmptyPage";
import { useCurrentBranch } from "@hooks/useCurrentBranch";
import { HomeButton } from "@components/atoms/buttons/HomeButton/HomeButton";
import { ChildrenViewButtonPanel } from "@components/organisms/button-panels/ChildrenViewButtonPanel/ChildrenViewButtonPanel";
import { DownloadRepoButton } from "@components/molecules/buttons/DownloadRepoButton/DownloadRepoButton";

export const CalendarView: FC = () => {
	const branch = useCurrentBranch();

	if (!branch) {
		return (
			<>
				<ChildrenViewButtonPanel />
				<EmptyPage />
			</>
		);
	}

	dayjs.extend(weekday);
	const endDay = dayjs();
	let startDay = dayjs().subtract(1, "year");
	const startWeekDay = startDay.weekday();

	startDay = startDay.subtract(startWeekDay, "days");

	//TODO: add option for month/week range

	return (
		<CalendarViewWrapper>
			<CalendarViewTopComponentWrapper>
				<div>
					<HomeButton />
					<DownloadRepoButton />
				</div>
				<div>{branch.name}</div>
			</CalendarViewTopComponentWrapper>
			<CalendarViewContentWrapper>
				<CalendarGrid startDate={startDay} endDate={endDay} />
			</CalendarViewContentWrapper>
		</CalendarViewWrapper>
	);
};
