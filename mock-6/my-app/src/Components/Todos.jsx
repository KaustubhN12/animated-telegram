import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input,
  } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chngstatusTodo, del, ed } from '../Redux/action'

const Todos = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

    const todos = useSelector((store)=>store.todos)
    const dispatch = useDispatch()
const [idd,setIdd] = useState(0)
 
    const handleChange=(e,id)=>{


        dispatch(chngstatusTodo(id))
        
    }



    const handleDelete=(id)=>{

        dispatch(del(id))
    }

    const handleEdit=(id)=>{
  setIdd(id)
        onOpen()
    }

    const handleActualEdit=()=>{
         let x = initialRef.current.value
        dispatch(ed({idd,x}))
        console.log(idd,initialRef.current.value)
        onClose()
setIdd(0)
        initialRef.current.value = null
    }
  return (

    <>
 
    <div>
        
        {
            todos?todos.map((el)=>{
                return <div>
      <h1>{el.task}</h1>
        <input type="checkbox" checked={el.status} onChange={(e)=>handleChange(e,el.id)}/>
        <Button onClick={()=>handleEdit(el.id)}>Edit</Button>
         
        
        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Edit Task</FormLabel>
              <Input ref={initialRef} placeholder='First name' />
            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}  onClick={()=>handleActualEdit()} >
              Edit from here
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            <Button onClick={()=>handleDelete(el.id)}>DELETE</Button>
                  </div>
              }):<div>No Todos</div>
          }

    </div>
        </>
  )
}

export default Todos