import React from "react";

//mui
import { Grid } from "@mui/material";

//components
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout() {
    return(
        <>
            <section>
                <Grid container>
                    <Grid item><Sidebar/></Grid>
                    <Grid item><Topbar/></Grid>
                </Grid>
            </section>
        </>
    );
}

export default Layout;