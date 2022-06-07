import { useEffect, useState } from 'react';

const usePackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('package-data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return [packages];
};

export default usePackage;