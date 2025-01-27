import { API, FileInfo } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const jsCodeShift = api.jscodeshift,
    root = jsCodeShift(file.source)
      .find(jsCodeShift.Identifier)
      .filter((path) => path.node.name === "ColumnType")
      .forEach((path) =>
        jsCodeShift(path).replaceWith(jsCodeShift.identifier("Generated")),
      );

  return root.toSource();
}
