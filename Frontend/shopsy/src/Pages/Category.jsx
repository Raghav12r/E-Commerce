import React, { useContext } from 'react'
import './Css/Category.css'
import { ShopContext } from '../Context/Context'
import Items from '../Components/Items/Items';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Category(props) {
  const {itemdata} = useContext(ShopContext);
  return (
    <>
      <div className='category'>
        <img src={props.banner} alt=''></img>
      </div>
      <div className="desc">
          <p><span>Showing 1-9 entries</span>out of 20 products</p>
          <div className="drop-down">
            Sort by <ArrowDropDownIcon/>
          </div>
      </div>
      <div className="catducts">
        {
               itemdata.map((item,i)=>{
               if(props.cat===item.category)
               {
                  return <Items key={i} id={item.id} title={item.title} price={item.price} image={item.image} old_price={item.old_price}/>
               }
               else{
                 return null;
               }
           })
        }
      </div>
      <div className="loadmore">
          Explore More
      </div>
    </>
  )
}

export default Category
