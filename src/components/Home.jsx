import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import {getAllProd} from '../redux/actions';
import { useEffect } from 'react'
import { useState } from 'react';
import style from './styles/Home.module.css'




export default function Home() {


const[currentProd,setCurrentProd]=useState([])
const[loading,setLoading]=useState(true)
const dispatch=useDispatch()
const products= useSelector(state=>state.products)
const filtered= useSelector(state=>state.filtered)
const filteredCond= useSelector(state=>state.filteredCond)


  //ACTUALIZACION DE PAGINA
 
useEffect(()=>{
    setLoading(true)
    dispatch(getAllProd())
    setTimeout(()=>{
        setCurrentProd((filteredCond)?filtered:products)
        setLoading(false)
    },3000)
},[dispatch, filteredCond,filtered, products])


return (
    <div>
    
      {loading?
        <div>
          <img className={style.loading_img} src='https://res.cloudinary.com/dvkvyi1dr/image/upload/v1672281070/searcher/99109-loading-unscreen_etzeh3.gif' alt='loading_gif'></img>
        <h1 >Loading...</h1>
      </div>
      :
        (currentProd.length!==0)?
        <div className={style.container}>
        <div className={style.Home}>
        {currentProd.map((p)=>{
          return(
        
       <Card
        key={p.code}
        code={p.code}
        name={p.name}
        image={p.image}
        price={p.price}/>
          )
        })}
        </div>
      

        {filtered.length!==0?
        <>
        <hr className={style.division_line}/>
        <p className={style.results_log}>{filtered.length} resultados </p>
        </>:
        <hr className={style.division_line}/>}
         </div>
         
            :

            <div>
                <p>No se encontraron resultados</p>
            </div>
  
      }
      

    </div>
    
  )
}
