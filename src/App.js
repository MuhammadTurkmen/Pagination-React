import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading,data} = useFetch()
  return <main>
    <div className="section-title">
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
    </div>
  </main>
}

export default App
