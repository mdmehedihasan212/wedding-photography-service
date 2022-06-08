import React from 'react';
import usePackage from '../../../Hooks/usePackage';
import Service from '../Service/Service';

const Services = () => {
    const [packages] = usePackage([]);

    return (
        <section className='container mt-5'>
            <h3 className='text-center text-warning'>My Services</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-5 mt-4">
                {
                    packages?.map(pack => <Service
                        key={pack.id}
                        pack={pack}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;