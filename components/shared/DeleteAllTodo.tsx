"use client";
import { deleteAllTodo } from "@/app/actions/todoAction";
import Form from "../ui/Form";
import { Button } from "../ui/Button2";
import { Toaster, toast } from 'sonner'

const DeleteAllTodo = () => {
async function handleDeleteAll() {
    try {
        const req = await deleteAllTodo()
        if (req.ok ) {
            toast.success(req.message)
        } else  {
            toast.error(req.message)
        }
    } catch (error) {
        toast.error('Event has not been created')
    }

}
  return <Button className="bg-black text-white" onClick={()=>{handleDeleteAll()}}>Delete All</Button>
};

export default DeleteAllTodo
