<template>
  <div class="border-4">
    <QuillEditor theme="bubble" toolbar="full" ref="quillEditor" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'

const props = defineProps({
  id: String,
  note: Object,
})

const quillEditor = ref(null)

onMounted(() => {
  setNotesText(props.note.content)
})

function setNotesText(text) {
  if (quillEditor.value) {
    const editor = quillEditor.value.getQuill()
    editor.pasteHTML(text)
  }
}
</script>
