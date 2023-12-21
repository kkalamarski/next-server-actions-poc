'use client'

import { Checkbox, Form, List, Typography } from 'antd'
import { Todo } from '@prisma/client'
import { updateTodo } from '../actions/todo'
import { useEffect } from 'react'

const TodoItem = ({ todo }: { todo: Todo }) => {
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldValue('id', todo.id)
    form.setFieldValue('isDone', todo.isDone)
  }, [todo])

  return (
    <List.Item>
      <Form
        labelCol={{ hidden: true }}
        onFinish={async (todo: Pick<Todo, 'id' | 'isDone'>) => {
          await updateTodo(todo)
        }}
        form={form}
      >
        <Form.Item name="id" hidden />
        <Form.Item name="isDone" valuePropName="checked" style={{ margin: 0 }}>
          <Checkbox onChange={() => form.submit()}>
            <Typography.Text
              delete={todo.isDone}
              type={todo.isDone ? 'secondary' : undefined}
            >
              {todo.name}
            </Typography.Text>
          </Checkbox>
        </Form.Item>
      </Form>
    </List.Item>
  )
}

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <List dataSource={todos} renderItem={(todo) => <TodoItem todo={todo} />} />
  )
}
