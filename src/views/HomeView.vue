<script setup>
import { onMounted, ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
const notesStore = useNotesStore()
import NewNotesComponent from '@/components/notes/NewNotesComponent.vue'
import ModifyNotesComponent from '@/components/notes/ModifyNotesComponent.vue'

const savedNotes = ref([])

onMounted(() => {
  savedNotes.value = notesStore.notes.value
})
</script>

<template>
  <main>
    <h2>Add Notes</h2>
    <NewNotesComponent />
    <div>
      <h2>Notes</h2>
      <div>
        <ul>
          <li v-for="note in notesStore.notes" :key="note.id">
            <ModifyNotesComponent :note="note" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
