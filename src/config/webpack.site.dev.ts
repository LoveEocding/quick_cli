import merge from 'webpack-merge';
import WebpackBar from 'webpackbar';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { get } from 'lodash';
import { join } from 'path';
import { baseConfig } from './webpack.base';
import { WebpackConfig } from '../common/types';
import { getQuickConfig, getWebpackConfig } from '../common';
import { QuickCliSitePlugin } from '../compiler/quick-cli-site-plugin';
import {
  GREEN,
  SITE_MODILE_SHARED_FILE,
  SITE_DESKTOP_SHARED_FILE,
} from '../common/constant';

export function getSiteDevBaseConfig(): WebpackConfig {
  const quickConfig = getQuickConfig();
  const baiduAnalytics = get(quickConfig, 'site.baiduAnalytics');

  function getSiteConfig() {
    const siteConfig = quickConfig.site;

    if (siteConfig.locales) {
      return siteConfig.locales[siteConfig.defaultLang || 'en-US'];
    }

    return siteConfig;
  }

  function getTitle(config: { title: string; description?: string }) {
    let { title } = config;

    if (config.description) {
      title += ` - ${config.description}`;
    }

    return title;
  }

  const siteConfig = getSiteConfig();
  const title = getTitle(siteConfig);
  const { htmlPluginOptions } = quickConfig.site;

  return merge(baseConfig as any, {
    entry: {
      'site-desktop': [join(__dirname, '../../site/desktop/main.js')],
      'site-mobile': [join(__dirname, '../../site/mobile/main.js')],
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
        'site-mobile-shared': SITE_MODILE_SHARED_FILE,
        'site-desktop-shared': SITE_DESKTOP_SHARED_FILE,
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
      new WebpackBar({
        name: 'Quick Cli',
        color: GREEN,
      }),
      new QuickCliSitePlugin(),
      new HtmlWebpackPlugin({
        title,
        logo: siteConfig.logo,
        description: siteConfig.description,
        chunks: ['chunks', 'site-desktop'],
        template: join(__dirname, '../../site/desktop/index.html'),
        filename: 'index.html',
        baiduAnalytics,
        ...htmlPluginOptions,
      }),
      new HtmlWebpackPlugin({
        title,
        logo: siteConfig.logo,
        description: siteConfig.description,
        chunks: ['chunks', 'site-mobile'],
        template: join(__dirname, '../../site/mobile/index.html'),
        filename: 'mobile.html',
        baiduAnalytics,
        ...htmlPluginOptions,
      }),
    ],
  });
}

export function getSiteDevConfig(): WebpackConfig {
  return getWebpackConfig(getSiteDevBaseConfig());
}
