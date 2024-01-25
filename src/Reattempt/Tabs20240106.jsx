import { useState } from 'react'

export default function Tabs20240106({ sections }) {
  const [selectedTabTitle, setSelectedTabTitle] = useState('')

  return (
    <div className="m-2" role="tablist">
      {sections.map((section) => {
        const { title, content } = section
        const isSelected = title === selectedTabTitle
        const tabId = `tab-${title}`
        const tabPanelId = `tab-panel-${title}`

        return (
          <div key={title}>
            <button
              className={`border border-black p-2 ${
                isSelected ? 'bg-gray-200' : ''
              }`}
              onClick={() => setSelectedTabTitle(title)}
              role="tab"
              id={tabId}
              aria-selected={isSelected}
              aria-controls={tabPanelId}
            >
              {title}
            </button>
            <p
              role="tabpanel"
              hidden={!isSelected}
              id={tabPanelId}
              aria-labelledby={tabId}
            >
              {content}
            </p>
          </div>
        )
      })}
    </div>
  )
}
