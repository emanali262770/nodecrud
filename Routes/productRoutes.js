import { Router } from "express";
import { GetData,create,put,  patchProduct,Delete } from "../Controllers/productControl.js";
const ProductRoutes=new Router();

ProductRoutes
.get('/',GetData)
.post('/',create)
.put('/:id',put)
.patch('/:id',patchProduct)
.delete('/:id',Delete)


export default ProductRoutes