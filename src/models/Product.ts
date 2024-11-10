import { Schema, model, models } from "mongoose"

const productSchema = new Schema({
    productName: String,
    description: String,
    category: String,
    quantity: String,
    price:String,
    fileUrl: String
})

export default models.Product || model('Product', productSchema)