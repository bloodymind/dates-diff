import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Block, Button, Heading, Paragraph } from 'components'

import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

import { DateRangePicker } from 'react-dates'
import moment from 'moment'
import momentPropTypes from 'react-moment-proptypes'

moment.locale('fr')

const FromWrapper = styled(Block)`
  width: 440px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  @media (max-width: 600px) {
    width: 90%;
    margin: 0 auto;
  }
`

const StyledHeading = styled(Heading)`
  margin-top: 0px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`
const StyledParagraph = styled(Paragraph)`
  margin-botton: 0px;
`

class DateSample1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      startDate: null,
      endDate: null,
      duration: null,
    }
    this.calculateDates = this.calculateDates.bind(this)
    this.onDatesChange = this.onDatesChange.bind(this)
  }

  momentFormat(date) {
    return moment(date, 'MM/DD/YYYY')
  }

  calculateDates() {
    const startDate = this.momentFormat(this.state.startDate)
    const endDate = this.momentFormat(this.state.endDate)

    const duration = moment.duration(endDate.diff(startDate)).asDays()
    this.setState({ duration })
  }

  onDatesChange(dates) {
    this.setState({
      startDate: dates.startDate,
      endDate: dates.endDate,
      duration: null,
    })
  }

  render() {
    return (
      <FromWrapper {...this.props}>
        <StyledHeading>
          Calculateur de durée, nombre de jours entre dates!
        </StyledHeading>
        <Block>
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId="unique_start_date_id"
            endDate={this.state.endDate}
            endDateId="unique_end_date_id"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            showClearDates
            readOnly
            reopenPickerOnClearDates={false}
            showDefaultInputIcon
            required
            withPortal
            withFullScreenPortal={false}
            startDatePlaceholderText="Début"
            endDatePlaceholderText="Fin"
            isOutsideRange={() => false}
          />
        </Block>

        <StyledButton
          disabled={!(this.state.startDate && this.state.endDate)}
          type="button"
          onClick={this.calculateDates}
        >
          Calculer
        </StyledButton>

        {this.state.startDate && this.state.endDate && this.state.duration ? (
          <StyledParagraph>
            Résultat: {this.state.duration} Jour(s)
          </StyledParagraph>
        ) : null}
      </FromWrapper>
    )
  }
}

DateSample1.propTypes = {
  startDate: momentPropTypes.momentObj,
  endDate: momentPropTypes.momentObj,
  showClearDates: PropTypes.bool,
  readOnly: PropTypes.bool,
  reopenPickerOnClearDates: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  withPortal: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  startDatePlaceholderText: PropTypes.string,
  isOutsideRange: PropTypes.func,
}

export default DateSample1
