import React, {useState} from "react";
import landscape from "../assets/landscape.png";
import logoInterPass from "../assets/logoInterPass.png";
import logoPersona from "../assets/logoPersona.png";
import garrafaMrvInox from "../assets/garrafaMrvInox.png";

export default function TopProducts(props) {


    if (props.details === null || props.details === []) return (<h5>loaging...</h5>)

    return (
        <div className="d-flex w-auto h-25 ps-3"  >
            <div className="d-flex "  style={{ justifyContent: "start", alignItems: "center", borderStyle: "solid", borderTopColor: "transparent", borderWidth: "2px", borderLeftColor: "transparent", borderRightColor: "transparent", borderBottomColor: "#E1E4ED" }}>
                <img className="p-2 ps-4 pt-0" style={{ width: "80px", height: "40px" }} src={!props.details ? landscape : props.details[0].pImg}></img>
                <small className="ps-3" style={{ width: "305px" }}>{!props.details ? 'loading...' : props.details[0].pDesc}</small>
                <small className="ps-2" style={{ fontWeight: "bold" }} >{props.qty}</small>
                <small className="ps-2"  >vendas</small>
            </div>
        </div>
    )
}