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
import { QuillEditor } from '@vueup/vue-quill'

const quillRef = ref(null)

function saveNoteOnBlur() {
  const quillEditor = quillRef.value.getHTML()
  if (quillEditor) {
    console.log(quillEditor)
    console.log('Quill Content:', quillEditor)
    // Connect to a store that saves into the supabase database
  } else {
    console.error('Quill editor instance not found.')
  }
}
</script>
