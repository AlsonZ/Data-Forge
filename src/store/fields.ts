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
      fieldName: "first_name",
      type: "string",
      min: 5,
      max: 20,
    },
  ],
  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  setFields: (fields) => set(() => ({ fields: fields })),
}));
