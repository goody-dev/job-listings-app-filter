import React from 'react'

const StatusTag = ({children}: any) => {
  return (
    <div className={children === "New!"? 'new-tag':'feature-tag'}>
      {children}
    </div>
  )
}

export default StatusTag
