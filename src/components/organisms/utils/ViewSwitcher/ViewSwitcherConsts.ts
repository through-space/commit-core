import { IViewSwitcherViewItem } from "@components/organisms/utils/ViewSwitcher/ViewSwitcherInterfaces";

export const getViewByIndex = (views: IViewSwitcherViewItem[], index: number):IViewSwitcherViewItem | null => {
	if (index >= views.length || index < 0) {
		return null;
	}

	return views[index];
}
