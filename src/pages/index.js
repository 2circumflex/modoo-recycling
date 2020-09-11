import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/index.css'

function Index() {
  const [date, setDate] = useState(null)
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date')
      const newDate = await res.text()
      setDate(newDate)
    }
    getDate()
  }, [])
  return (
    <main>
      <Helmet>
        <title>모두의 재활용</title>
      </Helmet>
      <h1>모두의 재활용</h1>
    </main>
  )
}

export default Index
