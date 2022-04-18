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
            <span className='banner'> <img className='img-fluid' src="https://i.ibb.co/VSKj2kk/World-Photography-Day-August-19.png" alt="" /></span>

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