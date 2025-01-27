/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, FileInfo } from "jscodeshift";

export default function transformer(file: FileInfo, api: API) {
  const jsCodeShift = api.jscodeshift,
    root = jsCodeShift(file.source)
      .find(jsCodeShift.TSTypeAliasDeclaration)
      .filter(
        (typeAliasDeclaration) => typeAliasDeclaration.node.id.name === "DB",
      )
      .forEach((typeAliasDeclaration) => {
        jsCodeShift(typeAliasDeclaration)
          .find(jsCodeShift.TSTypeLiteral)
          .forEach((typeLiteral) => {
            typeLiteral.value.members.forEach((member) => {
              jsCodeShift(member)
                .find(jsCodeShift.Identifier)
                .forEach((identifier) => {
                  if (
                    identifier.value.name ===
                    (member as unknown as any).key.name
                  ) {
                    const schema = (
                      member.typeAnnotation?.typeAnnotation as unknown as any
                    )?.typeName?.name
                      .replace((member as unknown as any).key.name, "")
                      .toLowerCase();

                    jsCodeShift(identifier).replaceWith(
                      jsCodeShift.identifier(
                        `"${(() => {
                          if (!schema) return "";

                          return `${schema}.`;
                        })()}${(member as unknown as any).key.name}"`,
                      ),
                    );
                  }
                });
            });
          });
      });

  return root.toSource();
}
