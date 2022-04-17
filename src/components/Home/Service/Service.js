import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const checkOutBtn = id => {
        navigate(`/checkout`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <hr />
            <span className='description'><h4>{name}</h4>
                <h6>Price:{price}$ (package)</h6>
                <p><small className='description'>{description}</small></p>
                <button onClick={() => checkOutBtn(id)}> Book:{name}</button>
            </span>
        </div>
    );
};

export default Service;