import { useEffect, useState } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { getEndpoints } from '../utils/functions'

export const useGetCustomerEmail = (email: string | undefined) => {
  const { account } = useRuntime()
  const { clientsApiUrl } = getEndpoints(account)
  const [customerEmail, setCustomerEmail] = useState<string | null>(null)
  const [customerEmailLoading, setCustomerEmailLoading] = useState<boolean>(
    true
  )

  useEffect(() => {
    if (!email) return
    const headers = new Headers()
    headers.append('Cookie', document?.cookie)
    const params: RequestInit = {
      headers,
      credentials: 'include',
    }
    const query = `?_fields=customerEmail&_where=email=${email}`
    fetch(`${clientsApiUrl}/${query}`, params)
      .then((response) => response.json())
      .catch((_) => setCustomerEmailLoading(false))
      .then((data) => {
        const [customer] = data?.data || []
        setCustomerEmail(customer?.customerEmail || null)
      })
      .finally(() => setCustomerEmailLoading(false))
  }, [email])

  return { customerEmail, customerEmailLoading }
}
