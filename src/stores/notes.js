import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabase/supabase' // Import your Supabase instance
import DOMPurify from 'dompurify'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const error = ref(null)
  const loading = ref(false)

  onMounted(() => {
    fetchNotes()
  })

  const addNote = async (note, project_name) => {
    try {
      loading.value = true
      const sanitizedNote = DOMPurify.sanitize(note)
      const sanitizedProjectName = DOMPurify.sanitize(project_name)
      const notesData = {
        content: sanitizedNote,
        project_name: sanitizedProjectName,
      }
      console.log(notesData)
      const { data, error } = await supabase.from('notes').insert(notesData)
      if (error) throw error
      notes.value.push(data[0])
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const deleteNote = async (id) => {
    try {
      loading.value = true
      const { error } = await supabase.from('notes').delete().eq('id', id)
      if (error) throw error
      notes.value = notes.value.filter((note) => note.id !== id)
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const editNote = async (id, note) => {
    try {
      loading.value = true
      const { data, error } = await supabase.from('notes').update({ id, ...note })
      if (error) throw error
      const index = notes.value.findIndex((n) => n.id === id)
      if (index !== -1) notes.value[index] = data[0]
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const fetchNotes = async () => {
    try {
      loading.value = true
      const { data, error } = await supabase.from('notes').select('*')
      if (error) throw error
      notes.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { notes, addNote, deleteNote, editNote, fetchNotes, error, loading }
})
