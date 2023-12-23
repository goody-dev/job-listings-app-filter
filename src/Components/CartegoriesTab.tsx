import CartegoryTab from "../Utilities/CartegoryTab";

const CartegoriesTab = () => {
  const selCart: string[] = ["Frontend", "React", "Midweight", "CSS", "ROR"]
  return (
    <div className='cartegories-tab'>
      <div className="tab-cartegories-div">
        {selCart.map((cartegory:string, id) => <CartegoryTab key={id} cartegory={cartegory} />)}
      </div>
      <button id="clear-button">Clear</button>
    </div>
  )
}

export default CartegoriesTab
