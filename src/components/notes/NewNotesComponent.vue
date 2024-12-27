<template>
  <div>
    <div class="border-4">
      <QuillEditor theme="snow" toolbar="full" ref="quillRef" />
    </div>
    <button class="btn btn-success" @click="saveNote">Save Note</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { QuillEditor } from '@vueup/vue-quill'

const notesStore = useNotesStore()
const quillRef = ref(null)

function saveNote() {
  if (quillRef.value) {
    const quillEditor = quillRef.value.getHTML()
    if (quillEditor.trim() !== '') {
      notesStore.addNote(quillEditor)
    } else {
      console.error('Note cannot be empty.')
    }
  } else {
    console.error('Quill editor instance not found.')
  }
}
</script>
