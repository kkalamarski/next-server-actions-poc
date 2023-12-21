'use client'

import { Button, Form, Input } from 'antd'
import { createTodo } from '../actions/todo'
import { Todo } from '@prisma/client'

export const TodoForm = () => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout="inline"
      labelCol={{ hidden: true }}
      onFinish={async (data: Pick<Todo, 'name'>) => {
        await createTodo(data)
        form.resetFields()
      }}
    >
      <Form.Item label="Todo" name="name">
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add
      </Button>
    </Form>
  )
}
