<template>
  <transition name="modal">
    <div class="video-modal-mask">
      <div class="video-modal-wrapper" @click="$emit('close')">
        <div class="video-modal-container" @click.stop>
          <div class="video-modal-header">
            <slot name="header">
              <!-- default header -->
            </slot>
          </div>

          <div class="video-modal-button-container">
            <button class="video-modal-default-button" @click="$emit('close')">
              x
            </button>
          </div> 
          <div class="video-modal-body">
            <slot name="body">
              <!-- default body -->
            </slot>
          </div>

          <div class="video-modal-footer">
            <slot name="footer">
              <!-- default footer -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.video-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.video-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.video-modal-container {
  display: flex; 
  flex-direction: column;
  width: 90%; 
  margin: 0px auto;
  /* padding: 20px 30px; */
  /* background-color: #fff; */
  /* border-radius: 8px; */
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33); */
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  @media screen and (min-width: 450px) {
     width: 80%;
  }
}

.video-modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.video-modal-body {
  margin: 10px 0;
}

.video-modal-button-container {
  display: flex;
  justify-content: flex-start;
  margin-left: -1rem;
}
.video-modal-default-button {     
  border-style: solid;
  border-radius: 9999px;
  background-color: rgb(207, 206, 206, .5);
  width: 2rem;
  height: 2rem;
}

/*  
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.video-modal-enter {
  opacity: 0;
}

.video-modal-leave-active {
  opacity: 0;
}

.video-modal-enter .video-modal-container,
.video-modal-leave-active .video-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>