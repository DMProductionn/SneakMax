import { useEffect, useState } from 'react';

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            if (width > 1056) {
                setDeviceType('desktop');
            } else if (width > 768) {
                setDeviceType('tablet');
            } else {
                setDeviceType('mobile');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        
    }, []);

    return deviceType;
};

export default useDeviceType;
