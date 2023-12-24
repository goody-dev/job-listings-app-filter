import CartegoryTab from "../Utilities/CartegoryTab";

interface CartegoriesTabComponent {
  cartegories: string[];
}
const CartegoriesTab:React.FC<CartegoriesTabComponent> = ({cartegories}) => {
  return (
    <div className='cartegories-tab'>
      <div className="tab-cartegories-div">
        {cartegories.map((cartegory:string, id:number) => <CartegoryTab key={id} cartegory={cartegory} />)}
      </div>
      <button id="clear-button">Clear</button>
    </div>
  )
}

export default CartegoriesTab
