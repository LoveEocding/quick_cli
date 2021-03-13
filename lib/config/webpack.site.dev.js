"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSiteDevConfig = exports.getSiteDevBaseConfig = void 0;
const webpack_merge_1 = __importDefault(require("webpack-merge"));
const webpackbar_1 = __importDefault(require("webpackbar"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const lodash_1 = require("lodash");
const path_1 = require("path");
const webpack_base_1 = require("./webpack.base");
const common_1 = require("../common");
const quick_cli_site_plugin_1 = require("../compiler/quick-cli-site-plugin");
const constant_1 = require("../common/constant");
function getSiteDevBaseConfig() {
    const quickConfig = common_1.getQuickConfig();
    const baiduAnalytics = lodash_1.get(quickConfig, 'site.baiduAnalytics');
    function getSiteConfig() {
        const siteConfig = quickConfig.site;
        if (siteConfig.locales) {
            return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
        }
        return siteConfig;
    }
    function getTitle(config) {
        let { title } = config;
        if (config.description) {
            title += ` - ${config.description}`;
        }
        return title;
    }
    const siteConfig = getSiteConfig();
    const title = getTitle(siteConfig);
    const { htmlPluginOptions } = quickConfig.site;
    return webpack_merge_1.default(webpack_base_1.baseConfig, {
        entry: {
            'site-desktop': [path_1.join(__dirname, '../../site/desktop/main.js')],
            'site-mobile': [path_1.join(__dirname, '../../site/mobile/main.js')],
        },
        devServer: {
            port: 8080,
            quiet: true,
            host: '0.0.0.0',
            stats: 'errors-only',
            publicPath: '/',
            disableHostCheck: true,
        },
        resolve: {
            alias: {
                'site-mobile-shared': constant_1.SITE_MODILE_SHARED_FILE,
                'site-desktop-shared': constant_1.SITE_DESKTOP_SHARED_FILE,
            },
        },
        output: {
            chunkFilename: '[name].js',
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    chunks: {
                        chunks: 'all',
                        minChunks: 2,
                        minSize: 0,
                        name: 'chunks',
                    },
                },
            },
        },
        plugins: [
            new webpackbar_1.default({
                name: 'Quick Cli',
                color: constant_1.GREEN,
            }),
            new quick_cli_site_plugin_1.QuickCliSitePlugin(),
            new html_webpack_plugin_1.default(Object.assign({ title, logo: siteConfig.logo, description: siteConfig.description, chunks: ['chunks', 'site-desktop'], template: path_1.join(__dirname, '../../site/desktop/index.html'), filename: 'index.html', baiduAnalytics }, htmlPluginOptions)),
            new html_webpack_plugin_1.default(Object.assign({ title, logo: siteConfig.logo, description: siteConfig.description, chunks: ['chunks', 'site-mobile'], template: path_1.join(__dirname, '../../site/mobile/index.html'), filename: 'mobile.html', baiduAnalytics }, htmlPluginOptions)),
        ],
    });
}
exports.getSiteDevBaseConfig = getSiteDevBaseConfig;
function getSiteDevConfig() {
    return common_1.getWebpackConfig(getSiteDevBaseConfig());
}
exports.getSiteDevConfig = getSiteDevConfig;
