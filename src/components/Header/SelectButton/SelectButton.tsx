import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import "./SelectButton.scss";
export default function SelectButton() {
  const { t } = useTranslation();

  // const [category, setState] = useState(t("shop_by_categories"));
  const categories = [
    { value: "oven", lable: t("oven") },
    { value: "dryer", label: t("dryer") },
    { value: "dishwasher", label: t("dishwasher") },
    { value: "toaster", label: t("toaster") },
    { value: "heater", label: t("heater") },
  ];
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  // const groupStyles = {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  // };

  // const formatGroupLabel = (data) => (
  //   <div style={groupStyles}>
  //     <span className="selectButton"> data</span>
  //     <span className="selectButtonChild">{data.options.length}</span>
  //   </div>
  // );
  // const onChange = (selectedOption, actionMeta) => {
  //   console.log("handleChange", selectedOption);
  //   console.log("meta", actionMeta);
  // };
  // // const MyComponent = () => <Select options={options} />;
  // // return <MyComponent></MyComponent>;

  // const loadOptions = (searchValue, callback) => {
  //   setTimeout(() => {
  //     const filteredOptions = options.filter((option) =>
  //       option.label.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //     console.log("logOptions", searchValue, filteredOptions);
  //     callback(filteredOptions);
  //   }, 2000);
  // };
  // const colorStyles = {
  //   control: (styles) => ({ ...styles, background: "red" }),
  //   isSelected: (styles, { data }) => ({
  //     ...styles,
  //     border: "5px solid black",
  //   }),
  //   option: (styles, { data, isFocused, isSelected, isDisabled }) => {
  //     console.log("option", data, isFocused, isSelected, isDisabled);
  //     return { ...styles };
  //   },
  // };
  return (
    <div style={{ display: "inline-block" }}>
      {/* <AsyncSelect onChange={onChange} loadOptions={loadOptions} /> */}

      <Select
        // className="selectButton"
        // formatGroupLabel={formatGroupLabel}
        // onChange={onChange}
        defaultValue={{
          label: t("shop_by_categories"),
        }}
        // styles={colorStyles}
        className="selectButtonControl"
        classNamePrefix="selectButtonMenu"
        // options={categories}
      />
    </div>
  );
}
