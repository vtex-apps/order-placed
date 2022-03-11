import { useEffect, useState } from 'react'

export const useGetCustomerEmail = (email: string | undefined) => {
  const [customerEmail, setCustomerEmail] = useState<string | null>(null)
  const [customerEmailLoading, setCustomerEmailLoading] = useState<boolean>(
    true
  )

  useEffect(() => {
    if (!email) return
    const params = {
      headers: {
        credentials: 'same-origin',
      },
    }
    const query = `?_fields=customerEmail&_where=email=${email}`
    fetch(`/api/dataentities/CL/search${query}`, params)
      .then((response) => response.json())
      .catch((_) => setCustomerEmailLoading(false))
      .then((data) => {
        const [customer] = data
        setCustomerEmail(customer?.customerEmail || null)
      })
      .finally(() => setCustomerEmailLoading(false))
  }, [email])

  return { customerEmail, customerEmailLoading }
}
