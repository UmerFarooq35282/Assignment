// What is MongoDB 

// Mongo noSQL database

// Lazmi nh hai ky hum react ky sath mongo he use // Mongo DB just aik database

// Market main her cheez SQL he use 

// SQL Server , MySQL , Oracle , Postgres SQL // SQL Databases 
// Postgres sql

// No SQL Aur SQL 

// SQL DataBases tabular form ============> Tables main stores

// Users , products , categories  =========> Tables

// rows aur columns ========> entities

// product ====> name , price , quantity , category , productID ======> 100 records insert 

// 100 records of products ab in sari products image to lazmi ,
// image ============> previous 100 records automatically null insert 

// NoSQL Databese data Like JSON =============> BSON 

// NoSQL main documents type main data ko save krty hain 

// Collection ===========> for each Categories 

// Documents ============> Each collection ky andar jitna hai wo documenst main save hota hai 

// Products =======> {productname = "" , category = "" , productID = "1"} ,
// {productname = "" , category = "" , productID = "2" , price + ""}
// {productname = "" , category = "" , productID = "3" , price + "" , quantity = 122}

// In NoSql databases there are no predefine structure for it's Collections


// Functions for inserting data 

// let obj = {}

// let arr = []

// db.inserOne()

// class collectionName {

// }

// learningWithClasMates = db
// insertOne({})


// MongoClient ====> node ko Mongo Connect lakin is main bhi wo he masla hai 

// ye random data insert krny deti hai

// class Mongoose {
//     connect(url){}

//     Schema(){}

//     model(){}
// }

// let mongoose = new Mongoose()
// mongoose
// insertOne() ==============> {}
// insertMany() ==============> [{1,2},{1,2,3},{1}]

// {producyNAme: ""}



// insertMany([{producyNAme: ""},{productName: "" , cat: ""}]) // mongoDb ka free hand or MongoDb ka aik disadvantage


// [1,2,3,4,]

// [{},{},{} , .......]
// insertMany({})


// insertMany({} ,{},{})
// insertMany([{} ,{},{}])


// find Satements ================> find()

// db.products.find() ==> select * from produts ===== SQL 

// find(par1,par2,par3) ========> {}

// find({},{},{}).limit().sort().skip()   ===============> chained method 


// sorting two mehtod asc , desc =============> asc ==> 1 , desc == -1


// find({productName:'abc'} , {productName: 1,id:0}, {limit:10},{skip:5},{sort: {productName:-1}}) =========> optional method

// first {} ======> condition 
// second {} ======> Columns ly kr aaany hain 
// third {} ======> limit , sort 


// find({productLine: "Motorcycles"},{productName:1,productLine:1,quantityInStock:1,_id:0})
// find({productLine: "Motorcycles"},{})

// find().count()

// find({productLine:"Motorcycles"}).count()

// db.products.find() =======> ye jo kuch bhi return krta hai usy hum cursor



// function find(){
//     return 10;
// }

// let rsult = find()
// console.log(find())

// let products = db.products.find();
// products.toArray();



// let name = "umer"
// console.log(name)
// name.toArray();
// console.log(name)

// Cursor Topic 

function productsCat(){
    let totalProducts =  db.products.find().toArray()

    for(let i =0; i < totalProducts.length; i++){
        console.log(totalProducts[i].productLine)
    }
}


// let name = "umer";

// let names = ["umer" , "hamza" ,"muzammil"]

// for(let i =0;i<names.length; i++){
//     console.log(names[i])
// }

// let products = [{},{},{},{}]



// let name = "Hamza"

// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)

// for() loop ==============> stage1 => shuru khan sy krna hai , stage2 => khan tak krna hai,

// for(let i=1; i <10; i++){
//     console.log("Hamza")
// }



// sideBar ======> categories 
// Motercycles === TotalProducts == 30
// Cars       ==== TotalProducts == 30 

