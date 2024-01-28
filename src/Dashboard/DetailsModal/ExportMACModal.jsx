import {
    Dialog,
    DialogContent,
    Grid,
    Typography,
    Button,
    DialogActions,
} from "@mui/material";

export default function ExportMACModal({ open, setOpen }) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="dialog-dialog-title"
                aria-describedby="dialog-dialog-description"
                maxWidth="md"
            >
                <DialogContent
                    style={{
                        height: "250px",
                        width: "480px"
                    }}
                >
                    <Grid container padding={"1rem"}>
                        <Grid item xs={12} pb={2}>
                            <Typography
                                id="modal-modal-title"
                                fontSize={"1.5rem"}
                                fontWeight={700}
                            >
                                Export MAC File
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                id="modal-modal-title"
                                fontSize={"1rem"}
                                fontWeight={500}
                                lineHeight={"24px"}
                            >
                                Once your run is exported you will be able to upload the file to Rx Adgile.
                            </Typography>
                        </Grid>
                    </Grid>

                    <DialogActions>
                        <Button
                            style={{
                                color: "#9AA4B2",
                                textTransform: "capitalize",
                            }}
                        >Cancel</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundColor: "#0058A6",
                                fontWeight: 500,
                                padding: "0.4rem 1.5rem",
                                textTransform: "capitalize",
                            }}
                        >
                            Export
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}
