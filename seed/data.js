import db from '../db/connection.js'
import Post from '../models/post.js'

const insertData = async () => {
    //reset database
    await db.dropDatabase()

    //posts data that we want inserted into the database
    const posts = [
        {
            name: 'Jessica G',
            pfp:'imgsrc', 
            status:'asdf', 
            ghUrl:'com .'
        },
        {
            name: 'Anon',
            pfp:'imgsrc', 
            status:'sf', 
            ghUrl:'com .'
        }


    ]


//insert products into database
await Post.insertMany(posts)
console.log('created posts!')

// close database connection, done.
db.close()
}

insertData()