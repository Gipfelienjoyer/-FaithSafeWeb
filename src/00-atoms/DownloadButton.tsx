import React from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export default function DownloadButton() {
    const navigate = useNavigate();

    const  handleClick = () => {
        navigate("/LogIn");
    }

    return (
        <Button variant="contained" fullWidth onClick={handleClick}>Download now</Button>
    );

}