import mongoose from 'mongoose'
const cnD = () => {
    mongoose.connect(process.env.DB, {
        dbName: `usr`,
    }).then((data) => {
        console.log(`database is connected ${data.connection.host}`)
    }).catch((err) => {
        console.log(`error ${err}`)
    })
}

export default cnD;