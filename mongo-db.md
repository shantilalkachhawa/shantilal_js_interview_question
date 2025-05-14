# what is Database .
An organise collection of data.
A method of manupulate and access the data.
two type od data storage - Organized and Unorganized.


# What is MongoDB
Monodb is NoSql database that store data in flexible, JSON-like documents,making it easy to scale and 
handle large volums of unstructured data.
MongoDb store  data in collection and documents.
A collection is a group of mongoDB documents and document is a set of key-value pairs.
data store in flexible no need for define colum.
Manage data in locastorage but store  in cloud 

# Installation 
Community and giude line 
mongo shell 
# Use command 
mongosh - to connct for local db
use db_name - create a new DB and switch in .
show dbs - list of DB
db.table_name.insert({name:'abc',age:21}) - create a table or collection 
db.table_name.find()  - select * from table_name 
show collection - show table
db.createCollection('name_of_collection') - create table name_of_table
db.dropDatabase()  - drop data_base_name
db.branches.drop() - drop table_name

cntrl+l - clear

# CRUD
# Create 
insertOne({})
inserMany([{},{}])
# Read
db.table_name.find() - geting all list [ .pretty()]
db.table_name.find({},{model:1}) that is projection , {} means match all the documents and 
 {model:1 (true)} this projection return all modal value with id or 
 if you dont not want to return _id so you can try  db.table_name.find({},{model:1,_id:0(false)}) 

db.table_name.find({model:'a'}) - return filtered data , if data are in array or Object form. like ex- should use  "engine.type":'a'

db.findOne() - 

# Update 
db.table_name.updateOne(
  {mode:'nexon'},
  {$set:{color:'red'}})  // create a new entery


db.table_name.updateOne(
  {mode:'nexon'},
  {$push:{features:'red'}})  // push to existing array  or {$push:{features:'red'}}  remove item from collection

db.table_name.updateOne(
  {mode:'nexon'},
  {$push:{features: {$each :['a','b','c']}}})   // added multiple value so that using 

 db.table_name.updateOne({
    {mode:'nexon'},
    {$unset:{color:''}}   // Remove  field or clear  
}) 

db.table_name.updateMany() // update in all collection & update is first match connection
db.table_name.updateMany({},{$set:{color:'red'}})  // Added in all collection 

# upsert - 
   combination of the operation  update and insert
   If no document matches the queary criteria ,MongoDb insert the new document into the collection
db.table_name.updateMany({name:'aaa'},{$set:{color:'red',age:12}},upsert :true)   


# Delete 
db.table_name.deleteOne({fuel :'a'}) // delete first match 

db.table_name.deleteMany({fuel :'a'}) // All match delete 


# Data type 
MongoDB store data in BSON  (binary JSON format )

ObjectId   // ObjectId('1212112) 
string  
Integer
Double // 19.45
Boolean 
Array
Object 
Date
Null
Time stamp
Decimal128


# Operators
$eq =, $lt <, $gt >, $lte <=, $gte >=, $ne !=

db.table_name.find({field_name:{$gt :14}})

In case we are finding  two or multiple value [15 10] so we can use $in - $nin
db.table_name.find({field_name:{$in :[15,20]}})

In case we are finding  two or multiple feild so we can use  operator $and, $or, $not, $nor

db.table_name.find({
    $and:[
        {condition1},
        {condition2}
    ]
})

# Element operator
   $exists - feild are present or not 
db.table_name.find({
    age :{$exists:true }
})
  $type - check type
db.table_name.find(
    {name:{$type:'string'}}
)

# Array operator
  $size - Return all the document that specified array size
  $all - Return all the documents matched 

db.table_name.find({features:{$size:3}}) // means array size 3 then return 
db.table_name.find({features:{$all:['a','b','c']}}) // means match value then return

# Cursour Method 
  find().count()
  find().sort({name:1})  1 is for desending order
  find().limit(2)
  find().skip(3) // first three rows

# Aggregation 
Aggregation is powerfull framework for complex operation like filter, grouping,sorting,reshaping, and sumerising data in a flexible way via pipline 
like -
db.table_name.aggregate([
    <!-- stages -1 -->
    {
        $match:{size:"medium"}
    },
    <!-- stages -2 -->

    {

    }
])

Most commonly usage some stages 
$match, $group, $project, $sort, $limit, $unwind, $lookup, $addFields, $count, $skip 

# grouping

db.collection.aggregate([
{
$group: {
_id: "$category",
totalAmount: { $sum: "$amount" },
averageAmount: { $avg: "$amount" },
minAmount: { $min: "$amount" },
maxAmount: { $max: "$amount" },
amountsList: { $push: "$amount" },
uniqueAmounts: { $addToSet: "$amount" }
}
}
])
db.collection_name.aggregate([
    {
        $match:{"type":'hyndai',"engine":{$gt:1000}}
    }
])
db.colection_name.aggregate([
    {$match:{type:'hyndai'}},
    {$count:'Total_car'}
])
db.collection.aggregate([
    {$match:{type:"hyndai"}},
    {$group :{_id:'$fuel_type',totalCar:{$sum:1}}}

])

db.collection_name([
    {$match:{type:"hyndai"}},
    {$project:{
        _id:0,
        model:1,
        fuel_type:1,
    }}
])
db.collection_name.aggregate([
    {$group:{type:"hyndai"}},
    {$project:{
        _id:0,
        madal:1,
        fuel_type:1
    }},
    {$sort:{model:1}} // -1
])
# sort by count 
sort, grouping with count

db.collection_name.aggregate([
    {$sortByCount:"$type"}
])

# String Operators
$concat, $toUpper, $toLower, $regexMatch, $ltrim, $split

db,collection_name.aggregate([
    {
        $project :{
            fullName:{$concat:{"$firstName", " ","$lastName"}}
        }
    }
])

db.collecon_name.aggregate([
    {$match:{maker:"Hyndai"}},
    {$project:{
        _id:0,
        car_name:{$toUpper:"$colum_name"}
    }}
])'

db.collection.aggregate([
    {$match: {type:"abc"}},
    {$project:{
        _id:0,
        car_name:{$toUpper:{$concat:{
            "$fielda" + " " + "$fieldB"
        }}}
    }}
])

# $out stage
db.collection_name.aggregate({
    {$project:{
        _id:0,
        fullName:{$toupper : ${concat : "$firstName", " ", "$last_name"}}
    }},
    {$out:"new_colleection_name"} // create a new collection with above field
})

# prince convert into lac

db.collection_name.aggregate([
    {$project: {
        _id:0,
        model:1,
        price:1 
    } },
    {$addFields:{
        price_in_lac :{
            $divide:["$pricce":10000 ]
        }
    }}
])

db.collection_name([
    {$project:{
        _id:0,
        maker:1,
        model:1
        fuelCategory :{
            $cond:{
                if:{$eq:["$fuel_type":"petrol"]},
                    then:"Petrol car",
                else:"non-petrol"
            }
        }
    }}
])

db.collection_name.aggregate([
    {$project:{
        _id:0,type:1,model:1
        category:{
            $switch :{
                branches:[
                    {
                    case :{$lt:["$price",1000]},
                      then:"Budget"
                    },
                    {
                    case : {$gte : ["$price",3000]},
                      then :"Priem"
                    },
                    {
                        case:{$and :{$gt:["$price",50000],},{$lt:["$price",10000]}},
                         then : "Greate"
                    }
                ]
            }
        }
    }}
])

# Variable
System genrated variables

db.collection_name.aggregate([
    {$project:{
        _id:0,
        model:1,
        data:"$$NOW"
    }}
])

Object.keys(this) // this envirment return many types of key value 
you can set object of globel uses like

hyndai={make:"abc"}

then we can use direct 
db.collection_name.find(hyndai)  // return all filterd result 

# Data modeling 
how to join one table data to another table
#lookup

db.collection_name.aggregate([
    {$lookup :{
        "from":"orders",
        "localField":"_id",
        "foreignField":"user_id",
        as:"orders"

    }}
])

db.users.aggregate([
    {$lookup:{
        "from":"orders",
        "localField":"_id",
        "foreignField":"user_id",
        as:"users"
    }}
])
# Embeded document ( only for limited data)
max doc size limit is 16MB 
nesting depth limit is 100levels deep

# Referenced Document ( use for different table)
like users and orders

# Index
We can create a indexing for field bases, not creates for all only create for you want to search 

db.collection_name.createIndex({name:1}) // create a index with seprate file store

db.collection.getIndexes()
db.collection.dropIndex('name')

db.collection.find({title:'the ace of hearos'}).explain(''executionaStats)

db.createCollection('user',{
    validator:{
        $jsonSchema:{
            bjson:"object",
            required:['name','age']
        }
    }
})
db.collection_name.createIndex({maker:1})