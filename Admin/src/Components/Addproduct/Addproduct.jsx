import React, { useState } from 'react'
import './Addproduct.css'
import uploadimage from '../../assets/icons8-cloud-upload-100.png'

function Addproduct() {
  const [image,setimage]=useState(false);
  const [info,setinfo]=useState({
     title:"",
     image:"",
     category:"fashion-women/",
     price:"",
     old_price:""
  })
  const imagechange=(e)=>{
      setimage(e.target.files[0]);
  }
  const detail=(e)=>{
      setinfo({...info,[e.target.name]:e.target.value});
  }
  const additem=async()=>{
     console.log(info);

     let finalresponse;
     let item=info;

     let formData=new FormData();
     formData.append('product',image);

     await fetch('http://localhost:8000/upload',{
         method:'POST',
         headers:{
             Accept:'application/json',
         },
         body:formData,
     }).then((res)=> res.json()).then((data)=>{finalresponse=data});

     if(finalresponse.success)
     {
         item.image=finalresponse.image_url;
         console.log(item);
         await fetch('http://localhost:8000/add_product',{
            method:'POST',
            headers:{
                 Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
         }).then((res)=> res.json()).then((data)=>{
            data.success?alert("Product added"):alert("Failed");
         })
     }

  }
  return (
    <div className='addproduct'>
         <div className="addinfo">
              <p>Product title</p>
              <input value={info.title} onChange={detail} type='text' name='title' placeholder='Type here'/>
         </div>
         <div className="addprice">
             <div className="addinfo">
                 <p>Product Price</p>
                 <input value={info.old_price} onChange={detail} type='text' name='old_price' placeholder='Type here'/>
             </div>
             <div className="addinfo">
                 <p>Offer Price</p>
                 <input value={info.price} onChange={detail} type='text' name='price' placeholder='Type here'/>
             </div>
         </div>
         <div className="addinfo">
              <p>Product Category</p>
              <select value={info.category} onChange={detail} name='category' className='add-category'>
                  <option value="fashion-women/">Women</option>
                  <option value="fashion-men">Men</option>
                  <option value="fashion-kids">Kids</option>
              </select>
         </div>
         <div className="addinfo">
            <label htmlFor='file-input'>
               <img src={image?URL.createObjectURL(image):uploadimage} className='uploadimg' alt=''/>
            </label>
            <input onChange={imagechange} type='file' name='image' id='file-input' hidden/>
         </div>
         <button onClick={()=>{additem()}} className='addbtn'>ADD</button>
    </div>
  )
}

export default Addproduct
