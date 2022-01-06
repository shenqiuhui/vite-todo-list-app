import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { TodoItem, Status } from '../../type'

import './index.less'

interface TodoInput {
  onSubmit: (item: TodoItem) => void
}

const TodoInput: React.FC<TodoInput> = (props) => {
  const { onSubmit } = props
  const [content, setContent] = useState<string>('')

  const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value.trim())
  }

  const handleSubmit = () => {
    if (!content) return

    onSubmit?.({
      id: uuidv4(),
      content,
      status: Status.IS_CREATE
    })

    setContent('')
  }

  return (
    <div className='todo-item-input'>
      <Input
        placeholder='请输入待办事项'
        value={content}
        onPressEnter={handleSubmit}
        onChange={handleChange}
      />
      <Button size='large' type='primary' onClick={handleSubmit}>
        添加
      </Button>
    </div>
  )
}

export default TodoInput
