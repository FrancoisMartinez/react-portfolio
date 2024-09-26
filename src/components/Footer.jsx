import React from 'react';
import styles from '../styles/Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <p>{t('footer.build')} <a href="https://react.dev/">React</a> ;)</p>
            <p>
                &copy; {new Date().getFullYear()} FrançoisMartinez. {t('footer.rights')}
            </p>
        </footer>
    );
};

export default Footer;
