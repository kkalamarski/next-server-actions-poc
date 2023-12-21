import { Flex } from 'antd'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import prisma from './lib/prisma'

export default async function Home() {
  const todos = await prisma.todo.findMany()

  return (
    <Flex gap="middle" justify="center">
      <Flex style={{ width: 400 }} vertical>
        <h1>Todo List</h1>
        <TodoList todos={todos} />
        <TodoForm />
      </Flex>
    </Flex>
  )
}
