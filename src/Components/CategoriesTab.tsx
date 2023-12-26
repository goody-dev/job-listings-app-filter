import CategoryTab from "../Utilities/CategoryTab";

interface CategoriesTabComponent {
  categories: string[];
  unselectCategories: any;
}
const CategoriesTab:React.FC<CategoriesTabComponent> = ({categories, unselectCategories}) => {
  return (
    <div className='categories-tab'>
      <div className="tab-categories-div">
        {categories.map((category:string, id:number) => <CategoryTab key={id} category={category} unselectCategories={unselectCategories}/>)}
      </div>
      <button id="clear-button">Clear</button>
    </div>
  )
}

export default CategoriesTab
