"use client";
import {useState, useEffect } from "react";

interface product{
    id: number;
    title: string;
    image: string;
    price: number;
}
export default function Store(){
    const [products, setProducts] = useState<product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>setProducts(data));
    }, []);
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <h1>Fake Store</h1>
            <input
            type="text"
            placeholder="Search products.."
            value={search}
            onChange={e=> setSearch(e.target.value)}
            style={{ padding: "10px", width: "500px", marginBottom: "20px"}}
            />
            <table border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(p=> (
                        <tr key={p.id}>
                            <td className="px-4 py-2">{p.title}</td>
                            <td className="px-4 py-2">
                                <img src={p.image} width="60"/>

                            </td>
                            <td className="px-4 py-2">{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}