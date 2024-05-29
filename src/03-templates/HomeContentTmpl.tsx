import { Grid } from "@mui/material";
import ListImage from "../02-organisms/ListImage";
import WhyFaithSafeContent from "../01-molecules/WhyFaithSafeContent";
import PicAndContent from "../02-organisms/PicAndContent";
import happyCustomer1 from '../05-assets/happyCustomer1.png';


export default function HomeContentTmpl() {
    return (
        <Grid container spacing={2}>
            <PicAndContent>
                <ListImage imgAlt={"Happy Customer"} imgSrc={happyCustomer1}/>
                <WhyFaithSafeContent />
            </PicAndContent>
        </Grid>
    );
}
