/* eslint-disable i18next/no-literal-string */
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,

}

const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setisAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setisAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setisAuthModal(true);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowModal}
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};

export default Navbar;
