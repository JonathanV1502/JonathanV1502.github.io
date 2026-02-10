// Date formatting utilities for work experience

type DateInput = Date | string;

/**
 * Format a date to readable string in short format (e.g., "Jan 2022")
 * @param date - Date object or ISO string
 */
export function formatDate(date: DateInput): string {
	const d = typeof date === 'string' ? new Date(date) : date;

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'short'
	};

	return d.toLocaleDateString('en-US', options);
}

/**
 * Calculate difference in months between two dates
 */
function differenceInMonths(startDate: Date, endDate: Date): number {
	const yearDiff = endDate.getFullYear() - startDate.getFullYear();
	const monthDiff = endDate.getMonth() - startDate.getMonth();
	return yearDiff * 12 + monthDiff;
}

/**
 * Calculate duration between two dates as human-readable string
 * @param startDate - Start date
 * @param endDate - End date (defaults to now if not provided)
 */
export function calculateDuration(startDate: DateInput, endDate?: DateInput | null): string {
	const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
	const end = endDate ? (typeof endDate === 'string' ? new Date(endDate) : endDate) : new Date();

	const totalMonths = differenceInMonths(start, end);
	const years = Math.floor(totalMonths / 12);
	const months = totalMonths % 12;

	const parts: string[] = [];

	if (years > 0) {
		parts.push(`${years} year${years > 1 ? 's' : ''}`);
	}

	if (months > 0) {
		parts.push(`${months} month${months > 1 ? 's' : ''}`);
	}

	return parts.join(' ') || '1 month';
}
