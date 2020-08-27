import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons';



const Cart = (props) => {

    const course = props.countCourse;
    const total = course.reduce((total, value) => total + value.newPrice, 0)
    const roundFigure = Math.round(total);

    const shoppingCart = {
		position:"fixed",
		top: "25%",
		right: "0",
		width: "60px",
		height: "160px",
		backgroundColor: "lightGray",
		borderRadius: "5px"
	}

	const cartCount = {
		position: "absolute",
		top: "0",
		left: "12px",
		fontSize: "25px",
		color: "tomato",
		fontWeight: "bold",
	}

	const cartIcon = {
		position:"absolute",
		top: "20%",
		left: "",
		fontSize: "40px",
		color: "#007bff",
	}

	const totalAmount = {
		position:"absolute",
		top: "54%",
		left: "0",
		fontSize: "14px",
		fontWeight: "bold",
		color: "tomato"
	}
	const walletIcon = {
		position:"absolute",
		top: "68%",
		left: "2px",
		fontSize: "40px",
		color: "#007bff",
	}


    return (
        <div style={shoppingCart} className="shopping-cart">
            <span style={cartCount} className="cart-count">{course.length}</span>
            <span className="cart-icon">
                <FontAwesomeIcon style={cartIcon} icon={faShoppingCart} />
            </span>
            <span style={totalAmount} className="total-amount">$ {roundFigure}</span>
            <span className="wallet-icon">
                <FontAwesomeIcon style={walletIcon} icon={faWallet} />
            </span>
		</div>
    );
};

export default Cart;