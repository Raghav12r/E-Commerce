import React, { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null);

const initialcart = () => {
    let cart = {};
    for (let index = 0; index < 501; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartdata, setcartdata] = useState(initialcart());
    const [itemdata, setItemdata] = useState([]);
    const [offerdata, setOfferdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/allitems').then((res) => res.json()).then((data) => {
            setItemdata(data);
            if(data.old_price!=null)
            {
                setOfferdata(data);
            }
        })

        if (localStorage.getItem('auth')) {
            fetch('http://localhost:8000/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth': `${localStorage.getItem('auth')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            }).then((res) => res.json()).then((data) => setcartdata(data));
        }
    }, []);

    console.log(itemdata)

    const addtocart = (Id) => {
        setcartdata((prev) => ({ ...prev, [Id]: prev[Id] + 1 }));

        if (localStorage.getItem('auth')) {
            fetch('http://localhost:8000/addincart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth': `${localStorage.getItem('auth')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": Id })
            }).then((res) => res.json()).then((data) => console.log(data));
        }
    }

    const removefromcart = (Id) => {
        setcartdata((prev) => ({ ...prev, [Id]: prev[Id] - 1 }));

        if (localStorage.getItem('auth')) {
            fetch('http://localhost:8000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth': `${localStorage.getItem('auth')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "Id": Id })
            }).then((res) => res.json()).then((data) => console.log(data));
        }
    }

    const totalprice = () => {
        let amountnet = 0;
        {
            itemdata.map((e) => {
                if (cartdata[e.id] > 0) {
                    amountnet += e.price * cartdata[e.id];
                }
            })
        }
        return amountnet;
    }

    const totalitems = () => {
        let totalitem = 0;
        {
            itemdata.map((e) => {
                if (cartdata[e.id] > 0) {
                    totalitem += cartdata[e.id];
                }
            })
        }
        return totalitem;
    }

    const offer = () => {
        {
            itemdata.map((e) => {
                return e.old_price != e.price;
            })
        }
    }
    const contextvalue = { itemdata, cartdata, addtocart, removefromcart, totalprice, totalitems, offer,offerdata};
    return <ShopContext.Provider value={contextvalue}>
        {props.children}
    </ShopContext.Provider>
}

export default ShopContextProvider;


