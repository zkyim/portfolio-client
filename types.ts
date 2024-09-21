import { LucideIcon } from "lucide-react";

export interface Education {
    id: string;
    title: string;
    description: string;
    year: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tools: string;
    githubUrl: string;
    demo: string;
    isResponsible: boolean;
    isPublic: boolean;
    published_At: string;
    createdAt: Date;
    updatedAt: Date;
    images: Image[];
}

export interface Image {
    id: string;
    isMain: boolean;
    source: string;
    projectId: string;
}

enum Category {
    FRONTEND,
    BACKEND,
    TOOL,
}

export interface Skill {
    id: string;
    tool: string;
    category: Category;
    percentage: string;
    isPublic: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface SocialLink {
    href: string;
    icon: LucideIcon;
    color: string
}

export interface Statistic {
    title: string;
    label: string;
    value: number | string;
    icon: LucideIcon
}

export interface Statistics {
    title: string;
    label: string;
    value: number | string;
    icon: LucideIcon
}

export type SkillCategory = "FRONTEND" | "BACKEND" | "TOOLS";
export interface TabItem {
    title: SkillCategory;
    value: string;
    icon: LucideIcon;
    label: string;
}