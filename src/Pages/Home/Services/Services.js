import React from 'react';
import usePackage from '../../../Hooks/usePackage';
import Service from '../Service/Service';

const Services = () => {
    const packages = usePackage([]);
    return (
        <div className='container'>
            <h1 className='mb-4'>My Services</h1>
            <div className="row">
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