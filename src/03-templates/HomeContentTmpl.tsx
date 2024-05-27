import { Grid } from "@mui/material";
import HappyCustomer1 from "../02-organisms/HappyCustomer1";
import WhyFaithSafeContent from "../01-molecules/WhyFaithSafeContent";
import PicAndContent from "../02-organisms/PicAndContent";

export default function HomeContentTmpl() {
    return (
        <Grid container spacing={2}>
            <PicAndContent>
                <HappyCustomer1 />
                <WhyFaithSafeContent />
            </PicAndContent>
            <PicAndContent>
                <WhyFaithSafeContent />
                <HappyCustomer1 />
            </PicAndContent>
        </Grid>
    );
}
