import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const PricingTable = () => {
  const columns = [
    { field: "run_id", headerName: "GPI", width: 70 },
    { field: "comp", headerName: "Drug Name", width: 70 },
    { field: "Status", headerName: "Tier", width: 70 },
    { field: "As of", headerName: "Qty", width: 70 },
    { field: "MAC start", headerName: "Avg Qty", width: 70 },
    { field: "MAC start", headerName: "Price Change Bins", width: 70 },
    { field: "MAC start", headerName: "Price:Baseline", width: 70 },
    { field: "MAC start", headerName: "price:Optimised", width: 70 },
    { field: "MAC start", headerName: "price Change", width: 70 },
    {
      field: "MAC start",
      headerName: "urr diff",
      width: 70,
    },
    { field: "MAC start", headerName: "price:GoodRx", width: 70 },
    {
      field: "MAC start",
      headerName: "Unit Plan ingred Cost:Baseline",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Unit Plan ingred Cost:Optimized",
      width: 70,
    },
    { field: "MAC start", headerName: "Unit Contract ingred Cost", width: 70 },
    { field: "MAC start", headerName: "Urr:Baseline", width: 70 },
    { field: "MAC start", headerName: "Urr:Optimized", width: 70 },
    { field: "MAC start", headerName: "Surplus Forecast:Baseline", width: 70 },
    { field: "MAC start", headerName: "Surplus Forecast:Optimized", width: 70 },
    { field: "MAC start", headerName: "surplus baseline calc", width: 70 },
    { field: "MAC start", headerName: "surplus optimum calc", width: 70 },
    {
      field: "MAC start",
      headerName: "Surplus Per Net Script:Baseline ",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Surplus Per Net Script:Optimized",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Dispensing Fee Margin:Baseline",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Dispensing Fee Margin:Optimized",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Plan Dispensing Fee Margin:Optimized",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Store Dispensing Fee Margin:Optimized",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Compensable Gross Sript Forecast",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Net Sript Forecast:Baseline",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Net Sript Forecast Diff",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Net Sript Potential 360D",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Net Sript 360D Diff",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Net Sript 360D Pct Diff",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Margin 360D Diff",
      width: 70,
    },
    {
      field: "MAC start",
      headerName: "Margin 360D Pct Diff",
      width: 70,
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      date: "11/11/11",
      target: "50%",
      status: "unused",
      value: "$100,000",
      runs: "1",
    },
  ];
  const tableTextStyle = {
    color: "#364152",

    fontWeight: 600,
  };
  const tableTextHeaderStyle = {
    color: "#697586",
    fontWeight: 500,
  };

  return (
    <div>
      <Box
        // position={"relative"}
        // top={70}
        // left={0}
        // style={{
        //   padding: "1rem",
        //   // backgroundColor: "red",
        // }}
        width={"100%"}
        // maxHeight={700}
        // height={"100%"}
        overflow="auto"
      >
        <Grid
          container
          style={{
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              position: "absolute",
              zIndex: 999,
              //   minWidth: "30vw",
            }}
          >
            <Table
              style={{
                maxHeight: "200px",
                backgroundColor: "#EEF2F6",
                // margin: "2rem 0 2rem 0",
              }}
            >
              <TableHead
                style={{
                  height: "7.3rem",
                  //   padding: " 0 0 5rem 0",
                  //   height: "2rem",
                }}
              >
                <TableRow>
                  {columns.slice(0, 6).map((item, index) => (
                    <TableCell
                      style={{
                        boxShadow: `${index === 5 && "0.2rem 0 0 #1018280F"}`,
                      }}
                      key={index}
                    >
                      <Typography
                        fontSize={"0.7rem"}
                        fontWeight={500}
                        style={{ ...tableTextHeaderStyle }}
                      >
                        {item.headerName}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <>
                  {rows.map((item, index) => (
                    <TableRow key={index} className="bg-white">
                      <>
                        <TableCell
                          key={index}
                          style={{
                            color: "#0058A6",
                            fontWeight: 700,
                          }}
                        >
                          Grand Total
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell
                          style={{
                            ...tableTextStyle,
                            boxShadow: "0.2rem 0 0 #1018280F",
                          }}
                          key={index}
                        >
                          {item.runs}
                        </TableCell>
                      </>
                    </TableRow>
                  ))}
                  {rows.map((item, index) => (
                    <TableRow key={index} className="bg-white">
                      <>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.lastName}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell
                          style={{
                            ...tableTextStyle,
                            boxShadow: "0.2rem 0 0 #1018280F",
                          }}
                          key={index}
                        >
                          {item.runs}
                        </TableCell>
                      </>
                    </TableRow>
                  ))}
                </>
              </TableBody>
            </Table>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              minWidth: "100vw",
              overflow: "auto",
              margin: "0 0 0 31rem",
              padding: "0 50rem 0 0",
            }}
          >
            <Table
              style={{
                backgroundColor: "#EEF2F6",
                margin: "0 0 2rem 0",
              }}
            >
              <TableHead
              // style={{
              //   maxHeight: "1rem",
              // }}
              >
                <TableRow>
                  {columns.slice(6).map((item, index) => (
                    <TableCell key={index}>
                      <Typography
                        fontSize={"0.7rem"}
                        fontWeight={500}
                        style={{ ...tableTextHeaderStyle }}
                      >
                        {item.headerName}
                      </Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <>
                  {rows.map((item, index) => (
                    <TableRow key={index} className="bg-white">
                      <>
                        {/* <TableCell key={index}>Grand Total</TableCell> */}
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                      </>
                    </TableRow>
                  ))}

                  {rows.map((item, index) => (
                    <TableRow key={index} className="bg-white">
                      <>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.lastName}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                        <TableCell key={index} style={tableTextStyle}>
                          {item.runs}
                        </TableCell>
                      </>
                    </TableRow>
                  ))}
                </>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PricingTable;
