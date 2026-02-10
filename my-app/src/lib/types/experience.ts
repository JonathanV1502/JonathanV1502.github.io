// Type definitions for work experience components

export interface WorkExperience {
	id: string;
	company: string;
	position: string;
	location?: string;
	startDate: Date | string;
	endDate?: Date | string | null; // null indicates "present"
	description: string | string[];
	technologies: string[];
}

export type TimelineLayout = 'vertical' | 'compact';
