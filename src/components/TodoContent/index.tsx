import React, { useMemo } from 'react'
import { List, Space } from 'antd'
import { CheckCircleTwoTone, CloseCircleTwoTone, RollbackOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { TodoItem, Status } from '../../type'

import './index.less'

interface TodoContent {
  data: TodoItem[]
  filterStatus: string
  onOperate?: (newData: TodoItem[]) => void
}

const { Item } = List

const TodoContent: React.FC<TodoContent> = (props) => {
  const { data = [], filterStatus, onOperate } = props

  const dataSource = useMemo<TodoItem[]>(() => {
    return data
      .filter((item) => filterStatus.includes(`${item.status}`))
      .sort((prev, next) => prev.status - next.status)
  }, [data, filterStatus])

  const handleOperate = (id: string, status: Status) => {
    onOperate?.(data.map((item) => (item.id === id && (item.status = status), item)))
  }

  const renderItem = (todo: TodoItem) => {
    return (
      <Item
        className={classnames({
          'todo-item': true,
          'todo-item-done': todo.status === Status.IS_DONE,
        })}
      >
        {todo.content}
        <Space>
          <CloseCircleTwoTone
            className='todo-item-operate'
            twoToneColor='#ff4d4f'
            onClick={() => handleOperate(todo.id, Status.IS_DELETE)}
          />
          {todo.status === Status.IS_DONE ? (
            <RollbackOutlined
              className='todo-item-operate todo-item-operate-recall'
              onClick={() => handleOperate(todo.id, Status.IS_CREATE)}
            />
          ) : (
            <CheckCircleTwoTone
              className='todo-item-operate'
              twoToneColor='#52c41a'
              onClick={() => handleOperate(todo.id, Status.IS_DONE)}
            />
          )}
        </Space>
      </Item>
    )
  }

  return (
    <div className='todo-container'>
      <List
        bordered
        dataSource={dataSource}
        renderItem={renderItem}
        pagination={{
          size: 'small',
          defaultPageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
          pageSizeOptions: ['5', '10', '20'],
          showTotal: (total) => (
            <span className='page-total'>共 {total} 条</span>
          )
        }}
      />
    </div>
  )
}

export default TodoContent
