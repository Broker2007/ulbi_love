
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/Navbar/SideBar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


const App = () => {
    const {theme} = useTheme()
    
    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
