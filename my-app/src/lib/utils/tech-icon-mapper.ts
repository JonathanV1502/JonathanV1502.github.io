/**
 * Tech icon mapping for inline SVG components
 * Maps display technology names to Svelte component constructors
 */
import type { Component } from 'svelte';
import  * as techIcons from '$lib/components/icons/tech-icons';

type TechIconComponent = Component<{ size?: number; class?: string }>;

const TECH_ICON_MAP: Record<string, TechIconComponent> = {
	TypeScript: techIcons.TypeScriptIcon,
	React: techIcons.ReactIcon,
	Docker: techIcons.DockerIcon,
	AWS: techIcons.AwsIcon,
	JavaScript: techIcons.JavaScriptIcon,
	Git: techIcons.GitIcon,
	GitHub: techIcons.GitHubIcon,
	HTML: techIcons.HtmlIcon,
	CSS: techIcons.CssIcon,
	MySQL: techIcons.MySqlIcon,
	Java: techIcons.JavaIcon,
	Python: techIcons.PythonIcon,
	PyTorch: techIcons.PyTorchIcon,
	TensorFlow: techIcons.TensorFlowIcon,
	Unity: techIcons.UnityIcon,
	'C#': techIcons.CSharpIcon,
	Ruby: techIcons.RubyIcon,
	JAX: techIcons.JaxIcon,
	'scikit-learn': techIcons.ScikitLearnIcon,
	NumPy: techIcons.NumpyIcon
};

/**
 * Gets the icon component for a given technology name
 * @param techName - Technology name (e.g., "React", "TypeScript")
 * @returns Icon component constructor or null if not available
 */
export function getTechIcon(techName: string): TechIconComponent | null {
	return TECH_ICON_MAP[techName] ?? null;
}
