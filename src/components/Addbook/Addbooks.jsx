import React from "react";
import Footer from "../Footer/footer";
import Navbar from "../Navbar";

function Addbooks() {
 
    return (
        <div style={{borderRadius: "10px"}}>
            <Navbar/>
            <form style={{padding: "2%", padding: "20px"}}>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight: "bold"}}>Book cover</label>
                    <input name="cover" type="text" className="form-control"  placeholder="Enter url"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight: "bold"}}>Book Title:</label>
                    <input name="title" type="text" className="form-control" id="exampleInputEmail1" placeholder="Book title"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" style={{fontWeight: "bold"}}>Author:</label>
                    <input name="author" type="text" className="form-control" id="exampleInputEmail1" placeholder="Authr's name"/>
                </div>
                <div className="mb-3">
                    <label style={{fontWeight: "bold"}}>Book description</label>
                    <textarea name="priview" className="form-control" placeholder="Add book description"/>
                </div>
                <button type="submit" className="btn btn btn-info">Post your Book</button>
            </form>
            <Footer/>
        </div>
    )
}

export default Addbooks;