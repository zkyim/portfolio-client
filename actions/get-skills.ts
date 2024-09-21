import { Skill } from "@/types"
const Url = `${process.env.NEXT_PUBLIC_API_URL}/skill`;

export const getSkills = async ():Promise<Skill[]> => {
    const res = await fetch(Url);
    return res.json();
}