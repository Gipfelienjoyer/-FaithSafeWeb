import {Box, Grid, Typography} from "@mui/material";

export default function WhyFaithSafeContent() {
    return (
        <Box ml={{ xs: 0, md: 10 }} width="100%">
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Typography variant="h3">Why Faithsafe?</Typography>
                <Typography variant="h6">Lorem ipsum your ass</Typography>
            </Grid>
        </Box>
    )
}