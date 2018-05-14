import React from 'react'
import ReactDOM from 'react-dom'
import FilterBar from './components/filter_bar'
import TableStudents from './components/table_students'
import allStudents from './iscritti.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyToFilter: '',
      students: allStudents
    }
  }

  onFilter = (newValue) => {
    const filterStudents = allStudents.filter((student) => {
      if (newValue === '' ||
        student.nome.toLowerCase().indexOf(newValue.toLowerCase()) !== -1
        || student.cognome.toLowerCase().indexOf(newValue.toLowerCase()) !== -1
        || student.cf.toLowerCase().indexOf(newValue.toLowerCase()) !== -1) {
        return true
      }
      else {
        return false
      }
    })

    this.setState({
      keyToFilter: newValue,
      students: filterStudents
    })
  }

  render() {
    return <React.Fragment>
      <FilterBar value={this.state.keyToFilter} onFilter={this.onFilter}/>
      <TableStudents data={this.state.students} highlightText={this.state.keyToFilter}/>
    </React.Fragment>
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
