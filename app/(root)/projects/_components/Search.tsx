"use client";
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import qs from "query-string"
import { useDebounceValue } from "usehooks-ts"
import { useRouter } from "next/navigation";

interface SearchProps {

}

const Search = ({}: SearchProps) => {
  const [valueInput, setValueInput] = useState<string>("");
  const router = useRouter();
  const debounceValue = useDebounceValue<string>(valueInput, 500);

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: `/projects`,
      query: {title: debounceValue[0], description: debounceValue[0]}
    }, {skipEmptyString: true, skipNull: true})
    router.push(url);
  }, [debounceValue, router])

  return (
    <div className="">
      <div className="flex items-center gap-5 py-3">
        <Input 
            placeholder='Search in the title or description'
            onChange={(e) => setValueInput(e.target.value)}
            className="md:w-2/3"
        />
      </div>
    </div>
  )
}

export default Search
