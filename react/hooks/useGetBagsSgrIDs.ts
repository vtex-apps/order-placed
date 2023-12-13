import { useEffect, useState } from "react"

const useGetBagsSgrIDs = () => {
  const [bagsIDs, setBagsIDs] = useState<string[]>()
  const [sgrIDs, setSgrIDs] = useState<string[]>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const getSettings = () => {
      fetch('/_v/private/api/cart-bags-manager/app-settings').then(async (data) => {
        const settingsResult = await data?.json()
        const settingsData = settingsResult?.data

        const bagsIdList: string[] = Object.values(settingsData?.bagsSettings)

        const sgrSettings = settingsData?.sgrSettings
        let sgrIdList: string[] = []

        Object.keys(sgrSettings).forEach((key) => {
          const categorySkuIds = sgrSettings[key]?.skuIds
          if (categorySkuIds?.length) {
            sgrIdList = sgrIdList.concat(categorySkuIds)
          }
        })


        if (isMounted) {
          setBagsIDs(bagsIdList)
          setSgrIDs(sgrIdList)
          setIsLoading(false)
        }

      }).catch((e) => {
        console.error('fetch app setting error:', e)
        if (isMounted) {
          setIsLoading(false)
        }
      })
    }

    getSettings()

    return () => {
      isMounted = false
    }
  }, [])

  return { bagsIDs, sgrIDs, isLoading }
}

export default useGetBagsSgrIDs
