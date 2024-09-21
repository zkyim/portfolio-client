import { Project } from "@/types"
import qs from "query-string";
const Url = `${process.env.NEXT_PUBLIC_API_URL}/project`;

interface ProjectsProps {
    title?: string;
    description?: string;
}

export const getProjects = async (query : ProjectsProps):Promise<Project[]> => {
    const url = qs.stringifyUrl({
        url: Url,
        query: {
            title: query.title,
            description: query.description,
        }
    })
    const res = await fetch(url);
    return res.json();
}