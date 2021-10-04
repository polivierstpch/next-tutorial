import Link from 'next/link';
import styles from '../styles/meteryx-button.module.css';

interface IMeteryxButtonProps {
    route: string;
    className?: string
    content?: string;
    width?: number;
}

const MeteryxButtonLink = ({ route, className, content, width }: IMeteryxButtonProps) => {
    return (
        <Link href={route}>
            <a className={`${className} ${styles.meteryxButton}`}>{content}</a>
        </Link>
    )
}

export default MeteryxButtonLink;

