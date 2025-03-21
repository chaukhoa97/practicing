import { useState, useEffect, useRef, useCallback } from 'react'

const USERS = [
  {
    id: 1,
    name: 'Emily Chen',
    age: 28,
    occupation: 'Software Engineer',
  },
  {
    id: 2,
    name: 'Ryan Thompson',
    age: 32,
    occupation: 'Marketing Manager',
  },
  {
    id: 3,
    name: 'Sophia Patel',
    age: 25,
    occupation: 'Data Analyst',
  },
  {
    id: 4,
    name: 'Michael Lee',
    age: 41,
    occupation: 'CEO',
  },
  {
    id: 5,
    name: 'Olivia Brown',
    age: 29,
    occupation: 'Graphic Designer',
  },
  {
    id: 6,
    name: 'Alexander Hall',
    age: 38,
    occupation: 'Sales Representative',
  },
  {
    id: 7,
    name: 'Isabella Davis',
    age: 26,
    occupation: 'Teacher',
  },
  {
    id: 8,
    name: 'Ethan White',
    age: 35,
    occupation: 'Lawyer',
  },
  {
    id: 9,
    name: 'Lily Tran',
    age: 30,
    occupation: 'Nurse',
  },
  {
    id: 10,
    name: 'Julian Sanchez',
    age: 39,
    occupation: 'Engineer',
  },
  {
    id: 11,
    name: 'Ava Martin',
    age: 27,
    occupation: 'Journalist',
  },
  {
    id: 12,
    name: 'Benjamin Walker',
    age: 42,
    occupation: 'Doctor',
  },
  {
    id: 13,
    name: 'Charlotte Brooks',
    age: 31,
    occupation: 'HR Manager',
  },
  {
    id: 14,
    name: 'Gabriel Harris',
    age: 36,
    occupation: 'IT Consultant',
  },
  {
    id: 15,
    name: 'Hannah Taylor',
    age: 24,
    occupation: 'Student',
  },
  {
    id: 16,
    name: 'Jackson Brown',
    age: 40,
    occupation: 'Business Owner',
  },
  {
    id: 17,
    name: 'Kayla Lewis',
    age: 33,
    occupation: 'Event Planner',
  },
  {
    id: 18,
    name: 'Logan Mitchell',
    age: 37,
    occupation: 'Architect',
  },
  {
    id: 19,
    name: 'Mia Garcia',
    age: 29,
    occupation: 'Artist',
  },
  {
    id: 20,
    name: 'Natalie Hall',
    age: 34,
    occupation: 'Teacher',
  },
  {
    id: 21,
    name: 'Oliver Patel',
    age: 38,
    occupation: 'Software Developer',
  },
  {
    id: 22,
    name: 'Penelope Martin',
    age: 26,
    occupation: 'Writer',
  },
  {
    id: 23,
    name: 'Quinn Lee',
    age: 35,
    occupation: 'Entrepreneur',
  },
  {
    id: 24,
    name: 'Rachel Kim',
    age: 30,
    occupation: 'Dentist',
  },
  {
    id: 25,
    name: 'Samuel Jackson',
    age: 42,
    occupation: 'Lawyer',
  },
  {
    id: 26,
    name: 'Tessa Hall',
    age: 28,
    occupation: 'Graphic Designer',
  },
  {
    id: 27,
    name: 'Uma Patel',
    age: 39,
    occupation: 'Marketing Manager',
  },
  {
    id: 28,
    name: 'Vincent Brooks',
    age: 36,
    occupation: 'IT Consultant',
  },
  {
    id: 29,
    name: 'Walter White',
    age: 41,
    occupation: 'Engineer',
  },
  {
    id: 30,
    name: 'Xavier Sanchez',
    age: 33,
    occupation: 'Sales Representative',
  },
  {
    id: 31,
    name: 'Yvonne Martin',
    age: 29,
    occupation: 'Teacher',
  },
  {
    id: 32,
    name: 'Zoe Lee',
    age: 27,
    occupation: 'Data Analyst',
  },
  {
    id: 33,
    name: 'Abigail Brown',
    age: 34,
    occupation: 'Nurse',
  },
  {
    id: 34,
    name: 'Caleb Harris',
    age: 38,
    occupation: 'Business Owner',
  },
  {
    id: 35,
    name: 'Diana Taylor',
    age: 31,
    occupation: 'Event Planner',
  },
  {
    id: 36,
    name: 'Eleanor Walker',
    age: 40,
    occupation: 'CEO',
  },
]

const DataTable = ({ data = HOUSES }) => {
  const columns = Object.keys(data[0])
  const [itemPerPage, setItemPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const startIdx = (currentPage - 1) * itemPerPage
  const endIdx = startIdx + itemPerPage
  const pageCount = Math.ceil(data.length / itemPerPage)

  return (
    <div>
      <div className="flex items-center gap-4">
        <form>
          <select
            className="border border-black p-2"
            name="item-per-page"
            value={itemPerPage}
            onChange={(e) => {
              const gapBetweenValues = itemPerPage / +e.target.value
              const normalizedValue = Math.floor(
                gapBetweenValues > 1 ? 1 - gapBetweenValues : 0,
              )

              setCurrentPage(
                Math.ceil(currentPage * gapBetweenValues + normalizedValue),
              )
              setItemPerPage(+e.target.value)
            }}
          >
            <option value={5}>Show 5</option>
            <option value={10}>Show 10</option>
            <option value={15}>Show 15</option>
          </select>
        </form>
        <button
          className="border border-black p-1 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        Page {currentPage} of {pageCount}
        <button
          className="border border-black p-1 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageCount}
        >
          Next
        </button>
      </div>
      <table>
        <caption>Users</caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col[0].toUpperCase() + col.substring(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(startIdx, endIdx).map((instance) => (
            <tr key={instance.id}>
              {Object.values(instance).map((value) => (
                <td key={value}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable

const HOUSES = [
  {
    id: 1,
    street: '123 Maple St',
    city: 'Springfield',
    state: 'IL',
    zip: '62704',
    built_year: 1990,
  },
  {
    id: 2,
    street: '456 Oak St',
    city: 'Lincoln',
    state: 'NE',
    zip: '68510',
    built_year: 1985,
  },
  {
    id: 3,
    street: '789 Pine St',
    city: 'Madison',
    state: 'WI',
    zip: '53703',
    built_year: 2000,
  },
  {
    id: 4,
    street: '101 Cedar St',
    city: 'Columbus',
    state: 'OH',
    zip: '43215',
    built_year: 1978,
  },
  {
    id: 5,
    street: '102 Elm St',
    city: 'Dover',
    state: 'DE',
    zip: '19901',
    built_year: 1995,
  },
  {
    id: 6,
    street: '103 Birch St',
    city: 'Salem',
    state: 'OR',
    zip: '97301',
    built_year: 1980,
  },
  {
    id: 7,
    street: '104 Spruce St',
    city: 'Albany',
    state: 'NY',
    zip: '12207',
    built_year: 1965,
  },
  {
    id: 8,
    street: '105 Walnut St',
    city: 'Hartford',
    state: 'CT',
    zip: '06103',
    built_year: 1992,
  },
  {
    id: 9,
    street: '106 Chestnut St',
    city: 'Raleigh',
    state: 'NC',
    zip: '27601',
    built_year: 1988,
  },
  {
    id: 10,
    street: '107 Ash St',
    city: 'Bismarck',
    state: 'ND',
    zip: '58501',
    built_year: 1975,
  },
  {
    id: 11,
    street: '108 Willow St',
    city: 'Richmond',
    state: 'VA',
    zip: '23219',
    built_year: 1982,
  },
  {
    id: 12,
    street: '109 Poplar St',
    city: 'Jackson',
    state: 'MS',
    zip: '39201',
    built_year: 2005,
  },
  {
    id: 13,
    street: '110 Fir St',
    city: 'Montgomery',
    state: 'AL',
    zip: '36104',
    built_year: 1999,
  },
  {
    id: 14,
    street: '111 Cypress St',
    city: 'Little Rock',
    state: 'AR',
    zip: '72201',
    built_year: 1983,
  },
  {
    id: 15,
    street: '112 Sycamore St',
    city: 'Tallahassee',
    state: 'FL',
    zip: '32301',
    built_year: 1998,
  },
  {
    id: 16,
    street: '113 Redwood St',
    city: 'Atlanta',
    state: 'GA',
    zip: '30303',
    built_year: 2003,
  },
  {
    id: 17,
    street: '114 Palm St',
    city: 'Boise',
    state: 'ID',
    zip: '83702',
    built_year: 1989,
  },
  {
    id: 18,
    street: '115 Hickory St',
    city: 'Frankfort',
    state: 'KY',
    zip: '40601',
    built_year: 1972,
  },
  {
    id: 19,
    street: '116 Magnolia St',
    city: 'Baton Rouge',
    state: 'LA',
    zip: '70801',
    built_year: 1993,
  },
  {
    id: 20,
    street: '117 Dogwood St',
    city: 'Annapolis',
    state: 'MD',
    zip: '21401',
    built_year: 1984,
  },
  {
    id: 21,
    street: '118 Juniper St',
    city: 'Boston',
    state: 'MA',
    zip: '02108',
    built_year: 2001,
  },
  {
    id: 22,
    street: '119 Maple St',
    city: 'Lansing',
    state: 'MI',
    zip: '48933',
    built_year: 1976,
  },
  {
    id: 23,
    street: '120 Oak St',
    city: 'St. Paul',
    state: 'MN',
    zip: '55101',
    built_year: 1994,
  },
  {
    id: 24,
    street: '121 Pine St',
    city: 'Jefferson City',
    state: 'MO',
    zip: '65101',
    built_year: 1987,
  },
  {
    id: 25,
    street: '122 Cedar St',
    city: 'Helena',
    state: 'MT',
    zip: '59601',
    built_year: 1991,
  },
  {
    id: 26,
    street: '123 Elm St',
    city: 'Concord',
    state: 'NH',
    zip: '03301',
    built_year: 1971,
  },
  {
    id: 27,
    street: '124 Birch St',
    city: 'Trenton',
    state: 'NJ',
    zip: '08608',
    built_year: 1996,
  },
  {
    id: 28,
    street: '125 Spruce St',
    city: 'Santa Fe',
    state: 'NM',
    zip: '87501',
    built_year: 1981,
  },
  {
    id: 29,
    street: '126 Walnut St',
    city: 'Albany',
    state: 'NY',
    zip: '12207',
    built_year: 2006,
  },
  {
    id: 30,
    street: '127 Chestnut St',
    city: 'Columbus',
    state: 'OH',
    zip: '43215',
    built_year: 1979,
  },
  {
    id: 31,
    street: '128 Ash St',
    city: 'Oklahoma City',
    state: 'OK',
    zip: '73102',
    built_year: 1997,
  },
  {
    id: 32,
    street: '129 Willow St',
    city: 'Salem',
    state: 'OR',
    zip: '97301',
    built_year: 1986,
  },
  {
    id: 33,
    street: '130 Poplar St',
    city: 'Harrisburg',
    state: 'PA',
    zip: '17101',
    built_year: 1974,
  },
  {
    id: 34,
    street: '131 Fir St',
    city: 'Providence',
    state: 'RI',
    zip: '02903',
    built_year: 2002,
  },
  {
    id: 35,
    street: '132 Cypress St',
    city: 'Columbia',
    state: 'SC',
    zip: '29201',
    built_year: 1985,
  },
  {
    id: 36,
    street: '133 Sycamore St',
    city: 'Pierre',
    state: 'SD',
    zip: '57501',
    built_year: 1990,
  },
  {
    id: 37,
    street: '134 Redwood St',
    city: 'Nashville',
    state: 'TN',
    zip: '37219',
    built_year: 2004,
  },
  {
    id: 38,
    street: '135 Palm St',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    built_year: 1998,
  },
  {
    id: 39,
    street: '136 Hickory St',
    city: 'Salt Lake City',
    state: 'UT',
    zip: '84101',
    built_year: 1977,
  },
  {
    id: 40,
    street: '137 Magnolia St',
    city: 'Montpelier',
    state: 'VT',
    zip: '05602',
    built_year: 1992,
  },
  {
    id: 41,
    street: '138 Dogwood St',
    city: 'Richmond',
    state: 'VA',
    zip: '23219',
    built_year: 1983,
  },
  {
    id: 42,
    street: '139 Juniper St',
    city: 'Olympia',
    state: 'WA',
    zip: '98501',
    built_year: 1999,
  },
  {
    id: 43,
    street: '140 Maple St',
    city: 'Charleston',
    state: 'WV',
    zip: '25301',
    built_year: 1973,
  },
  {
    id: 44,
    street: '141 Oak St',
    city: 'Madison',
    state: 'WI',
    zip: '53703',
    built_year: 2000,
  },
  {
    id: 45,
    street: '142 Pine St',
    city: 'Cheyenne',
    state: 'WY',
    zip: '82001',
    built_year: 1981,
  },
  {
    id: 46,
    street: '143 Cedar St',
    city: 'Juneau',
    state: 'AK',
    zip: '99801',
    built_year: 1995,
  },
  {
    id: 47,
    street: '144 Elm St',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
    built_year: 1970,
  },
  {
    id: 48,
    street: '145 Birch St',
    city: 'Denver',
    state: 'CO',
    zip: '80201',
    built_year: 2003,
  },
]
