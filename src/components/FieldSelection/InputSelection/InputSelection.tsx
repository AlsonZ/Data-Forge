"use client";
import type { ChangeEvent } from "react";
import Input from "~/components/Input/Input";
import styles from "./inputSelection.module.css";
import { typeToInputTypeMap, useFieldStore } from "~/store/fields";
import type { FieldsType } from "~/store/fields";
import Button from "~/components/Button/Button";

export default function InputSelection() {
  const { fields, setFields } = useFieldStore((state) => ({
    fields: state.fields,
    setFields: state.setFields,
  }));

  const onAddInput = () => {
    //
  };

  const onChangeFieldName = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const fieldsCopy: FieldsType = structuredClone(fields);
    const field = fieldsCopy[index]!;
    field.fieldName = e.target.value;
    setFields(fieldsCopy);
  };
  const onChangeType = (e: ChangeEvent<HTMLSelectElement>, index: number) => {
    const fieldsCopy: FieldsType = structuredClone(fields);
    const field = fieldsCopy[index]!;
    field.type = e.target.value as keyof typeof typeToInputTypeMap;
    setFields(fieldsCopy);
  };
  const onchangeMinMax = (
    e: ChangeEvent<HTMLInputElement>,
    type: "min" | "max",
    index: number
  ) => {
    const fieldsCopy: FieldsType = structuredClone(fields);
    const field = fieldsCopy[index]!;
    const value = parseInt(e.target.value);
    field[type] = value;
    setFields(fieldsCopy);
  };

  return (
    <>
      <div className={styles.add}>
        <Button className={styles.addButton} onClick={onAddInput}>
          +
        </Button>
      </div>
      <div className={styles.container}>
        {fields.map((field, index) => {
          return (
            <div key={"input-field" + index} className={styles.inputRow}>
              <Input
                name="field-name"
                value={field.fieldName}
                onChange={(e) => {
                  onChangeFieldName(e, index);
                }}
                type="string"
                placeholder="Field Name"
              />
              <select
                name="field-type"
                className={styles.select}
                value={field.type}
                onChange={(e) => {
                  onChangeType(e, index);
                }}
              >
                {Object.keys(typeToInputTypeMap).map((key) => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
              {field.min && (
                <>
                  <Input
                    label="min:"
                    name="field-min"
                    type="number"
                    value={field.min}
                    onChange={(e) => {
                      onchangeMinMax(e, "min", index);
                    }}
                    inputClassName={styles.numberInput}
                  />
                </>
              )}
              {field.max && (
                <>
                  <Input
                    label="max:"
                    name="field-max"
                    type="number"
                    value={field.max}
                    onChange={(e) => {
                      onchangeMinMax(e, "max", index);
                    }}
                    inputClassName={styles.numberInput}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
