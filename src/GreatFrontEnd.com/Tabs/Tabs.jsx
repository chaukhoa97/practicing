import { useState } from 'react'

export default function Tabs({ sections }) {
  const [activeTab, setActiveTab] = useState(sections?.[0]?.title)

  return sections?.length > 0 ? (
    <section className="p-2">
      <div className="mb-8">
        {sections.map((s) => (
          <button
            key={s.title}
            className={`mr-4 border border-black p-2 ${
              activeTab === s.title ? 'border-red-500' : null
            }`}
            onClick={() => setActiveTab(s.title)}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div>
        {sections.map((s) => (
          <p key={s.title} hidden={activeTab !== s.title}>
            {s.content}
          </p>
        ))}
      </div>
    </section>
  ) : null
}
