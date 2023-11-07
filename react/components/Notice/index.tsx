import type { ReactNode } from 'react'
import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

export const CSS_HANDLES = [
  'noticeContainer',
  'noticeInfo',
  'noticeWarning',
] as const

interface NoticeProps {
  level: string
  children: ReactNode
}

const Notice = ({ level = 'info', children }: NoticeProps) => {
  const h = useCssHandles(CSS_HANDLES)

  return (
    <div
      className={`${h.noticeContainer} ${
        level === 'info' ? h.noticeInfo : h.noticeWarning
      } `}
    >
      {children}
    </div>
  )
}

export default Notice
