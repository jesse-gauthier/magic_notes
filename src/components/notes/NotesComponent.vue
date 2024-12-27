<template>
  <div>
    <div class="border-4">
      <QuillEditor theme="bubble" toolbar="full" ref="quillRef" @blur="saveNoteOnBlur" />
    </div>
    <button class="btn btn-success">Save Note</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { QuillEditor } from '@vueup/vue-quill'

const notesStore = useNotesStore()
const quillRef = ref(null)

function saveNoteOnBlur() {
  const quillEditor = quillRef.value.getHTML()
  if (quillEditor) {
    notesStore.addNote(quillEditor)
  } else {
    console.error('Quill editor instance not found.')
  }
}
</script>
