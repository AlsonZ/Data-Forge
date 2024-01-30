"use client";
import { useEffect, useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { backgroundColour, secondaryColour } from "~/styles/globals";
import { useFieldStore } from "~/store/fields";
import type { Field, FieldsType } from "~/store/fields";
import { itemTypes } from "~/constants/words";

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
      const generateRandomLetters = (field: Field) => {
        const mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
        let data = "";
        const max =
          Math.floor(Math.random() * (field.max - field.min + 1)) + field.min;
        // very simple random string generator for now
        for (let i = 0; i <= max; i++) {
          data += mask[Math.floor(Math.random() * mask.length)];
        }
        return data;
      };
      const generateRandomFieldItem = (type: string, field: Field) => {
        let generatedItem = "";
        let count = 0;
        const maxLoop = 20;
        const itemType = itemTypes[type];
        if (itemType !== undefined) {
          while (
            !(
              generatedItem.length >= field.min &&
              generatedItem.length <= field.max
            ) &&
            count <= maxLoop
          ) {
            generatedItem =
              itemType[Math.floor(Math.random() * itemType.length)]!;
            count++;
          }
        }
        // Todo
        // Inform user about not enough names within proided range
        // Or return empty string
        return generatedItem;
      };
      const generateItem = (field: Field) => {
        // Possible item types: firstName, lastName, fullName, email, id, uuid, mobileNumber, password
        if (field.type === "string") {
          return generateRandomLetters(field);
        } else {
          return generateRandomFieldItem(field.type, field);
        }
      };

      const generatedData: DataType = [];
      // loop through every field, put it into a function to generate fieldData
      const fieldData: FieldData = {};
      fields.forEach((field) => {
        // put generated field into object
        if (field.fieldName) {
          const data = generateItem(field);
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
          border: "1px solid",
          borderColor: secondaryColour,
          borderRadius: 8,
          height: "100%",
        }}
      />
    </>
  );
};
