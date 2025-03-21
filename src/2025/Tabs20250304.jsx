import { useState, useEffect, useRef, useCallback } from 'react'
import { cn } from '../util'

export default function Tabs20250304({ sections }) {
  const [activeTabTitle, setActiveTabTitle] = useState(sections[0].title)

  return (
    <>
      {sections.map(({ title, content }) => (
        <button
          key={title}
          id={'btn-' + title}
          aria-controls={'content-' + title}
          aria-selected={title === activeTabTitle}
          onClick={() => setActiveTabTitle(title)}
          className={cn(
            'border border-black p-2',
            title === activeTabTitle && 'bg-slate-400',
          )}
        >
          {title}
        </button>
      ))}
      {sections.map(({ title, content }) => (
        <div
          key={title}
          id={'content-' + title}
          aria-labelledby={'btn-' + title}
          hidden={title !== activeTabTitle}
        >
          {content}
        </div>
      ))}
    </>
  )
}
