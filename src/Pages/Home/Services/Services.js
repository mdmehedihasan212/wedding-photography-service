import React from 'react';
import usePackage from '../../../Hooks/usePackage';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const packages = usePackage([]);

    return (
        <div className='container'>
            <h1 className='text-center text-warning m-5'>My Services</h1>
            <div className="services-container">
                {
                    packages?.map(pack => <Service
                        key={pack.id}
                        pack={pack}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;