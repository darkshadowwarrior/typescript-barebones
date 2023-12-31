import tsc from 'typescript'
import tsConfig from './tsconfig.json'

export default {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, tsConfig.compilerOptions, path, [])
    }
    return src
  }
}
