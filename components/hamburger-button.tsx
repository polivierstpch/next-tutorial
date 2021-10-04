import Image from 'next/image';
import { useState } from 'react';

interface IHamburgerButtonProps {
    onClick: () => void;
    className?: string;
    width?: number;
    height?: number;
}

const HamburgerButton = ({ onClick, className = "",  width = 40, height= 40}: IHamburgerButtonProps) => {
    const [toggled, setToggled] = useState(false);

    const hamburgerIconUrl = "/images/bouton-mobile.svg"
    const closeIconUrl = "/images/bouton-fermer-mobile.svg"

    const handleClick = () => {
        onClick();
        setToggled(!toggled);
    };

    return (
        <button className={className} style={{border: "none", background: "none"}} onClick={handleClick}>
            <Image 
                priority
                src={toggled ? closeIconUrl : hamburgerIconUrl}
                alt={toggled ? "Bouton fermer menu mobile" : "Bouton ouvrir menu mobile"}
                width={width}
                height={height}
             />
        </button>
    );
}

export default HamburgerButton;
