import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='services-title'>
            <br />
            <span className='banner'> <img src="https://i.ibb.co/Tm14fB1/Camera-Banner-1.jpg" alt="" /></span>
            <br />
            <br />
            <br />
            <h1> Our Package</h1>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;