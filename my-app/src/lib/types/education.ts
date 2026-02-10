// Type definitions for education components

export interface Education {
	id: string;
	school: string;
	degree: string;
	major: string;
	minor?: string;
	location: string;
	startDate: Date | string;
	endDate?: Date | string | null; // null for current student
}

export type TimelineLayout = 'vertical' | 'compact';
