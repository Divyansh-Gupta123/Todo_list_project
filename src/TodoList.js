import { TextField ,Grid,Button} from "@mui/material";
import { useStyle } from "./TodoListCss";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import DisplayAll from "./DisplayAll";




export default function TododList(props){
    const classes=useStyle()
    const dispatch=useDispatch()
    const[elementId,setElementId]=useState('')
    const[elemetName,setElementName]=useState('')
    const fetchalldisplay=()=>{
      <DisplayAll/>
    }

useEffect(function(){
  fetchalldisplay()
},[])
    const handlesubmit=()=>{
              var body={ elementid:elementId,elementname:elemetName}
              dispatch({type:'The_Add_elements',payload:[elementId,body]})

    }

    return(
        <div className={classes.maindiv}>
            <div className={classes.subdiv}>
                   <Grid container spacing={2}>

                   <Grid item xs={12}>
                     <h1>ToDo-List</h1>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField fullWidth onChange={(event)=>setElementId(event.target.value)} label='enter the id' variant="outlined" type="number"/>
                   </Grid>
                    <Grid item xs={12}>
             <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter the Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          onChange={(event)=>setElementName(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <AssignmentTurnedInIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <Button fullWidth style={{background:'red'}} variant="contained" onClick={handlesubmit} >Submit Element</Button>
                    </Grid>
                    <Grid item xs={12}>
                     <DisplayAll/>
                    </Grid>
                   </Grid>
            </div>
        </div>
    )
}