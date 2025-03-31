import Form from "../ui/Form"
import Input from "../ui/Input"
import {AiOutlineCheckCircle} from "react-icons/ai"
import { changeStatus } from "@/app/actions/todoAction"
import { todoType } from "@/types/todoTypes"
import Button from "../ui/Button"

const ChangeTodo = ({todo}: {todo :todoType}) => {
   
  return (
    <Form action={changeStatus}>
        <Input
        name="inputId"
        value={todo.id}
        type="hidden"
        />

        <Button 
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle/>}
        />
    </Form>
  )
}

export default ChangeTodo
