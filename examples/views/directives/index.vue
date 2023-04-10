<template>
  <div>
    <CodeBox :code="code">
      <template #source>
        <directiveButton type="primary" 
          @click="DirectiveClick">Directive</directiveButton>
        <Button type="primary" @click="normalClick">Normal</Button>
      </template>
      <template>
        指令源码
      </template>
      <template #highlight>
        <pre class="highlight code.hljs">
          <code>
            export const ClickDebounceDirective = {
              bind: function(el, binding) {
                function clickHandler(e) {
                  if (el.contains(e.target)) {
                    if (!el.disabled) {
                      el.disabled = true;
                      setTimeout(() => {
                        el.disabled = false;
                      }, binding.value || 3000);
                    }
                    return false;
                  }
                }

                el.bffClick = clickHandler;
                document.addEventListener("click", clickHandler);
              },
              unbind(el) {
                document.removeEventListener("click", el.bffClick);
                delete el.bffClick;
              }
            };
          </code>
      </pre>
      </template>
    </CodeBox>
  </div>
</template>

<script>
import { Button, Message} from "element-ui"
import { CodeBox } from "~/components"
import { directiveButton } from "@/views"
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: 'Directives',
  components: {
    Button,
    CodeBox,
    directiveButton
  }
})
export default class Directives extends Vue {
  DirectiveClick(){
    Message.info("Directives Click");
  }

  normalClick(){
    Message.info("Normal Click");
  }

  get code (){
    return `
      DirectiveClick(){
        Message.info("Directives Click");
      }

      normalClick(){
        Message.info("Normal Click");
      }
    `
  }
}
/* 

    

*/
</script>