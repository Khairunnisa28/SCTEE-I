import React from "react";
import { useState } from "react";

function Form (){
    const [name, setName] = useState("");
    const [kelas, setKelas] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nama yang anda masukkan ${name} dan kelasnya adalah ${kelas}`);
    }
    

    return(
        <div className="create">
            <h2>Isi data diri anda</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nama</label>
                <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="">Kelas</label>
                <input
                type="text"
                required
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Form;