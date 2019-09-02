<template>
  <div>
    <div v-if="showHtml" class="ql-container ql-snow" :style="border ? 'border: none;' : ''">
      <div class="ql-editor" :style="padding ? 'padding: 0;' : ''" v-html="htmlContent"></div>
    </div>
    <div class="edit_container" v-if="!showEdit">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)"
      ></quill-editor>
      <div class="martop-15 text-right">
        <el-checkbox class="pull-left" v-model="checked">匿名提交</el-checkbox>
        <el-button
          :size="btnSize ? btnSize : 'medium'"
          @click="saveHtml"
          type="primary"
        >{{btnText ? btnText : '提交'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: false ? this.editContent.html : "请在这里概述您的问题...",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike", "blockquote", "image"]
          ]
        }
      },
      checked: false
    };
  },
  props: {
    /**
     * @父子件参数
     * @border 控制class ql-container ql-snow边框
     * @padding 控制class ql-editor内边距
     * @htmlContent 显示内容
     * @editContent 编辑器内容
     * @showHtml 控制内容是否显示
     * @showEdit 控制编辑器是否显示
     *  */
    border: Boolean,
    padding: Boolean,
    htmlContent: null,
    editContent: null,
    showHtml: Boolean,
    showEdit: Boolean,
    btnText: String,
    btnSize: String
  },
  computed: {},
  methods: {
    onEditorReady(editor) {
      console.log(editor);
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      console.log(this.content);
    }
  }
};
</script>

<style scoped lang="scss">
</style>
