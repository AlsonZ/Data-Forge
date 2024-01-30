import { create } from "zustand";

export type Field = {
  fieldName: string;
  type: string;
  min: number;
  max: number;
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
      fieldName: "first_name",
      type: "firstName",
      min: 5,
      max: 15,
    },
  ],
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  setFields: (fields) => set(() => ({ fields: fields })),
}));
