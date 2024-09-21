import { Skill } from "@/types"
import SkilItem from "./SkillItem"

interface SkillContainerProps {
    data: Skill[],
    label: string
}

const SkillContainer: React.FC<SkillContainerProps> = ({
    data,
    label
}) => {
  return (
    <article className='min-h-[25rem] border rounded-lg border-muted-foreground/40'>
        <h2 className='capitalize text-muted-foreground-foreground text-2xl font-semibold py-4 px-6 border-b border-muted-foreground/40'>{label}</h2>
        <div className='px-6 py-4 space-y-6'>
            {data.length === 0  && <div>There is no Item</div>}
            {data.map((item, index) => (
                <SkilItem key={index} item={item} />
            ))}
        </div>
    </article>
  )
}

export default SkillContainer
