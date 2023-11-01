import { useState } from 'react'

export default function Tabs({ sections }) {
  const [activeTab, setActiveTab] = useState(sections?.[0]?.title)

  return sections?.length > 0 ? (
    <section className="p-2">
      <div className="mb-8" role="tablist">
        {sections.map((s) => {
          const tabSectionId = `tab-section-${s.title}`
          const tabPanelId = `tab-panel-${s.title}`
          const isActive = activeTab === s.title

          return (
            <button
              key={s.title}
              className={`mr-4 border border-black p-2 ${
                isActive ? 'border-red-500' : null
              }`}
              onClick={() => setActiveTab(s.title)}
              id={tabSectionId}
              aria-controls={tabPanelId}
              aria-selected={isActive}
            >
              {s.title}
            </button>
          )
        })}
      </div>
      <div>
        {sections.map((s) => {
          const tabSectionId = `tab-section-${s.title}`
          const tabPanelId = `tab-panel-${s.title}`

          return (
            <p
              key={s.title}
              hidden={activeTab !== s.title}
              role="tabpanel"
              id={tabPanelId}
              aria-labelledby={tabSectionId}
            >
              {s.content}
            </p>
          )
        })}
      </div>
    </section>
  ) : null
}
