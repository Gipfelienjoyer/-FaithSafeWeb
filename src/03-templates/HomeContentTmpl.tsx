import { Grid } from "@mui/material";
import HappyCustomer1 from "../02-organisms/HappyCustomer1";
import WhyFaithSafeContent from "../02-organisms/WhyFaithSafeContent";

export default function HomeContentTmpl() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <HappyCustomer1 />
            </Grid>
            <Grid item xs={12} md={6}>
                <WhyFaithSafeContent />
            </Grid>
        </Grid>
    );
}
