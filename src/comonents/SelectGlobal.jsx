import { DeleteForever } from "@mui/icons-material";
import Select, { components } from "react-select";
import "./GlobalTypography.css";

const SelectGlobal = ({
  name,
  options,
  placeholder,
  DropdownIndicator,
  onChange,
}) => {
  // const DropdownIndicator = (props) => {
  //   return (
  //     <components.DropdownIndicator {...props}>
  //       <DeleteForever label="Emoji" primaryColor={"red"} />
  //     </components.DropdownIndicator>
  //   );
  // };
  return (
    <Select
      name={name || ""}
      // value={selectedOption}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      components={DropdownIndicator || null}
      menuPortalTarget={document.body}
      menuPosition="fixed"
      // maxMenuHeight={"32px"}
      // theme={}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "#FCFCFD",
          // height: "32px",
          // minHeight: "32px",
          // maxHeight: "32px",
          width: "100%",
          // padding: "6px 8px",
          // minHeight: "32px",'
          borderRadius: "8px",
          margin: "1rem 0 0 0",
          fontSize: "0.875rem",
          fontStyle: "normal",
          fontWeight: 500,
        }),

        menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
        menu: (provided) => ({ ...provided, zIndex: 9999 }),
        indicatorSeparator: (baseStyles, state) => ({
          ...baseStyles,
          display: "none",
        }),
      }}
    />
  );
};

export default SelectGlobal;
// return (
//   <Select
//     name={name || ""}
//     // value={selectedOption}
//     onChange={onChange}
//     // placeholder={placeholder}
//     options={options}
//     components={DropdownIndicator || null}
//     menuPortalTarget={document.body}
//     menuPosition="fixed"
//     maxMenuHeight={"32px"}
// theme={}

//     styles={{
//       control: (baseStyles, state) => ({
//         ...baseStyles,
//         backgroundColor: "#FCFCFD",
//         height: "32px",
//         minHeight: "32px",
//         maxHeight: "32px",
//         width: "100%",
//         padding: "6px 8px",
//         // minHeight: "32px",
//       }),
//       input: (baseStyles, state) => ({
//         ...baseStyles,
//         // backgroundColor: "red",
//         // maxHeight: "10px",
//         // height: "100%",
//         // minHeight: "100%",
//         // maxHeight: "100%",
//         // minHeight: "15px",
//         // padding: "6px 8px",
//         // minHeight: "32px",
//       }),
//       container: (baseStyles, state) => ({
//         ...baseStyles,
//         // backgroundColor: "red",
//         height: "32px",
//         minHeight: "32px",
//         maxHeight: "32px",
//       }),
//       menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
//       menu: (provided) => ({ ...provided, zIndex: 9999 }),
//       indicatorSeparator: (baseStyles, state) => ({
//         ...baseStyles,
//         display: "none",
//       }),
//     }}
//   />
// );
