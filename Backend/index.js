const port = 8000;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require('multer');
const path = require('path');
const cors = require("cors");
const { type } = require('os');
const { isBooleanObject } = require('util/types');
const connectDb = require('./db');
const { stringify } = require('querystring');


connectDb()
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send("Express App is running");
})

//Image storage
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"))
//Creating upload endpoint for images

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema Modelling
const Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})
const Product = mongoose.model('Product', Schema);

const user=mongoose.model('User',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartdata:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now
    }
})

app.post("/signup",async(req,res)=>{
    let verify=await user.findOne({email:req.body.email});
    if(verify)
    {
        return res.status(400).json({success:false,error:"emailId already exists"})
    }
    let cart={};
    for(let i=0;i<500;i++)
    {
        cart[i]=0;
    }
    const User=new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart,
    })

    await User.save();

    //payload
    const data={
        customer:{
            id:User.id
        }
    }
    const token=jwt.sign(data,'secret_key_shopecomm');

    res.json({success:true,token});

})

app.post('/login',async(req,res)=>{
    let check=await user.findOne({email:req.body.email});
    if(check)
    {
        
        if(req.body.password===check.password)
        {
            const data={
                User:{
                    id:user.id
                }
            }
            const old_token=jwt.sign(data,'secret_key_shopecomm');
            res.json({success:true,old_token});
        }
        else{
            res.json({success:false,error:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,error:"Wrong email"});
    }
})

//API for creating products

app.post("/add_product", async (req, res) => {
    try {
         let products = await Product.find({});
        //const {name, image, category, price, old_price } = req.body
        //if ( !name || !image || !category || !price || !old_price) {
            //console.log("error occured")
        //}

         if (products.length > 0) {
             let last_product = products[products.length - 1];
             id = last_product.id + 1;
         } else {
             id = 1;
         }

         const newProduct = new Product({
             id: id,
             title: req.body.title,
             image: req.body.image,
             category: req.body.category,
             price: req.body.price,
             old_price: req.body.old_price
         });

        console.log(newProduct);
        await newProduct.save();
        /*await Product.create({
            id,
            name,
            image,
            category,
            price,
            old_price,

        })*/

        console.log("Saved");

        res.json({
            success: true,
            product_name: req.body.title
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


//API for deleting products
app.post("/deleteproduct", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Deleted");
    res.json({
        success: true,
        product_name: req.body.title
    })
})

//API for getting all the products
app.get("/allitems", async (req, res) => {
    let items = await Product.find({});
    console.log("All products fetched");
    res.send(items);
})

app.get('/latest',async(req,res)=>{
    let product=await Product.find({});
    let latestitems=product.slice(1).slice(-4);
    res.send(latestitems);
})

app.get('/popularinwomen',async(req,res)=>{
    let sets=await Product.find({category:"fashion-women/"});
    let popular=sets.slice(0,3);
     res.send(popular);
})

const getUser = async (req, res, next) => {
    const key = req.header('auth');
    if (key) {
        try {
            const info = jwt.verify(key, 'secret_key_shopecomm');
            console.log(info.customer);
            req.user=info.customer;
            next();
        } catch (err) {
            res.status(401).send({ error: "Please authenticate your token" });
        }
    } else {
        res.status(401).send({ error: "Authentication token is missing" });
    }
}


app.post('/addincart',getUser,async(req,res)=>{
    const userinfo=await user.findOne({id:req.user._id});
    userinfo.cartdata[req.body.Id]+=1;
    //console.log(userinfo.cartdata);
    const final=await user.findOneAndUpdate({id:req.user._id},{cartdata:userinfo.cartdata});
})

app.post('/removefromcart',getUser,async(req,res)=>{
    const userinfo=await user.findOne({id:req.user._id});
    if(userinfo.cartdata[req.body.Id]>0)
    {
        userinfo.cartdata[req.body.Id]-=1;
    }
    //console.log(userinfo.cartdata);
    const final=await user.findOneAndUpdate({id:req.user._id},{cartdata:userinfo.cartdata});
})

app.post('/getcart',getUser,async(req,res)=>{
    const userinfo=await user.findOne({id:req.user._id});
    res.send(userinfo.cartdata);
})

app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port", port);
    }
    else {
        console.log("Error: ", err);
    }
})
