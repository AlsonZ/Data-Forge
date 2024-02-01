import { create } from "zustand";

export type Field = {
  fieldName: string;
  type: string;
  min?: number;
  max?: number;
};
export type FieldsType = Array<Field>;

type FieldState = {
  fields: FieldsType;
  addField: (field: Field) => void;
  setFields: (fields: FieldsType) => void;
};

export const useFieldStore = create<FieldState>((set) => ({
  fields: [
    {
      fieldName: "random_string",
      type: "string",
      min: 10,
      max: 20,
    },
    {
      fieldName: "number",
      type: "number",
      min: 1,
      max: 99999999,
    },
    {
      fieldName: "first_name",
      type: "firstName",
      min: 5,
      max: 15,
    },
    {
      fieldName: "last_name",
      type: "lastName",
      min: 5,
      max: 15,
    },
    {
      fieldName: "full_name",
      type: "fullName",
      min: 5,
      max: 30,
    },
    {
      fieldName: "password",
      type: "password",
      min: 5,
      max: 30,
    },
    {
      fieldName: "mobile_number",
      type: "mobileNumber",
    },
  ],
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  setFields: (fields) => set(() => ({ fields: fields })),
}));
