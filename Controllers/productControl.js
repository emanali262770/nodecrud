import e from "cors";
import { Product } from "../Model/productModel.js";

export async function GetData(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
}

export async function create(req, res) {
  try {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product Created Successfully",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error.message);
    res.status(400).json({ 
      message: "Error creating product", 
      error: error.message 
    }); 
  }
}

export async function put(req, res) {
  try {
    const id = req.params.id;
 const replace=await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json({message:'Product edit Successfully',product:replace})
    
  } catch (error) {
    res.json(error)
   res.status(500).json({message:"some error is comming"})
  }
}

export async function patchProduct(req, res) {
  try {
    const id = req.params.id;

    // Find product by ID and update it with only the fields provided in req.body
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true } // Return the updated product and validate inputs
    );

    // If no product is found, return a 404 response
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send success response
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    // Log and send error response
    console.error("Error updating product:", error.message);
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
}

export async function Delete(req, res) {
  try {
    const id = req.params.id;

  
    const DeleteProduct = await Product.findByIdAndDelete(
      id,
      req.body,
      { new: true, runValidators: true } 
    );
    res.status(200).json({message:'Delete Sucess',DeleteProduct:DeleteProduct})
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
}