import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { ScreenTitle, SidePanelText } from "../comonents/GlobalTypography";

const columns = [
  { field: "Name", headerName: "Name", width: 70 },
  { field: "Runs", headerName: "Runs", width: 70 },
  { field: "Status", headerName: "Status", width: 70 },
  { field: "As of", headerName: "As of", width: 70 },
  { field: "MAC start", headerName: "MAC start", width: 70 },
  { field: "Surplus Target", headerName: "Surplus Target", width: 70 },
  { field: "Comp target", headerName: "Comp target", width: 70 },
  { field: "Actions", headerName: "Actions", width: 70 },

  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
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
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,

    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    date: "11/11/11",
    target: "50%",
    status: "unused",
    value: "$100,000",
    runs: "1",
  },
];

export default function Dashboards() {
  return (
    <Box
      position={"relative"}
      top={70}
      left={0}
      style={{
        padding: "1.5rem",
        // backgroundColor: "red",
      }}
      maxHeight={700}
      height={"100%"}
      overflow="auto"
    >
      <ScreenTitle>Recent Activity</ScreenTitle>

      <Table
        style={{
          maxHeight: "200px",
          margin: "0 0 2rem 0",
        }}
      >
        <TableHead>
          <TableRow className="bg-[#E3E8EF]">
            {columns.map((item, index) => (
              <TableCell key={index}>{item.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item, index) => (
            <TableRow key={index} className="bg-white">
              <>
                <TableCell key={index} className="text-5xl font-bold ">
                  <Checkbox />
                  {item.lastName}
                </TableCell>
                <TableCell key={index}>{item.runs}</TableCell>
                <TableCell key={index}>{item.status}</TableCell>
                <TableCell key={index}>{item.date}</TableCell>
                <TableCell key={index}>{item.date}</TableCell>
                <TableCell key={index}>{item.value}</TableCell>
                <TableCell key={index}>{item.target}</TableCell>

                <TableCell key={index}>
                  <Button
                    style={{
                      fontSize: "0.7rem",
                    }}
                  >
                    Details
                  </Button>
                </TableCell>
              </>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
