"use client";
import { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { backgroundColour } from "~/styles/globals";
import { useFieldStore } from "~/store/fields";
import type { Field, FieldsType } from "~/store/fields";

type DataType = Array<FieldData>;
type FieldData = Record<string, unknown>;

export const DataOutput = () => {
  const [output, setOutput] = useState<string>("");
  const [arrayOutput, setArrayOutput] = useState<DataType>([]);
  const { fields } = useFieldStore((state) => ({
    fields: state.fields,
  }));

  useEffect(() => {
    const generateData = (fields: FieldsType) => {
      const generateFieldData = (field: Field) => {
        // get field.min
        // get field.max
        // get field.type
        // get field.fieldName
        // use data to generate the correct random data
        const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        let data = "";
        const max = field.max ?? 10;
        // very simple random string generator for now
        for (let i = 0; i <= max; i++) {
          console.log("runs?");
          data += mask[Math.floor(Math.random() * mask.length)];
        }
        console.log("generate data", data);
        if (data) {
          // return this data
          return data;
        }
        return undefined;
      };
      // use type to generate string with min and max

      const generatedData: DataType = [];
      // loop through every field, put it into a function to generate fieldData
      const fieldData: FieldData = {};
      fields.forEach((field) => {
        // put generated field into object
        if (field.fieldName) {
          const data = generateFieldData(field);
          if (data) {
            fieldData[field.fieldName] = data;
          }
        }
      });

      // put object into array
      if (Object.keys(fieldData).length > 0) {
        generatedData.push(fieldData);
      }
      // if (fieldName) data[fieldName] = "test";
      if (generatedData.length > 0) {
        return generatedData;
      }
      return [];
    };
    const generatedData = generateData(fields);
    const filteredData = generatedData.filter(
      (data): data is FieldData => !!data
    );
    if (filteredData) {
      setArrayOutput(filteredData);
    }
  }, [fields]);

  useEffect(() => {
    setOutput(JSON.stringify(arrayOutput, null, 2));
  }, [arrayOutput]);

  return (
    <>
      <CodeEditor
        // ref={codeEditorRef}
        value={output}
        language="json"
        placeholder="Waiting for Fields"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        style={{
          backgroundColor: backgroundColour,
          fontSize: 16,
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </>
  );
};
