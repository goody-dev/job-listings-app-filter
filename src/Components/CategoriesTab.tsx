import CategoryTab from "../Utilities/CategoryTab";

interface Props {
  categories: string[];
  unselectCategories: (category?:string)=>void;
  clearCategories: ()=>void;
}
const CategoriesTab:React.FC<Props> = ({categories, unselectCategories, clearCategories}) => {
  return (
    <div className='categories-tab'>
      <div className="tab-categories-div">
        {categories.map((category:string, id:number) => <CategoryTab key={id} category={category} unselectCategories={unselectCategories}/>)}
      </div>
      <button id="clear-button" onClick={()=>clearCategories()}>Clear</button>
    </div>
  )
}

export default CategoriesTab
