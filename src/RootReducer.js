var intialStates={
    Elements:{

    }
}

export default function RootReducer(state=intialStates,action){

    switch(action.type)
    {
        case 'The_Add_elements':
            state.Elements[action.payload[0]]=action.payload[1]
            return ({Elements:state.Elements})

        case 'The_edit_element':
            state.Elements[action.payload[0]]=action.payload[1]   
            return({Elements:state.Elements}) 

        case 'The_Delete_element':
           delete state.Elements[action.payload[0]] 
            return({Elements:state.Elements})   

        default:
            return ({Elements:state.Elements})

    }

}