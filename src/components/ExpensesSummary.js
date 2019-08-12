import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formatttedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formatttedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    const expenseCount = visibleExpenses.length
    const expensesTotal = getExpensesTotal(visibleExpenses)

    return {
        expenseCount,
        expensesTotal
    } 
}

export default connect(mapStateToProps)(ExpensesSummary)
