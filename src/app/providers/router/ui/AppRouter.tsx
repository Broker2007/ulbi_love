import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
    // eslint-disable-next-line i18next/no-literal-string

    <Routes>

        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>

                )}
                key={path}
            />
        ))}
    </Routes>
);

export default AppRouter;
