// https://www.greatfrontend.com/questions/user-interface/accordion
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { cn } from '../../util'

export default function Accordion({ sections }) {
  // Using Set because certainly we won't have repeated titles, better performance, and the methods are more intuitive
  const [expandedSections, setExpandedSections] = useState(() => new Set())

  const handleAccordionClick = (isExpanded, item) => {
    const newExpandedSections = new Set(expandedSections)
    isExpanded
      ? newExpandedSections.delete(item.title)
      : newExpandedSections.add(item.title)
    setExpandedSections(newExpandedSections)
  }

  return (
    <div>
      {sections.map((item) => {
        const isExpanded = expandedSections.has(item.title)
        const headerId = `accordion-header-${item.title}`
        const panelId = `accordion-panel-${item.title}`

        return (
          <div
            key={item.title}
            className="border-b border-black p-2 last:border-none"
          >
            <button
              className="flex w-full items-center justify-between hover:bg-slate-200"
              onClick={() => handleAccordionClick(isExpanded, item)}
              id={headerId}
              aria-controls={panelId}
              aria-expanded={isExpanded}
            >
              <span className="font-bold">{item.title}</span>{' '}
              <LuChevronDown className={cn(isExpanded && 'rotate-180')} />
            </button>
            <div id={panelId} aria-labelledby={headerId} hidden={!isExpanded}>
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}
