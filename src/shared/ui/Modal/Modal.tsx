import React, {
    ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/ClassNames/classNames';
import Portal from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

const Modal = (props:ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };
    useLayoutEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            const el = document.getElementById('main');
            setTargetElement(el);
        } else {
            setIsMounted(false);
            setTargetElement(null);
        }
    }, [isOpen]);
    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    if (!isOpen && !isMounted) {
        return null;
    }
    return (
        <Portal element={targetElement || document.body}>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
export default Modal;
