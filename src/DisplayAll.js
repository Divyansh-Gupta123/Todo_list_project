import { Button } from '@mui/material'
import {useSelector} from 'react-redux'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { TextField ,Grid} from "@mui/material";
import { useStyle } from "./TodoListCss";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {useDispatch} from 'react-redux'


export default function DisplayAll(props){
const dispatch=useDispatch()

  const [open, setOpen] = useState(false);
  const[elementId,setElementId]=useState('')
  const[elementName,setElementName]=useState('')
  const[refresh,setrefresh]=useState(false)

  const handleClickOpen = (item) => {
    setOpen(true);
    setElementId(item.elementid)
    setElementName(item.elementname)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleedit=()=>{
        var body={elementid:elementId,elementname:elementName}
        dispatch({type:'The_edit_element',payload:[elementId,body]})
        setOpen(false)
  }
  const handledelete=(item)=>{
   
    dispatch({type:'The_Delete_element',payload:[item.elementid]})
    setrefresh(!refresh)
  }



    var element=useSelector(state=>state.Elements)
    console.log(Object.keys(element))
    console.log(Object.values(element))

    var todoelement=Object.values(element)

    const display=()=>{
      return todoelement.map((item)=>{
        return( 
            <div style={{display:'flex',flexDirection:"row" ,marginBottom:20,alignContent:'center',}}>
                {item.elementname} 
               <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'row',marginLeft:30}}>
                <Button  color='primary' variant='contained' onClick={()=>handleClickOpen(item)}>Edit</Button>___<Button onClick={()=>handledelete(item)} color='secondary'  variant='contained'>Delete</Button>
            </div>
            </div>
          
           
           
        )
      })
    }


    const EditView=()=>{
      return(
        <div>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
                <DialogContent>
                   <Grid container spacing={2}>

                   <Grid item xs={12}>
                     <h1>ToDo-List</h1>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField fullWidth value={elementId} onChange={(event)=>setElementId(event.target.value)} label='enter the id' variant="outlined" type="number"/>
                   </Grid>
                    <Grid item xs={12}>
             <FormControl fullWidth variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter the Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          value={elementName}
          onChange={(event)=>setElementName(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <AssignmentTurnedInIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <Button onClick={handleedit} fullWidth style={{background:'blue'}} variant="contained">update</Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button onClick={handleClose}fullWidth style={{background:'red'}} variant="contained">close</Button>
                    </Grid>
                    
                   </Grid>
           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

        </div>
      )
    }
    



    return(<div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <div style={{display:'flex',color:'black',textAlign:'center',fontSize:20,fontWeight:'bold' ,flexDirection:'column',textAlignLast:'center'}}>
    {display()}
    </div>
    {EditView()}
    </div>)
}