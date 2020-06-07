import Axios from 'axios'
import { useEffect, useState } from 'react'

const useAjaxLoading = requestUrl => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchUrl = async url => {
      setLoading(true)
      const result = await Axios.get(url)
      setLoading(false)
    }
    fetchUrl(requestUrl)
  }, [])

  return [loading, data]
}

export default useAjaxLoading
