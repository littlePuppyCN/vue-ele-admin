<template>
  <div id="wrap">
    <aside>
      <nav>
        <ul>
          <!-- <li @mousedown="createSQ">SQ</li>
          <li @mousedown="createSQ">CL</li> -->
          <li v-for="i in type" :key="i" @mousedown="createSQ($event,i)">{{ i }}</li>
        </ul>
      </nav>
    </aside>
    <main>
      <div id="container" @contextmenu.prevent @click.self="showContext = false">
        <div
          v-if="active"
          :class="class_type"
          :style="{'top':pos.y + 'px','left':pos.x + 'px'}"
          @contextmenu="show_context"
          @mousedown.left="createSQ"
        />
        <div v-if="showContext" :style="{'top':pos.y + 'px','left':pos.x + 'px'}" class="context">
          <div @click="deleteSQ">delete</div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pos: {
        x: 0,
        y: 0
      },
      class_type: '',
      type: ['SQ', 'CL'],
      active: false,
      showContext: false
    }
  },
  methods: {
    createSQ(e, v) {
      this.active = true
      let flag = true
      if (v) {
        this.class_type = v.toLowerCase()
      }
      e.preventDefault()
      document.onmousemove = e => {
        if (flag) {
          this.pos.x = e.x - 200
          this.pos.y = e.y
        }
        document.onmouseup = () => {
          flag = false
        }
      }
    },
    show_context() {
      this.showContext = true
    },
    deleteSQ() {
      this.active = false
      this.showContext = false
    }
  }
}
</script>

<style lang='less' scoped>
#wrap {
  width: 100%;
  height: 100%;
  aside {
    float: left;
    width: 200px;
    height: 100%;
  }
  main {
    height: 100%;
    margin-left: 200px;
    #container {
      overflow: hidden;
      height: 100%;
      position: relative;
      .sq {
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        left: 0;
        right: 0;
      }
      .cl{
        position: absolute;
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        left: 0;
        right: 0;
        border-radius: 50%;
      }
      .context {
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-indent: 10px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
