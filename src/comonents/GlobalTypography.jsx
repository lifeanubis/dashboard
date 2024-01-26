import "./GlobalTypography.css";

export const ScreenTitle = ({ children }) => {
  return <p className="screenTitle">{children}</p>;
};

export const SidePanelText = ({ children }) => {
  return <p className="sidePanelTitle">{children}</p>;
};

export const TableRowText = ({ children, style }) => {
  return (
    <p className="tableRows" style={style}>
      {children}
    </p>
  );
};
export const DetailsHeader = ({ children, style }) => {
  return (
    <p className="detailsPopupHeader" style={style}>
      {children}
    </p>
  );
};
export const DetailsSideTitle = ({ children, style }) => {
  return (
    <p className="detailsPopupSideTitle" style={style}>
      {children}
    </p>
  );
};
export const DetailsContent = ({ children, style }) => {
  return (
    <p className="detailsPopupContent" style={style}>
      {children}
    </p>
  );
};
export const DetailsPopupHeading = ({ children, style }) => {
  return (
    <p className="detailsPopupHeading" style={style}>
      {children}
    </p>
  );
};
export const DetailsFooter = ({ children, style }) => {
  return (
    <p className="detailsPopupFooter" style={style}>
      {children}
    </p>
  );
};
