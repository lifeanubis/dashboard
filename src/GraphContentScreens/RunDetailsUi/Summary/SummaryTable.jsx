import { MoreVert } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const SummaryTable = () => {
  const columns = [
    { field: "run_id", headerName: "Run ID", width: 70 },
    { field: "comp", headerName: "Conp Target", width: 70 },
    { field: "Status", headerName: "Max Price Inc %", width: 70 },
    { field: "As of", headerName: "Surplus Target", width: 70 },
    { field: "MAC start", headerName: "Current S/D + Spread", width: 70 },
    {
      field: "Surplus Target",
      headerName: "Pending Surplus (reversals to come)",
      width: 70,
    },
    {
      field: "Comp target",
      headerName: "Surplus Eop Forecast: Baseline",
      width: 70,
    },
    {
      field: "Actions",
      headerName: "Surplus Eop Forecast: Optimized",
      width: 70,
    },
    { field: "Actions", headerName: "Incremental Margin Target ", width: 70 },
    { field: "Actions", headerName: "Average Margin Baseline", width: 70 },
    { field: "Actions", headerName: "Average Margin: Optimized ", width: 70 },
    { field: "Actions", headerName: "Avg Weighted Price: Baseline", width: 70 },
    {
      field: "Actions",
      headerName: "Avg Weighted Price: Optimized",
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
      // maxHeight={700}
      // height={"100%"}
      // overflow="auto"
      >
        <Table
          style={{
            maxHeight: "200px",
            margin: "0 0 2rem 0",
          }}
        >
          <TableHead>
            <TableRow className="bg-[#E3E8EF]">
              {columns.map((item, index) => (
                <TableCell
                  style={{
                    boxShadow: `${index === 2 && "0.2rem 0 0 #1018280F"}`,
                  }}
                  key={index}
                >
                  <Typography fontSize={"0.7rem"} fontWeight={500}>
                    {item.headerName}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((item, index) => (
              <TableRow key={index} className="bg-white">
                <>
                  <TableCell key={index}>{item.lastName}</TableCell>
                  <TableCell key={index}>{item.runs}</TableCell>
                  <TableCell
                    style={{
                      boxShadow: "0.2rem 0 0 #1018280F",
                    }}
                    key={index}
                  >
                    <Typography fontSize={"0.7rem"} fontWeight={500}>
                      {item.status}
                    </Typography>
                  </TableCell>
                  <TableCell key={index}>{item.date}</TableCell>
                  <TableCell key={index}>{item.date}</TableCell>
                  <TableCell key={index}>{item.value}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>
                  <TableCell key={index}>{item.target}</TableCell>

                  <TableCell key={index}>
                    <MoreVert />
                  </TableCell>
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default SummaryTable;
