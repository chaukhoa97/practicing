import { useState } from 'react'

export default function Tabs({ sections }) {
  const [selectedTabTitle, setSelectedTabTitle] = useState(sections?.[0]?.title)

  return sections?.length > 0 ? (
    <section
      className="p-2"
      onKeyDown={(e) => {
        const activeTabId = document.activeElement.getAttribute('id')
        // Only respond to these interactions if an accordion title is in focus.
        if (activeTabId == null) return

        const sectionCount = sections.length

        const activeTabTitle = activeTabId.split('tab-section-')[1]
        const activeTabIndex = sections.findIndex(
          (section) => section.title === activeTabTitle,
        )

        const nextActiveTabIndex =
          activeTabIndex === sectionCount - 1 ? 0 : activeTabIndex + 1
        const previousActiveTabIndex =
          activeTabIndex === 0 ? sectionCount - 1 : activeTabIndex - 1

        const nextActiveTabId = `tab-section-${sections[nextActiveTabIndex].title}`
        const previousActiveTabId = `tab-section-${sections[previousActiveTabIndex].title}`

        const nextActiveTab = document.querySelector(`#${nextActiveTabId}`)
        const previousActiveTab = document.querySelector(
          `#${previousActiveTabId}`,
        )

        const lastTabId = `tab-section-${sections.at(-1).title}`
        const firstTabId = `tab-section-${sections[0].title}`
        const lastTab = document.querySelector(`#${lastTabId}`)
        const firstTab = document.querySelector(`#${firstTabId}`)

        switch (e.code) {
          case 'ArrowLeft':
            previousActiveTab.focus()
            break
          case 'ArrowRight':
            nextActiveTab.focus()
            break
          case 'Home':
            firstTab.focus()
            break
          case 'End':
            lastTab.focus()
            break
          default:
            return
        }
      }}
    >
      <div className="mb-8" role="tablist">
        {sections.map((s) => {
          const tabSectionId = `tab-section-${s.title}`
          const tabPanelId = `tab-panel-${s.title}`
          const isActive = selectedTabTitle === s.title

          return (
            <button
              key={s.title}
              className={`mr-4 border border-black p-2 ${
                isActive ? 'border-red-500' : null
              }`}
              onClick={() => setSelectedTabTitle(s.title)}
              id={tabSectionId}
              role="tab"
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
              hidden={selectedTabTitle !== s.title}
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
