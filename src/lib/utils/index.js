/**
 *
 * @param {string} date
 * @param {Intl.DateTimeFormatOptions['dateStyle']} dateStyle
 * @param {string} locales
 * @returns
 */
export function formatDate(date, dateStyle = 'medium', locales = 'zh-CN') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'))
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle })
	return dateFormatter.format(dateToFormat)
}
