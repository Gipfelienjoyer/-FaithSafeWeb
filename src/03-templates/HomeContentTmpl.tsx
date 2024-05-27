import {Box, Grid, Typography} from "@mui/material";
import HappyCustomer1 from "../02-organisms/HappyCustomer1";


export default function HomeContentTmpl() {
    return (
        <Grid container>
            <Grid item xs={6}>
                <HappyCustomer1/>
            </Grid>
            <Grid item xs={6}>
                <Box ml={10} width="100%">
                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Typography variant={"h3"}>Why Faithsafe?</Typography>
                        <Typography variant={"h6"}>Lorem ipsum your ass</Typography>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}