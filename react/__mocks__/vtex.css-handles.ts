export const useCssHandles = (arr: string[]) =>
  arr.reduce<any>((acc, item) => {
    acc[item] = item
    return acc
  }, {})

export const applyModifiers = (handle: string, mods: string | string[]) => {
  const splittedHandle = handle.split(' ')
  if (!Array.isArray(mods)) mods = [mods]

  return splittedHandle.concat(
    splittedHandle.map(handle =>
      (mods as string[]).map(mod => handle + '--' + mod).join(' ')
    )
  )
}
