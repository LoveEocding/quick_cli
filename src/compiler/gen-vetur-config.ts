import markdownVetur from '@vant/markdown-vetur';
import { get } from 'lodash';
import {
  SRC_DIR,
  VETUR_DIR,
  getQuickConfig,
  getPackageJson,
} from '../common/constant';

// generate vetur tags & attributes
export function genVeturConfig() {
  const pkgJson = getPackageJson();
  const quickConfig = getQuickConfig();
  const options = get(quickConfig, 'build.vetur');

  if (options) {
    markdownVetur.parseAndWrite({
      name: quickConfig.name,
      path: SRC_DIR,
      test: /zh-CN\.md/,
      version: pkgJson.version,
      outputDir: VETUR_DIR,
      ...options,
    });
  }
}
