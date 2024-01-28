import {
    Dialog,
    DialogContent,
    Grid,
    Typography,
    Button,
    DialogActions,
} from "@mui/material";

export default function DiscardScenarioModal({ open, setOpen }) {

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
                        height: "280px",
                        width: "500px"
                    }}
                >
                    <Grid container padding={"1rem"}>
                        <Grid item xs={12} pb={2}>
                            <Typography
                                id="modal-modal-title"
                                fontSize={"1.5rem"}
                                fontWeight={700}
                            >
                                Your scenario will not be saved
                            </Typography>
                        </Grid>
                        <Grid item xs={12} pb={5}>
                            <Typography
                                id="modal-modal-title"
                                fontSize={"1rem"}
                                fontWeight={500}
                                lineHeight={"24px"}
                            >
                                We will not be able to save the scenario that have started to create if you move away from this page.
                            </Typography>
                        </Grid>
                    </Grid>

                    <DialogActions>
                        <Button
                            style={{
                                color: "#9AA4B2"
                            }}
                        >Go Back</Button>
                        <Button
                            type="submit"
                            variant="contained"
                            style={{
                                backgroundColor: "#0058A6",
                                fontWeight: 500,
                                padding: "0.6rem 1rem"
                            }}
                        >
                            Discard Scenario
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}
