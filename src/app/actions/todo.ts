'use server'

import { revalidatePath } from 'next/cache'
import prisma from '../lib/prisma'
import { Todo } from '@prisma/client'

export const createTodo = async (formData: Pick<Todo, 'name'>) => {
  await prisma.todo.create({
    data: {
      name: formData.name
    }
  })

  revalidatePath('/')
}

export const updateTodo = async (formData: Pick<Todo, 'id' | 'isDone'>) => {
  const id = Number(formData.id)
  const isDone = formData.isDone

  await prisma.todo.update({
    where: {
      id
    },
    data: {
      isDone
    }
  })

  revalidatePath('/')
}
