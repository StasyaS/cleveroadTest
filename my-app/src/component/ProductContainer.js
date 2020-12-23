import React, {Component} from "react";
import ProductItem from "./ProductItem";
import Timer from "./component/Timer";

export default class ProductContainer extends Component {
    render() {
        console.log('Props----. ', this.props)
        return(
            <div>
                {this.props.propducts && this.props.propducts.map(item => {
                    return <ProductItem item={item} />
                })}
                {this.props.propducts && this.props.propducts.map(item => {
                    return <Timer item={item.end_date} />
                })}
            </div>
        )
    }
}