import { useState, useEffect } from 'react'

const useStorage = <T>(name: string, value: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [data, setData] = useState<T>(JSON.parse(localStorage.getItem(name) as string) || value);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(data))
  }, [data])

  return [data, setData]
}

export default useStorage
