import { Loader2 } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col gap-2 items-center justify-center'>
      <Loader2 className='w-8 h-8 text-muted-foreground transition-all animate-spin'/>
    </div>
  )
}

export default loading
