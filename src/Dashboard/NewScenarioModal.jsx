import {
    AccountCircle,
    Close,
    CloseOutlined,
    InfoOutlined,
    MonetizationOnOutlined,
    Percent,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    Divider,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Field, Form, Formik, useFormik } from "formik";
import SelectGlobal from "../comonents/SelectGlobal";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

// import { DatePicker } from "";
const style = {
    top: "50%",
    left: "50%",
    height: "500px",
    backgroundColor: "white",
    // p: 40,
    padding: "0 1rem 0 1rem",
    borderRadius: "1rem"
};
const iconStyle = {
    fontSize: "1rem",
};
export default function NewScenarioModal({ open, setOpen }) {
    const [autoLoop, setAutoLoop] = useState(false);
    const [pharmacyValue, setPharmacyValue] = useState("");

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    // const formik = useFormik();

    const pharmacyOptions = [
        {
            value: "Walgreens",
            label: "Walgreens",
        },
        {
            value: "CVS",
            label: "CVS",
        },
        {
            value: "Rite Aid",
            label: "Rite Aid",
        },
        {
            value: "Walmart",
            label: "Walmart",
        },
    ];

    const clientOptions = [
        {
            label: "Singlecare",
            value: "sc",
        },
        {
            label: "FamilyWize",
            value: "fw",
        },
        {
            label: "Lucinia",
            value: "lucinia",
        },

    ];




    const scenarioPostData = async (values) => {
        const payload = {
            scenario_id: 9991,
            name: "test",
            pharmacy: pharmacyValue?.value,
            pricing_client: values?.pricing_client,
            contract_type: values?.contract_type,
            as_of_date: dayjs(values?.as_of_date).format("YYYY-MM-DD"),
            competitive_target: values?.comp_target,
            surplus_target: values?.surplus_target,
            username: "sanjog",
            date_range: ["2024-01-01", "2024-01-31"],
            mac_start_date: dayjs(values?.mac_start_date).format("YYYY-MM-DD"),
            max_price_increase_percent: values?.max_increase,
            incremental_margin_target: values?.inc_margin,
            min_margin: values?.min_margin,
            max_margin: values?.max_margin,
            max_deficit_per_script: values?.max_deficit,
            max_surplus_per_script: values?.max_surplus,
        };




        try {
            const response = await axios.post("http://172.32.5.209:8080/scenario_details", payload);

            console.log(response)


            setOpen(false)
        }
        catch (err) {
            console.log(err);
            setOpen(false)

        }
    };

    return (
        <div>
            {/* <Button onClick={() => setOpen(true)}>Open modal</Button> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="dialog-dialog-title"
                    aria-describedby="dialog-dialog-description"
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogContent
                        style={{
                            height: "1050px",
                        }}
                    >
                        <Formik
                            enableReinitialize
                            initialValues={{
                                name: "",
                                as_of_date: "",
                                mac_start_date: "",
                                date_range: "",
                                pharmacy: "",
                                pricing_client: "",
                                contract_type: "",
                                surplus_target: "",
                                comp_target: autoLoop === true ? 0 : "",
                                inc_margin: "",
                                min_margin:
                                    pharmacyValue.value === "Rite Aid"
                                        ? 3
                                        : pharmacyValue.value !== undefined
                                            ? 0.5
                                            : "",
                                max_margin:
                                    (pharmacyValue.value === "CVS" && 11) ||
                                    (pharmacyValue.value === "Rite Aid" && 7) ||
                                    (pharmacyValue.value === "Walmart" && 10) ||
                                    "",
                                max_increase: "0.15",
                                max_decrease: "",
                                max_deficit:
                                    pharmacyValue.value === "CVS" ||
                                        pharmacyValue.value === "Walgreens"
                                        ? -15
                                        : pharmacyValue.value !== undefined && 0.15,
                                max_surplus:
                                    pharmacyValue.value === "CVS" ||
                                        pharmacyValue.value === "Walgreens"
                                        ? 15
                                        : pharmacyValue.value !== undefined
                                            ? 1.0
                                            : "",
                            }}
                            // validate={(values) => {
                            //   const errors = {};
                            //   if (!values.email) {
                            //     errors.email = "Required";
                            //   } else if (
                            //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            //   ) {
                            //     errors.email = "Invalid email address";
                            //   }
                            //   return errors;
                            // }}
                            onSubmit={(values, { setSubmitting }) => {
                                scenarioPostData(values);
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                setFieldValue,
                                /* and other goodies */
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Box style={style}>
                                        <Grid container justifyContent={"space-between"}>
                                            <Grid item xs={11} margin={"1rem 0 1rem 0"}>
                                                <Typography
                                                    id="modal-modal-title"
                                                    fontSize={"1.2rem"}
                                                    fontWeight={500}
                                                >
                                                    New Scenario
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={1}>
                                                <div
                                                    // type="div"
                                                    className="font-black cursor-pointer "
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <Close />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Box>
                                                    <Typography margin={"0 0 0.5rem 0"}>
                                                        Name
                                                        {/* <Tooltip  children={}  /> */}
                                                        <Tooltip title="info"
                                                            fontSize="1rem"
                                                            style={{
                                                                margin: "0 0 0 0.3rem",
                                                            }}
                                                        >
                                                            <InfoOutlined fontSize="1rem" />
                                                        </Tooltip>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    type="text"
                                                    name="name"
                                                    variant="outlined"
                                                    fullWidth
                                                    size="small"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    // onBlur={handleBlur}
                                                    autoComplete="off"
                                                    placeholder="Enter a unique name"
                                                    sx={{
                                                        backgroundColor: "white",
                                                    }}
                                                />
                                                {errors.name && touched.name && errors.name}
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent={"space-between"}>
                                            <Grid item xs={6}>
                                                <Grid item xs={6}>
                                                    <Box>
                                                        <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                            As of date
                                                            <Tooltip title="info">
                                                                <InfoOutlined fontSize="1rem"
                                                                    style={{
                                                                        margin: "0 0 0 0.3rem",
                                                                    }} />
                                                            </Tooltip>
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <DatePicker
                                                        className="w-full"
                                                        // slotProps={{
                                                        //   textField: {
                                                        //     name: "as_of_date",
                                                        //     placeholder: "kjkjk",
                                                        //     // type: "date",
                                                        //     value: values.as_of_date,
                                                        //     // onChange: (val) => console.log(val),
                                                        //   },
                                                        // }}
                                                        onChange={(value) => {
                                                            setFieldValue("as_of_date", value);
                                                        }}
                                                    // value={values.as_of_date}
                                                    // onChange={handleChange}
                                                    />
                                                    {/* <TextField
                        type="as_of_date"
                        name="as_of_date"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
                                                    {errors.as_of_date &&
                                                        touched.as_of_date &&
                                                        errors.as_of_date}
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                            MAC start date
                                                            <Tooltip title="info">
                                                                <InfoOutlined
                                                                    fontSize="1rem"
                                                                    style={{
                                                                        margin: "0 0 0 0.3rem",
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <DatePicker
                                                        className="w-full"
                                                        onChange={(value) => {
                                                            setFieldValue("mac_start_date", value);
                                                        }}
                                                    // label="select date"

                                                    // value={value}
                                                    // onChange={(newValue) => setValue(newValue)}
                                                    />

                                                    {/* <TextField
                          type="mac_date"
                          name="mac_date"
                          variant="outlined"
                          fullWidth
                          size="small"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
                                                    {errors.mac_start_date &&
                                                        touched.mac_start_date &&
                                                        errors.mac_start_date}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent={"space-between"}>
                                            <Grid item xs={6}>
                                                <Grid item xs={7}>
                                                    <Box>
                                                        <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                            Date Range Start
                                                            <Tooltip title="info">
                                                                <InfoOutlined
                                                                    fontSize="1rem"
                                                                    style={{
                                                                        margin: "0 0 0 0.3rem",
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </Typography>
                                                    </Box>
                                                </Grid>

                                                <Grid item xs={12}>
                                                    {/* <datepi */}
                                                    <DatePicker
                                                        className="w-full"
                                                        // label="select date"
                                                        onChange={(value) => {
                                                            setFieldValue("date_range", value);
                                                        }}
                                                    // value={value}
                                                    // onChange={(newValue) => setValue(newValue)}
                                                    />
                                                    {/* <TextField
                        type="email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
                                                    {errors.date_range &&
                                                        touched.date_range &&
                                                        errors.date_range}
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={5}>
                                                <Grid item xs={12}>
                                                    <Box>
                                                        <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                            Date Range End
                                                            <Tooltip title="info">
                                                                <InfoOutlined
                                                                    fontSize="1rem"
                                                                    style={{
                                                                        margin: "0 0 0 0.3rem",
                                                                    }}
                                                                />
                                                            </Tooltip>
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <DatePicker
                                                        className="w-full"
                                                        onChange={(value) => {
                                                            setFieldValue("date_rang_end", value);
                                                        }}
                                                    // label="select date"

                                                    // value={value}
                                                    // onChange={(newValue) => setValue(newValue)}
                                                    />

                                                    {/* <TextField
                          type="mac_date"
                          name="mac_date"
                          variant="outlined"
                          fullWidth
                          size="small"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        /> */}
                                                    {errors.mac_start_date &&
                                                        touched.mac_start_date &&
                                                        errors.mac_start_date}
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={7}>
                                                <Box>
                                                    <Typography margin={"0.5rem 0 0 0"}>
                                                        Pharmacy
                                                        <Tooltip title="info">
                                                            <InfoOutlined
                                                                fontSize="1rem"
                                                                style={{
                                                                    margin: "0 0 0 0.3rem",
                                                                }}
                                                            />
                                                        </Tooltip>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <SelectGlobal
                                                    options={pharmacyOptions}
                                                    onChange={(value) => {
                                                        setFieldValue("pharmacy", value);
                                                        setPharmacyValue(value);
                                                    }}
                                                />

                                                {errors.email && touched.email && errors.email}
                                            </Grid>
                                        </Grid>


                                        <Divider
                                            style={{
                                                margin: "1rem 0rem",
                                            }}
                                        />
                                        {
                                            !pharmacyValue?.value &&


                                        <Grid container>
                                            <Grid item xs={12}>
                                                <Typography margin={"0rem 0 1rem 0"} align="center">
                                                    Select pharmacy to continue
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        }


                                        {
                                            pharmacyValue?.value &&
                                            (
                                                <>




                                                    {/* other pharmacy selected */}
                                                    {
                                                        pharmacyValue?.value !== "CVS" && (

                                                            <Grid container justifyContent={"space-between"}>
                                                                <Grid item xs={7}>
                                                                    <Grid item xs={12}>
                                                                        {/* <Box> */}
                                                                        <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                                            Pricing Client
                                                                            {/* <Tooltip title="info">
                                <InfoOutlined fontSize="1rem" />
                              </Tooltip> */}
                                                                        </Typography>
                                                                        {/* </Box> */}
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <SelectGlobal
                                                                            onChange={(value) => {
                                                                                setFieldValue("pricing_client", value);
                                                                            }}
                                                                            placeholder="Select pricing client"
                                                                            fullWidth
                                                                            options={clientOptions}
                                                                        // value={values.email}
                                                                        // onChange={handleChange}
                                                                        // onBlur={handleBlur}
                                                                        />
                                                                        {errors.email && touched.email && errors.email}
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        )}

                                                    {/* other pharmacy selected */}

                                                    {/* cvs  selected */}
                                                    {
                                                        pharmacyValue?.value === "CVS" && (



                                                            <Grid container justifyContent={"space-between"}>
                                                                <Grid item xs={5}>
                                                                    <Grid item xs={12}>
                                                                        <Box>
                                                                            <Typography>
                                                                                Pricing Client
                                                                                <Tooltip title="info">
                                                                                    <InfoOutlined
                                                                                        fontSize="1rem"
                                                                                        style={{
                                                                                            margin: "0 0 0 0.3rem",
                                                                                        }}
                                                                                    />
                                                                                </Tooltip>
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <SelectGlobal
                                                                            placeholder="Select pricing client"
                                                                            fullWidth
                                                                            onChange={(value) => {
                                                                                setFieldValue("pricing_client", value);
                                                                            }}
                                                                            options={clientOptions}

                                                                        />

                                                                        {errors.pricing_client &&
                                                                            touched.pricing_client &&
                                                                            errors.pricing_client}
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Grid item xs={12}>
                                                                        <Box>
                                                                            <Typography>
                                                                                Contract Type
                                                                                <Tooltip title="info">
                                                                                    <InfoOutlined
                                                                                        fontSize="1rem"
                                                                                        style={{
                                                                                            margin: "0 0 0 0.3rem",
                                                                                        }}
                                                                                    />
                                                                                </Tooltip>
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <SelectGlobal
                                                                            placeholder="Select contract type"
                                                                            fullWidth
                                                                            onChange={(value) => {
                                                                                setFieldValue("contract_type", value);
                                                                            }}
                                                                        />
                                                                        {errors.contract_type &&
                                                                            touched.contract_type &&
                                                                            errors.contract_type}
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        )}

                                                    {/* cvs Selected */}
                                                    {/*  */}

                                                    <Grid container>
                                                        <Grid item xs={7}>
                                                            <Box>
                                                                <Typography margin={"0.5rem 0 0.5rem 0"}>
                                                                    Surplus Target
                                                                    <Tooltip title="info">
                                                                        <InfoOutlined
                                                                            fontSize="1rem"
                                                                            style={{
                                                                                margin: "0 0 0 0.3rem",
                                                                            }}
                                                                        />
                                                                    </Tooltip>
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={7}>
                                                            <TextField
                                                                id="input-with-icon-textfield"
                                                                name="surplus_target"
                                                                fullWidth
                                                                autoComplete="off"
                                                                size="small"
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <MonetizationOnOutlined style={iconStyle} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                onChange={handleChange}
                                                                variant="outlined"
                                                                placeholder="Enter surplus target"
                                                            />

                                                            {errors.email && touched.email && errors.email}
                                                        </Grid>
                                                    </Grid>

                                                    {/*  */}
                                                    <Grid
                                                        container
                                                        justifyContent={"space-between"}
                                                        margin={"0.5rem 0 0.5rem 0"}
                                                    >
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Typography>Auto loop
                                                                    <Tooltip title="info">
                                                                        <InfoOutlined
                                                                            fontSize="1rem"
                                                                            style={{
                                                                                margin: "0 0 0 0.3rem",
                                                                            }}
                                                                        />
                                                                    </Tooltip>
                                                                </Typography>
                                                                <Box display={"flex"} alignItems={"center"}>
                                                                    <Checkbox
                                                                        checked={autoLoop}
                                                                        onChange={() => setAutoLoop(!autoLoop)}
                                                                    />
                                                                    <Typography>Run</Typography>
                                                                </Box>
                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Typography margin={"0 0 0.5rem 0"}>
                                                                        Competitive Target
                                                                        <Tooltip title="info">
                                                                            <InfoOutlined
                                                                                fontSize="1rem"
                                                                                style={{
                                                                                    margin: "0 0 0 0.3rem",
                                                                                }}
                                                                            />
                                                                        </Tooltip>
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    disabled={autoLoop}
                                                                    autoComplete="off"
                                                                    id="input-with-icon-textfield"
                                                                    name="comp_target"
                                                                    fullWidth
                                                                    type="number"
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <Percent style={iconStyle} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    variant="outlined"
                                                                    placeholder="Enter competitive target"
                                                                    onChange={handleChange}
                                                                />

                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*  */}
                                                    {pharmacyValue.value !== "Walgreens" && (
                                                        <>
                                                            <Grid container>
                                                                <Grid item xs={7}>
                                                                    <Box>
                                                                        <Typography>
                                                                            Incremental Margin Target
                                                                            <Tooltip title="info">
                                                                                <InfoOutlined
                                                                                    fontSize="1rem"
                                                                                    style={{
                                                                                        margin: "0 0 0 0.3rem",
                                                                                    }}
                                                                                />
                                                                            </Tooltip>
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>
                                                                <Grid item xs={7}>
                                                                    <TextField
                                                                        autoComplete="off"
                                                                        name="inc_margin"
                                                                        id="input-with-icon-textfield"
                                                                        fullWidth
                                                                        size="small"
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="end">
                                                                                    <Percent style={iconStyle} />
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                        variant="outlined"
                                                                        placeholder="Incremental Margin Target"
                                                                        style={{
                                                                            margin: "0.5rem 0 0.5rem 0",
                                                                        }}
                                                                        onChange={handleChange}
                                                                    />

                                                                    {errors.email && touched.email && errors.email}
                                                                </Grid>
                                                            </Grid>

                                                            <Grid container justifyContent={"space-between"}>
                                                                <Grid item xs={5}>
                                                                    <Grid item xs={12}>
                                                                        <Box>
                                                                            <Typography>
                                                                                Minimum Margin
                                                                                <Tooltip title="info">
                                                                                    <InfoOutlined
                                                                                        fontSize="1rem"
                                                                                        style={{
                                                                                            margin: "0 0 0 0.3rem",
                                                                                        }}
                                                                                    />
                                                                                </Tooltip>
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <TextField
                                                                            autoComplete="off"
                                                                            name="min_margin"
                                                                            id="input-with-icon-textfield"
                                                                            fullWidth
                                                                            size="small"
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <Percent style={iconStyle} />
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                            variant="outlined"
                                                                            placeholder={
                                                                                pharmacyValue.value === "Rite Aid"
                                                                                    ? 3
                                                                                    : pharmacyValue.value !== undefined
                                                                                        ? 0.5
                                                                                        : "Enter min margin"
                                                                            }
                                                                            style={{
                                                                                margin: "0.5rem 0 0.5rem 0",
                                                                            }}
                                                                            onChange={handleChange}
                                                                        />
                                                                        {errors.email && touched.email && errors.email}
                                                                    </Grid>
                                                                </Grid>
                                                                <Grid item xs={5}>
                                                                    <Grid item xs={12}>
                                                                        <Box>
                                                                            <Typography>
                                                                                Maximum Margin
                                                                                <Tooltip title="info">
                                                                                    <InfoOutlined
                                                                                        fontSize="1rem"
                                                                                        style={{
                                                                                            margin: "0 0 0 0.3rem",
                                                                                        }}
                                                                                    />
                                                                                </Tooltip>
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>
                                                                    <Grid item xs={12}>
                                                                        <TextField
                                                                            autoComplete="off"
                                                                            name="max_margin"
                                                                            type="number"
                                                                            id="input-with-icon-textfield"
                                                                            fullWidth
                                                                            size="small"
                                                                            InputProps={{
                                                                                endAdornment: (
                                                                                    <InputAdornment position="end">
                                                                                        <Percent style={iconStyle} />
                                                                                    </InputAdornment>
                                                                                ),
                                                                            }}
                                                                            variant="outlined"
                                                                            placeholder={
                                                                                (pharmacyValue.value === "CVS" && 11) ||
                                                                                (pharmacyValue.value === "Rite Aid" && 7) ||
                                                                                (pharmacyValue.value === "Walmart" && 10) ||
                                                                                (pharmacyValue.value === undefined &&
                                                                                    "Enter margin")
                                                                            }
                                                                            style={{
                                                                                margin: "0.5rem 0 0.5rem 0",
                                                                            }}
                                                                            onChange={handleChange}
                                                                        />
                                                                        {errors.email && touched.email && errors.email}
                                                                    </Grid>
                                                                </Grid>
                                                            </Grid>
                                                        </>
                                                    )}

                                                    <Divider
                                                        style={{
                                                            margin: "1rem 0rem",
                                                        }}
                                                    />
                                                    <Grid container justifyContent={"space-between"}>
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Typography>
                                                                        Max Price Increase
                                                                        <Tooltip title="info">
                                                                            <InfoOutlined
                                                                                fontSize="1rem"
                                                                                style={{
                                                                                    margin: "0 0 0 0.3rem",
                                                                                }}
                                                                            />
                                                                        </Tooltip>
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    autoComplete="off"
                                                                    name="max_increase"
                                                                    type="number"
                                                                    id="input-with-icon-textfield"
                                                                    fullWidth
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <Percent style={iconStyle} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    variant="outlined"
                                                                    placeholder="Enter Max Price Iecrease"
                                                                    style={{
                                                                        margin: "0.5rem 0 0.5rem 0",
                                                                    }}
                                                                    onChange={handleChange}
                                                                />
                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Typography>
                                                                        Max Price Decrease
                                                                        <Tooltip title="info">
                                                                            <InfoOutlined
                                                                                fontSize="1rem"
                                                                                style={{
                                                                                    margin: "0 0 0 0.3rem",
                                                                                }}
                                                                            />
                                                                        </Tooltip>
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    autoComplete="off"
                                                                    name="max_decrease"
                                                                    type="number"
                                                                    id="input-with-icon-textfield"
                                                                    fullWidth
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <Percent style={iconStyle} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    variant="outlined"
                                                                    placeholder="Enter max decrease"
                                                                    style={{
                                                                        margin: "0.5rem 0 0.5rem 0",
                                                                    }}
                                                                    onChange={handleChange}
                                                                />
                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*  */}
                                                    <Grid container justifyContent={"space-between"}>
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Typography>
                                                                        Max Deficit per Script
                                                                        <Tooltip title="info">
                                                                            <InfoOutlined
                                                                                fontSize="1rem"
                                                                                style={{
                                                                                    margin: "0 0 0 0.3rem",
                                                                                }}
                                                                            />
                                                                        </Tooltip>
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    autoComplete="off"
                                                                    name="max_deficit"
                                                                    id="input-with-icon-textfield"
                                                                    fullWidth
                                                                    type="number"
                                                                    onChange={handleChange}
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <MonetizationOnOutlined style={iconStyle} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    variant="outlined"
                                                                    style={{
                                                                        margin: "0.5rem 0 0.5rem 0",
                                                                    }}
                                                                    placeholder={
                                                                        pharmacyValue.value === "CVS" ||
                                                                            pharmacyValue.value === "Walgreens"
                                                                            ? -15
                                                                            : pharmacyValue.value !== undefined
                                                                                ? 0.15
                                                                                : "Enter deficit"
                                                                    }
                                                                />
                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={5}>
                                                            <Grid item xs={12}>
                                                                <Box>
                                                                    <Typography>
                                                                        Max Surplus per Script
                                                                        <Tooltip title="info">
                                                                            <InfoOutlined
                                                                                fontSize="1rem"
                                                                                style={{
                                                                                    margin: "0 0 0 0.3rem",
                                                                                }}
                                                                            />
                                                                        </Tooltip>
                                                                    </Typography>
                                                                </Box>
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    autoComplete="off"
                                                                    name="max_surplus"
                                                                    type="number"
                                                                    onChange={handleChange}
                                                                    id="input-with-icon-textfield"
                                                                    fullWidth
                                                                    size="small"
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <MonetizationOnOutlined style={iconStyle} />
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                    variant="outlined"
                                                                    style={{
                                                                        margin: "0.5rem 0 0.5rem 0",
                                                                    }}
                                                                    placeholder={
                                                                        pharmacyValue.value === "CVS" ||
                                                                            pharmacyValue.value === "Walgreens"
                                                                            ? 15
                                                                            : pharmacyValue.value !== undefined
                                                                                ? 1.0
                                                                                : "Enter surplus target"
                                                                    }
                                                                />
                                                                {errors.email && touched.email && errors.email}
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    {/*  */}
                                                    <Divider
                                                        style={{
                                                            margin: "3rem 0rem",
                                                        }}
                                                    />

                                                    <DialogActions>
                                                        <Button
                                                            style={{
                                                                textTransform: "capitalize",
                                                            }}
                                                        >Cancel</Button>

                                                        <Button
                                                            type="submit"
                                                            variant="contained"
                                                            style={{
                                                                backgroundColor: "#0058A6",
                                                                fontWeight: 500,
                                                                textTransform: "capitalize",
                                                            }}
                                                        >
                                                            Create
                                                        </Button>
                                                    </DialogActions>

                                                </>

                                            )

                                        }

                                    </Box>
                                    {errors.password && touched.password && errors.password}
                                    {/* <button type="submit" disabled={isSubmitting}>
                  Submit
                </button> */}
                                </Form>
                            )}
                        </Formik>
                    </DialogContent>
                </Dialog>
            </LocalizationProvider>
        </div>
    );
}
