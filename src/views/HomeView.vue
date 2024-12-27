<script setup>
import { onMounted, ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
const notesStore = useNotesStore()
import NotesComponent from '@/components/notes/NotesComponent.vue'

const savedNotes = ref([])

onMounted(() => {
  notesStore.fetchNotes()
  savedNotes.value = notesStore.notes
})
</script>

<template>
  <main>
    <h2>Add Notes</h2>
    <NotesComponent />
    <div>
      <h2>Notes</h2>
      <div>
        <ul>
          <li v-for="note in savedNotes" :key="note.id">{{ note.note }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>
