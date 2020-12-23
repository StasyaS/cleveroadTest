import './App.css';
import ProductContainer from "./component/ProductContainer";
import Timer from "./component/Timer";

let url = "/img/";
let end_date = {
    "full_year": "2020",
    "month": "12",
    "day": "28",
    "hours": "23",
    "minutes": "59",
    "seconds": "59"
}
let cards = [
    {
        pic1: url+'mikki1.png',
        name: 'товар1' ,
        describption: "yy1",
        price : 44 ,
        sale : end_date, //цену со скидкой (отображать в случае если скидочный период не закончен);
        daysEndSale: 0,     // (отображать в случае если скидочный период не закончен)
    },
    {
        pic2: 'url',
        name: 'товар2' ,
        describption: "yy1",
        price : 44,
        daysEndSale: 0,
    },
    {
        pic3: 'url',
        name: 'товар3' ,
        describption: "yy1",
        price : 77,
        daysEndSale: 0,
    }
]

function App() {
  return (
    <div className="App">
      <ProductContainer propducts={cards} title='ЗАГОЛОВОК'/>
      <Timer sale={cards.price} title='Timer'/>
    </div>
  );
}

export default App;
