import React, { FC, useState, ReactNode } from 'react'
import { IconCaretDown, IconCaretUp } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'attachmentWrapper',
  'attachmentHeader',
  'attachmentTitle',
  'attachmentToggleWrapper',
  'attachmentToggleButton',
  'attachmentToggleLabel',
  'attachmentContent',
]

interface Props {
  content: (string | ReactNode)[]
  beforeTitleLabel?: string | ReactNode
  titleLabel: string | ReactNode
  toggleLabel?: string | ReactNode
}

const AttachmentAccordion: FC<Props> = ({
  beforeTitleLabel,
  titleLabel,
  toggleLabel,
  content,
}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [isOpen, setIsOpen] = useState(false)

  const filteredContent = content.filter(Boolean)
  const hasContent = filteredContent.length > 0

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== ' ' && e.key !== 'Enter') {
      return
    }
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${handles.attachmentWrapper} mt7 bg-muted-5 br2`}>
      <div
        className={`${handles.attachmentHeader} flex pa5 justify-between items-center pv4`}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen(!isOpen)}
      >
        {beforeTitleLabel}
        <span className={`${handles.attachmentTitle} c-on-base`}>
          {titleLabel}
        </span>
        <div className={`${handles.attachmentToggleWrapper} flex items-center`}>
          <div className={`${handles.attachmentToggleLabel} mr5`}>
            {toggleLabel}
          </div>
          {hasContent && (
            <div
              className={`${handles.attachmentToggleButton} c-action-primary ml5`}
            >
              {isOpen ? <IconCaretUp /> : <IconCaretDown />}
            </div>
          )}
        </div>
      </div>
      {hasContent && (
        <div hidden={!isOpen} className="ph5 pv3">
          {filteredContent.map((line, i) => (
            <div
              key={i}
              className={`${handles.attachmentContent} mb4 c-muted-1`}
            >
              {line}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AttachmentAccordion
