const CategoryTag = ({children, category, selectCategory}: any) => {
  const handleClick = () => {
    selectCategory(category);  
  }
  return (
    <button onClick={()=>handleClick()} className='category-tag'>
      {children}
    </button>
  )
}

export default CategoryTag
