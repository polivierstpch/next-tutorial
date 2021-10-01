import Link from 'next/link';
import styles from '../styles/meteryx-button.module.css';

interface IMeteryxButtonProps {
    route: string;
    content?: string;
    width?: number;
}

const MeteryxButtonLink = ({ route, content, width }: IMeteryxButtonProps) => {
    return (
        <Link href={route}>
            <a style={{ width: `${width ? width + 'px' : '10rem'}`, 
                        minWidth: `${width ? width / 2 + 'px' : 'max-content'}`}}
                className={styles.meteryxButton}>{content}</a>
        </Link>
    )
}

export default MeteryxButtonLink;

