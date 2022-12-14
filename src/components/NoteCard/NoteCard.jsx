export default function NoteCard({ note }) {
  const date = new Date(note.createdAt)
  console.log(note)
  const dateOptions= {weekday: 'long', year: 'numer', month: 'short', day: 'numeric', hour: 'numeric', minute:'numeric'}
  return (
    <div>
    {note.content}
    {/* {date.toLocaleDateString( dateOptions)} */}
    </div>
  )
}