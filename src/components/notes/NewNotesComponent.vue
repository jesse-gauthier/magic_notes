<template>
  <div>
    <div class="border-4">
      <QuillEditor
        theme="snow"
        toolbar="full"
        ref="quillRef"
        :class="{ expanded_quill: isExpanded }"
      />
      <button @click="toggleExpansion" class="block ml-auto p-4 hover:underline">
        {{ isExpanded ? 'Collapse' : 'Expand' }}
      </button>
    </div>
    <input
      type="text"
      v-model="projectName"
      placeholder="Enter project name"
      class="block w-full p-2 mb-4 border border-gray-400 rounded"
    />
    <button class="btn btn-outline my-5" @click="saveNote">Save Note</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notes'
import { QuillEditor } from '@vueup/vue-quill'

const notesStore = useNotesStore()
const quillRef = ref(null)
const isExpanded = ref(false)
const projectName = ref('')

function saveNote() {
  if (quillRef.value) {
    const quillEditor = quillRef.value.getHTML()
    if (quillEditor.trim() !== '') {
      notesStore.addNote(quillEditor, projectName.value)
    } else {
      console.error('Note cannot be empty.')
    }
  } else {
    console.error('Quill editor instance not found.')
  }
}

function toggleExpansion() {
  isExpanded.value = !isExpanded.value
}
</script>

<style>
.expanded_quill {
  height: 70vh;
}
</style>
