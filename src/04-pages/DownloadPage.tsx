import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {useEffect} from "react";

export default function DownloadPage() {

    const navigate = useNavigate();
    const accessToken = Cookies.get("accessToken") || "";

    useEffect(() => {
        if (accessToken === "") {
            navigate("/login");
        }
    }, [navigate, accessToken]);

    return (
        <>
            Download Page
        </>
    )
}