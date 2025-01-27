import { API, FileInfo } from "jscodeshift";

const IMPORT_AT_INDEX = 1;

export default function transformer(file: FileInfo, api: API) {
  const jsCodeShift = api.jscodeshift,
    root = jsCodeShift(file.source)
      .find(jsCodeShift.Statement)
      .forEach((path, index) => {
        if (index === IMPORT_AT_INDEX) path.replace();
      });

  return root.toSource();
}
