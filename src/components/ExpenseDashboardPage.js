import React from 'react'

import ExpenseList from './ExpenseList'
import ExpenseListFiltes from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFiltes />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage
