"use client";
import { useCallback, useEffect, useState } from "react";
import { useFieldStore } from "~/store/fields";
import type { Field, FieldsType } from "~/store/fields";
import CodeEditor from "../CodeEditor/CodeEditor";
import { generateRandomLetters } from "~/generators/generateRandomLetters";
import { generateRandomFieldItem } from "~/generators/generateRandomFieldItems";
import {
  generateRandomMobileNumbers,
  generateRandomNumbers,
} from "~/generators/generateRandomNumbers";
import RowInput from "./RowInput/RowInput";

type GeneratedData = Array<FieldData>;
type FieldData = Record<string, unknown>;

export const DataOutput = () => {
  const [output, setOutput] = useState<string>("");
  const [arrayOutput, setArrayOutput] = useState<GeneratedData>([]);
  const { fields } = useFieldStore((state) => ({
    fields: state.fields,
  }));

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

  const generateData = useCallback((fields: FieldsType, rows = 1) => {
    const generatedData: GeneratedData = [];
    // generate No. rows
    for (let i = 0; i < rows; i++) {
      const fieldData: FieldData = {};
      // loop through every field and return generated data
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
    }

    if (generatedData.length > 0) {
      return generatedData;
    }
    return [];
    // Can have it generate a bunch of data and use that as intro/cool animation, to preview this just remove the [] so it infinite loops
  }, []);

  useEffect(() => {
    const generatedData = generateData(fields);
    const filteredData = generatedData.filter(
      (data): data is FieldData => !!data
    );
    if (filteredData) {
      setArrayOutput(filteredData);
    }
  }, [fields, generateData]);

  useEffect(() => {
    setOutput(JSON.stringify(arrayOutput, null, 2));
  }, [arrayOutput]);

  const onSubmitRows = (rows: number) => {
    // re-generate the data for how many rows there are now
    const generatedData = generateData(fields, rows);
    const filteredData = generatedData.filter(
      (data): data is FieldData => !!data
    );
    if (filteredData) {
      setArrayOutput(filteredData);
    }
  };

  return (
    <>
      <RowInput onSubmitRows={onSubmitRows} />
      {/* Add Loading for large amount of data being generated */}
      <CodeEditor
        value={output}
        placeholder="Waiting for Fields"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
};
