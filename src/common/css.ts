import { get } from 'lodash';
import { existsSync } from 'fs';
import { join, isAbsolute } from 'path';
import { getQuickConfig } from '../common';
import { STYLE_DIR, SRC_DIR } from './constant';

type CSS_LANG = 'css' | 'less' | 'scss';

function getCssLang(): CSS_LANG {
  const quickConfig = getQuickConfig();
  const preprocessor = get(quickConfig, 'build.css.preprocessor', 'less');

  if (preprocessor === 'sass') {
    return 'scss';
  }

  return preprocessor;
}

export const CSS_LANG = getCssLang();

export function getCssBaseFile() {
  const quickConfig = getQuickConfig();
  let path = join(STYLE_DIR, `base.${CSS_LANG}`);

  const baseFile = get(quickConfig, 'build.css.base', '');
  if (baseFile) {
    path = isAbsolute(baseFile) ? baseFile : join(SRC_DIR, baseFile);
  }

  if (existsSync(path)) {
    return path;
  }

  return null;
}

const IMPORT_STYLE_RE = /import\s+?(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/g;

// "import 'a.less';" => "import 'a.css';"
export function replaceCssImportExt(code: string) {
  return code.replace(IMPORT_STYLE_RE, (str) =>
    str.replace(`.${CSS_LANG}`, '.css')
  );
}
