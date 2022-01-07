import { Radio, RadioChangeEvent } from 'antd'
import { Status } from '../../type'

import './index.less'

interface TodoFilter {
  value?: string
  onSearch?: (value: string) => void
}

const { Group } = Radio

const options = [
  { label: '全部', value: `${Status.IS_CREATE},${Status.IS_DONE}` },
  { label: '未完成', value: `${Status.IS_CREATE}` },
  { label: '已完成', value: `${Status.IS_DONE}` }
]

const TodoFilter: React.FC<TodoFilter> = (props) => {
  const { value, onSearch } = props;

  const handleChange = (event: RadioChangeEvent) => {
    onSearch?.(event.target.value)
  }

  return (
    <div className='todo-filter'>
      <Group
        value={value}
        optionType='button'
        options={options}
        onChange={handleChange}
      />
    </div>
  )
}

export default TodoFilter
