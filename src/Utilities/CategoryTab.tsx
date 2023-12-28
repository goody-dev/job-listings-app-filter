interface Props {
  category:string;
  unselectCategories:(category:string)=>void;
}

const CategoryTab:React.FC<Props> = ({category, unselectCategories}) => {
  const handleClick = (category:string) => {
    unselectCategories(category);
  }
  return (
    <div className="category-tab">
      <div className="tab-category-div">{category}</div>
      <button onClick={()=>handleClick(category)} className="tab-cancel-div">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
      </button>
    </div>
  )
}

export default CategoryTab
