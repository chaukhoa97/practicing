import { useState } from 'react'

export default function Accordion20231221({ sections }) {
  const [activeTitles, setActiveTitles] = useState(new Set())

  return (
    <div className="m-2">
      {sections.map((section) => {
        const { title, content } = section
        const isActived = activeTitles.has(title)

        const handleHeaderClick = () => {
          const newActiveTitles = new Set(activeTitles)
          if (isActived) newActiveTitles.delete(title)
          else newActiveTitles.add(title)
          setActiveTitles(newActiveTitles)
        }

        const headerId = `header-${title}`
        const panelId = `panel-${title}`

        return (
          <div key={title}>
            <button
              className="border border-black p-2"
              onClick={handleHeaderClick}
              id={headerId}
              aria-controls={panelId}
              aria-expanded={isActived}
            >
              {title}
            </button>
            <div hidden={!isActived} id={panelId} aria-labelledby={headerId}>
              {content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
