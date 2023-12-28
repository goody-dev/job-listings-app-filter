interface Props {
  children:string;
  category: string;
  selectCategory: (category:string)=>void;
}
const CategoryTag:React.FC<Props> = ({children, category, selectCategory}) => {
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
