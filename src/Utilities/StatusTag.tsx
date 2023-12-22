const StatusTag = ({children}: any) => {
  return (
    <div className={children === "NEW!"? 'new-tag':'feature-tag'}>
      {children}
    </div>
  )
}

export default StatusTag
