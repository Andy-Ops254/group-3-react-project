import { useState } from "react";
function AddProductForm({onAddProduct}) {
    const[formData, setFormData] = useState({
        image:"",
        name: "",
        category: "",
        price: "",
    });
    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
    }
    function handleSubmit(e) {
        e.preventDefault()

        const newProduct = {
            id:Date.now(),
            name:formData.name,
            price:Number(formData.price),
            image:formData.image ||
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category:formData.category || "Uncategorized"
        }
        onAddProduct(newProduct)
        setFormData({name:"",price:"",image:"",category:""});
    }
    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input 
            type="text"
            name="name" 
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
            />

            <input 
             type="number"
             name="price"
             placeholder="price"
             value={formData.price}
             onChange={handleChange}
             required
             style={styles.input}
            />

            <input 
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            style={styles.input}
            />
            <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
            style={styles.input}
            />
        
            <button type="submit" style={styles.button}>Add Product</button> 
        </form>
    )
}
const styles = {
  form: {
    maxWidth: "500px",
    margin: "60px auto",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  input: {
    padding: "14px 18px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  },
  button: {
    padding: "14px 18px",
    backgroundColor: "#ff6289",
    color: "#000000",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
};


export default AddProductForm;
