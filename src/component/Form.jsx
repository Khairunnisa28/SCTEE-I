import React from "react";
import { useState } from "react";

function Form (){
    const [name, setName] = useState("");
    const [kelas, setKelas] = useState("");
    return(
        <div className="create">
            <h2>Isi data diri anda</h2>
            <form>
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
            </form>
        </div>
    )
}
export default Form;