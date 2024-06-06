import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://faithsafe.net/">Faithsafe&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}