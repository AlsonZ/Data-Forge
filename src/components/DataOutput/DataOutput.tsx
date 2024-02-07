"use client";
import { useEffect, useState } from "react";
import { useFieldStore } from "~/store/fields";
import type { Field, FieldsType } from "~/store/fields";
import CodeViewer from "../CodeViewer/CodeViewer";
import { generateRandomLetters } from "~/generators/generateRandomLetters";
import { generateRandomFieldItem } from "~/generators/generateRandomFieldItems";
import {
  generateRandomMobileNumbers,
  generateRandomNumbers,
} from "~/generators/generateRandomNumbers";
import RowInput from "./RowInput/RowInput";

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
      const generateItem = (field: Field) => {
        // Possible item types: firstName, lastName, fullName, email, id, uuid, mobileNumber, password
        if (field.type === "string") {
          return generateRandomLetters(field.min, field.max);
        } else if (field.type === "number") {
          return generateRandomNumbers(field.min, field.max);
        } else if (field.type === "mobileNumber") {
          return generateRandomMobileNumbers();
        } else {
          return generateRandomFieldItem(field.type, field.min, field.max);
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
      <RowInput />
      <CodeViewer
        value={output}
        placeholder="Waiting for Fields"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
};
