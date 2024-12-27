<template>
  <div class="border-4">
    <QuillEditor width="full" :theme="editorTheme" toolbar="full" ref="quillEditor" />
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
const isEditMode = ref(false)
const editorTheme = ref('bubble')

onMounted(() => {
  setNotesText(props.note.content)
})

function setNotesText(text) {
  if (quillEditor.value) {
    const editor = quillEditor.value.getQuill()
    editor.pasteHTML(text)
  }
}

function toggleEditMode() {
  isEditMode.value = !isEditMode.value
  editorTheme.value = isEditMode.value ? 'snow' : 'bubble'
}
</script>
