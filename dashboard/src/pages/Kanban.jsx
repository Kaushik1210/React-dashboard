import React from 'react'
import {KanbanComponent,ColumnDirective,ColumnsDirTypecast} from '@syncfusion/ej2-react-kanban'

import { kanbanGrid,kanbanData } from '../data/dummy'

import { Header } from '../components'
import { ColumnsDirective } from '@syncfusion/ej2-react-charts'

const kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Kanban" />
      <KanbanComponent
      id='Kanban'
      dataSource={kanbanData}
      cardSettings={{contentField:'Summary',headerField:'Id'}}
      keyField='Status'
      >
        <ColumnsDirective>
        {kanbanGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default kanban
