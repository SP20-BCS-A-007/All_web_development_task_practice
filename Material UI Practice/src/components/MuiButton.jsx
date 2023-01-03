import {React, useState} from 'react'
import {Stack, Button, ToggleButton, ToggleButtonGroup} from "@mui/material"
import SendIcon from "@mui/icons-material/Send"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"


export const MuiButton = () => {
     return (
    <div>
        <Stack spacing={2} direction="column-reverse">
        <Button variant='contained' href='https://youtube.com' >Hello1</Button>
        <Button variant='outlined'>Hello2</Button>
        <Button variant='text' endIcon={<SendIcon color='warning'/>}>Hello3</Button>
        <Stack>
          <ToggleButtonGroup aria-label='text formatting' >
            <ToggleButton value="bold"><FormatBoldIcon/></ToggleButton>
            <ToggleButton value= "italic"><FormatItalicIcon/></ToggleButton>
            </ToggleButtonGroup>

        </Stack>
        </Stack>
    </div>
  )
}
