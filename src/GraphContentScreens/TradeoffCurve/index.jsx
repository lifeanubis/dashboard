import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

import {
  Box,
  Button,
  Grid,
  Input,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DetailsSideNav from "../DetailsSideNav";
import { useEffect, useState } from "react";
import { InfoOutlined } from "@mui/icons-material";
import PricingTable from "../PricingDetails/PricingTable";
import TradeoffGraph from "./TradeoffGraph";
import TradeoffTable from "./TradeofTable";
import axios from "axios"
import {useLocation } from "react-router-dom"



const TradeoffCurve = () => {
  const [value, setValue] = useState(0);
    const [graphData, setgraphData] = useState();
    const [tableData, setTableData] = useState();
    const propsData= useLocation();



    const tradeOffData= async () => {

let data = {} ;


            if (propsData?.state?.type === "run_id") {
                data = {
                    "run_id_dict":
                        propsData?.state?.data
                    ,
                    "pharmacy": "CVS",
                    "pricing_client": "SC",
                    "username": "legacy"
                }
            }
            if (propsData?.state?.type==="scenario") {
                
                data = {
                        "scenario_id_dict":
                            propsData?.state?.data
                        ,
                        "pharmacy": "CVS",
                        "pricing_client": "SC",
                        "username": "legacy"
                    }
                

            }

   
        const tablePayload = {
            "run_id_date_dict": propsData?.state?.data,
            "pharmacy": "CVS",
            "pricing_client": "SC"
        }


        try {
            
            const response = await axios.post("https://rxprice.internal2.singlecare.com/backend/tradeoff", data);
            const responseTable = await axios.post('https://rxprice.internal2.singlecare.com/backend/summary_table', tablePayload);

            if (responseTable) {
                setTableData(responseTable?.data)
            }

            if (response) {
                setgraphData(response?.data)
            }


        }
        catch (err) {
            console.log(err);

        }
    };

    useEffect(() => {


        tradeOffData()

    },[])







  return (
    <div>
          <Box
              position={"relative"}
              top={85}
              left={0}
              style={{
                  margin: "0 0 1rem 0",
                  maxHeight: "100vh",
                  overflow: "auto",
              }}
          >
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{
              backgroundColor: "#FCFCFD",
              // margin: "0 1rem 0 0",
            }}
          >
            <DetailsSideNav />
          </Grid>

          <Grid
            item
            xs={10}
            sx={{
                padding: "0 1rem 1rem 1rem",
                maxHeight: "90vh",
                overflow:"auto"
            }}
          >
            <Grid item xs={12}>
              <Typography
                color={"#364152"}
                fontWeight={700}
                fontSize={"1.5rem"}
                margin={"2rem 1rem 2rem 1rem"}
              >
                Trade Off Curve
              </Typography>
            </Grid>

            <Paper
              elevation={2}
              sx={{
                // height: "50%",
                // width: "100%",
                bgcolor: "#E3E8EF",
                // padding: "1rem",
                // height: "10%",
              }}
                      >
                          <TradeoffGraph graphData={graphData} run_ids={propsData?.state?.data} />


                      </Paper>
            <Grid
              sx={{
                margin: "1rem 0 0 0",
              }}
              item
              xs={12}
                      >
                          <TradeoffTable tableData={tableData} />
            </Grid>
          </Grid>

          {/* <Grid container> */}
        </Grid>
      </Box>
    </div>
  );
};

export default TradeoffCurve;
// real
