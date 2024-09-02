export const initialState = {
  name: {
    value: "",
    error: "",
  },
  lastName: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  phoneNumber: {
    value: {
      code: "374",
      number: ""
    },
    error: "",
  },
  region: {
    value: "",
    error: "",
  },
  city: {
    value: "",
    error: "",
  },
  school: {
    value: "",
    error: "",
  },
  grade: {
    value: [],
    error: "",
  },
  subject: {
    value: [],
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  rePassword: {
    value: "",
    error: "",
  },
}

export const Options = [
  {
    label: "Region 1",
    value: "region_1",
  },
  {
    label: "Region 2",
    value: "region_2",
  },
  {
    label: "Region 3",
    value: "region_3",
  },
  {
    label: "Region 4",
    value: "region_4",
  },
  {
    label: "Region 5",
    value: "region_5",
  },
]