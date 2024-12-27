import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const addNote = (note) => {}
  const deleteNote = (id) => {}
  const editNote = (id, note) => {}
  const fetchNotes = async () => {}

  return { notes, addNote, deleteNote, editNote, fetchNotes }
})
