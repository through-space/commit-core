import dayjs from "dayjs";

export const MONTH_KEY_FORMAT = "YYYY-MM";
const MID_WEEK_POSITION = 4;

export const getWeekMonthKey = (weekStartDate: dayjs.Dayjs): string => {
	const firstMonth = weekStartDate.format(MONTH_KEY_FORMAT);
	const testDay = weekStartDate.add(MID_WEEK_POSITION, "day");
	const testDayMonth = testDay.format(MONTH_KEY_FORMAT);

	return firstMonth === testDayMonth ? firstMonth : testDayMonth;
};

export const getMonthWeekNumMap = (
	startDate: dayjs.Dayjs,
	endDate: dayjs.Dayjs,
): Map<string, number> => {
	const monthsWeeksMap = new Map<string, number>();
	let date = startDate.clone();
	while (date.isBefore(endDate)) {
		const monthKey = getWeekMonthKey(date);
		console.log(monthKey);
		const monthWeeks = monthsWeeksMap.get(monthKey) || 0;
		monthsWeeksMap.set(monthKey, monthWeeks + 1);

		date = date.add(7, "day");
	}

	return monthsWeeksMap;
};
