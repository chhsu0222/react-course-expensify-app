import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListFiltes from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFiltes />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage
