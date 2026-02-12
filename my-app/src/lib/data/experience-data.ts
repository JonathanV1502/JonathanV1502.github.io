import type { WorkExperience } from '$lib/types/experience';

export const workExperiences: WorkExperience[] = [
	{
		id: '1',
		company: 'Amazon Web Services - Transcribe',
		position: 'Software Engineer I',
		location: 'Seattle, WA',
		startDate: new Date(2025, 4, 1),
		endDate: null, // Present
		description: [
			'Executed experiments to support system architecture changes to reduce compute cost by more than 30%',
			'Reduced model deployment time from 5 dev days to hours by developing model update automation',
			'Refactored code base to accommodate new models and compute requirements',
			'Triaged and resolved production incidents across on-call rotation'
		],
		technologies: [
			'AWS',
			'Java',
			'Python',
			'Ruby',
			'TypeScript',
			'Docker',
			'React',
			'HTML',
			'CSS',
			'Git'
		]
	},
	{
		id: '2',
		company: 'TXST Geo-Intelligence Lab',
		position: 'Undergraduate Research Assistant',
		location: 'San Marcos, TX',
		startDate: new Date(2023, 8, 1),
		endDate: new Date(2024, 3, 1),
		description: [
			'Published Context-Aware Implicit Neural Representation research in <a href="https://www.nature.com/articles/s41598-025-11092-w" target="_blank" rel="noopener noreferrer">Scientific Reports</a>',
			'Replicated and designed Implicit Neural Representations experiments for data compression',
			'Achieved compression rate of 55:1, results were used for lab\'s future work proposal',
			'Collaborated with doctoral student, presented our progress in weekly lab meetings',
			'Developed Deep Operator Network for physics modeling'
		],
		technologies: ['Python', 'PyTorch', 'JAX', 'scikit-learn', 'NumPy', 'Git', 'GitHub']
	},
	{
		id: '3',
		company: 'TXST Intelligent Multimodal Computing and Sensing Lab',
		position: 'Undergraduate Research Assistant',
		location: 'San Marcos, TX',
		startDate: new Date(2022, 4, 1),
		endDate: new Date(2024, 4, 1),
		description: [
			'Developed action tracking system to record Unity data in sync with biological sensors',
			'Used Unity to develop virtual reality grocery store for behavioral testing',
			'Trained faculty on biological signal capture procedures'
		],
		technologies: ['Unity', 'C#', 'Python', 'Git', 'GitHub']
	},
	{
		id: '4',
		company: 'TXST Shared Research Operations',
		position: 'Student Worker',
		location: 'San Marcos, TX',
		startDate: new Date(2022, 1, 1),
		endDate: new Date(2023, 2, 1),
		description: [
			'Operated in 8 labs e.g. Analysis Research Service Center and Advanced Prototyping Lab',
			'Coordinated with 7+ people for mechanical, electrical, and other lab projects',
			'Trained 10+ researchers on operation of lab equipment'
		],
		technologies: []
	}
];
