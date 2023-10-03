// https://www.greatfrontend.com/questions/user-interface/accordion
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { cn } from '../../util'

export default function Accordion({ sections }) {
  const [openSections, setOpenSections] = useState(new Set())

  return sections.map((d) => {
    const isOpen = openSections.has(d.title)

    return (
      <div key={d.title}>
        {d.title}{' '}
        <button
          onClick={() => {
            const newOpenSections = new Set(openSections)
            isOpen
              ? newOpenSections.delete(d.title)
              : newOpenSections.add(d.title)
            setOpenSections(newOpenSections)
          }}
        >
          <LuChevronDown className={cn('inline', isOpen && 'rotate-180')} />
        </button>
        <div className={cn(!isOpen && 'hidden')}>{d.content}</div>
      </div>
    )
  })
}
