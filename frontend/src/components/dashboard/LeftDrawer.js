import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { LEFT_DRAWER_TYPE } from "../../utils/constant";

export default function TemporaryDrawer({ handleLeftDrawer, toggleDrawer }) {
    return (
        <div>
            <React.Fragment>
                <Drawer
                    anchor="right"
                    open={toggleDrawer}
                    onClose={()=>handleLeftDrawer(LEFT_DRAWER_TYPE.TOGGLE_LEFT_DRAWER)}
                >
                    <Box 
                        style={{ 
                            width: "350px", 
                            height: "100vh", 
                            backgroundColor: "#ffff", 
                            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
                        }}
                    >
                        
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    );
}