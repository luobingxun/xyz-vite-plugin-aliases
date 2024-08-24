import fs from 'fs/promises';
import path from 'path';
import { normalizePath } from 'vite';
import type { Plugin } from 'vite';

interface Options {
  prefix: string;
  aliasDir: string;
}

export default async function xyzVitePluginAliases(
  options: Options
): Promise<Plugin> {
  const { prefix = '@', aliasDir = 'src' } = options || {};

  const aliasesMap = await generateAliasesMap(prefix, aliasDir);

  return {
    name: 'xyz-vite-plugin-aliases',
    config: () => {
      return {
        resolve: {
          alias: aliasesMap
        }
      };
    }
  };
}

async function generateAliasesMap(prefix: string, aliasDir: string) {
  const basePath = path.resolve(process.cwd(), aliasDir);
  const dirs = await fs.readdir(basePath);
  const aaliasesMap: Record<string, string> = {
    [prefix]: normalizePath(basePath)
  };

  for (const dir of dirs) {
    const dirPath = `${basePath}/${dir}`;
    const dirStat = await fs.stat(dirPath);
    if (dirStat.isDirectory()) {
      aaliasesMap[`${prefix}${dir}`] = normalizePath(dirPath);
    }
  }

  return aaliasesMap;
}
