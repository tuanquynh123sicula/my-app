"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;

  await prisma.todo.delete({
    where: {
      id: inputId,
    },
  });

  revalidatePath("/");
}

export async function deleteAllTodo() {
 const count= await prisma.todo.count();
  if (count === 0) { 
    return {ok: false,message: "No todos to delete"};
  }

  try{
    await prisma.todo.deleteMany({});
    return {ok: true,message: "All todos deleted successfully"};

  } catch (error) {
   return {no: false,message: "Failed to delete all todos"};
  }}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}