import React, {Component} from "react";
ProductItem webkitConvertPointFromNodeToPage

export default class ProductItem extends Component {
    render() {
        return(
            <div>
                <div>
                    <img src={this.props.item.pic1} />
                </div>
                <h2> {this.props.item.name}</h2>
                <h5>{this.props.item.price}</h5>
                <h4>{this.props.item.end_date}</h4>
                <h5>{this.props.item.describption}</h5>
                <h5>{this.props.item.daysEndSale}</h5>
            </div>
        )
    }
}