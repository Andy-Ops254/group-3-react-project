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
            "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        onAddProduct(newProduct)
        setFormData({name:"",price:"",image:""});
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
            <button type="submit" style={styles.button}>Add Product</button> 
        </form>
    )
}
const styles = {
    form:{
        display:"flex",
        gap: "16px",
        padding: "16px 32px",
        backgroundColor:"f9f9f9",
        borderBottom: "1px solid #ddd",
        flexWrap:"wrap",
    },
    input:{
        padding:"0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        flex: "1 1 200px",
    },
    button:{
        padding:"0.5rem 1rem",
        backgroundColor: "#333",
        color:"white",
        border:"none",
        borderRadius:"4px",
        cursor:"pointer",
    },

}
export default AddProductForm;
