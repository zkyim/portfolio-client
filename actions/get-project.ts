import { Project } from "@/types"
const Url = `${process.env.NEXT_PUBLIC_API_URL}/project`;

interface ProjectsProps {
    projectId: string;
}

export const getProject = async ({ projectId } : ProjectsProps):Promise<Project> => {
    const res = await fetch(`${Url}/${projectId}`);
    return res.json();
}