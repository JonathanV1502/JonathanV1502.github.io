import type { Education } from '$lib/types/education';

export const educations: Education[] = [
	{
		id: '1',
		school: 'Texas State University',
		degree: 'Bachelor of Science',
		major: 'Computer Science',
		minor: 'Applied Mathematics',
		location: 'San Marcos, TX',
		startDate: new Date(2020, 7, 15),
		endDate: new Date(2024, 4, 15)
	}
];
