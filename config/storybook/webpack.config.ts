import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config:webpack.Configuration}) => {
    const paths:BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // ✅ ИСПРАВЛЕННАЯ СТРОКА - убираем конфликт с node_modules
    config.resolve = {
        ...config.resolve,
        modules: [
            paths.src,
            ...(config.resolve?.modules || ['node_modules']),
        ],
        extensions: [...(config.resolve?.extensions || []), '.ts', '.tsx'],
    };

    // Остальной код без изменений...
    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
            if (rule && typeof rule === 'object' && rule.test && /svg/.test(rule.test.toString())) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        });
    }
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCssLoader(true));
    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }));
    return config;
};
