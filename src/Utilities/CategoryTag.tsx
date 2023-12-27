const CategoryTag = ({children, category, selectCategory}: any) => {
  
  return (
    <button onClick={()=>selectCategory(category)} className='category-tag'>
      {children}
    </button>
  )
}

export default CategoryTag
