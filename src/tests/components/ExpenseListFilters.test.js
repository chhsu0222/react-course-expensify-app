import React from 'react'
import { shallow } from 'enzyme'

import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altfilters } from '../fixtures/filters'

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper

beforeEach(() => {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()
})
