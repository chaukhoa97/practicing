import { useState } from 'react'

export default function Accordion20250109({ sections }) {
  const [openedTabTitles, setOpenedTabTitles] = useState(() => new Set())

  return (
    <div>
      {sections.map((item) => {
        const title = item.title
        const content = item.content
        const isTabOpened = openedTabTitles.has(title)
        const buttonId = `button-${title}`
        const contentId = `content-${title}`

        const handleButtonClick = () => {
          const newOpenedTabTitles = new Set(openedTabTitles)
          newOpenedTabTitles.has(title)
            ? newOpenedTabTitles.delete(title)
            : newOpenedTabTitles.add(title)

          setOpenedTabTitles(newOpenedTabTitles)
        }

        return (
          <div key={title}>
            <button
              onClick={handleButtonClick}
              className={`border border-black p-4 ${isTabOpened ? 'bg-slate-200' : ''}`}
              id={buttonId}
              aria-controls={contentId}
            >
              {title}
            </button>
            <div
              className={`${isTabOpened ? '' : 'hidden'}`}
              aria-labelledby={buttonId}
              id={contentId}
            >
              {content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
