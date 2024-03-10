import { File } from '../walker/index.js';
import prettier from 'prettier';

// Options for prettier, TODO: move to WalkerAS
const prettierOptions: prettier.Options = {
  parser: 'typescript',
  tabWidth: 2,
};

export function prettify(files: File[]): Promise<File[]> {
  const proms = files.map<Promise<File>>(async (file: File) => {
    const content = await prettier.format(file.content, prettierOptions);
    return { name: file.name, content: content };
  });

  return Promise.all(proms);
}
