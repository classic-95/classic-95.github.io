const getFormatNumber = (num: number) => (num < 10 ? `0${num}` : num);

const dateFormatter = (rawDate: string) => {
	const raw = new Date(rawDate);

	const year = raw.getUTCFullYear() % 100;
	const month = raw.getMonth() + 1;
	const date = raw.getDate();
	const hour = raw.getHours();
	const minute = raw.getMinutes();

	const fullDate = `${getFormatNumber(year)}.${getFormatNumber(month)}.${getFormatNumber(
		date,
	)} ${getFormatNumber(hour)}:${getFormatNumber(minute)}`;

	return fullDate;
};

export default dateFormatter;
