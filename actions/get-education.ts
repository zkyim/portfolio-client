import { Education } from "@/types"
const Url = `${process.env.NEXT_PUBLIC_API_URL}/education`;

export const getEducation = async ():Promise<Education[]> => {
    const res = await fetch(Url);
    return res.json();
}