import React, { useContext} from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropDown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span> Out Of 36 Products
        </p>
        <div className="shop-category-sort">
          Sort By <img src={dropDown_icon} alt='' />
        </div>
      </div>
      <div className="shop-category-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category)
          {
            return (
            < Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
            />)
          }
          else
          {
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        More
      </div>
    </div>
  )
}

