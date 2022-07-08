import React from 'react'
import ExpNoteItem from './ExpNoteItem'

const ExpNotes = ({notes}) => {
  return (
    <ul className="space-y-3">
      {
        notes.map((note, i) => <ExpNoteItem key={i} note={note} /> )
      }
    </ul>
  )
}

export default ExpNotes