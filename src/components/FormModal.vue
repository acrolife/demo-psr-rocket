<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <div class="button-container">
            <button class="modal-default-button" @click="$emit('close')">
              x
            </button>
          </div>
          <div class="modal-header">
            <slot name="header">
              <!-- default header -->
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              <!-- default body -->
            </slot>
          </div>

          <div class="modal-footer">
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
.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex; 
  flex-direction: column;
  width: 90%; 
  margin: 0px auto;
  padding: 20px 30px;
  background-color: rgba(212, 212, 212, 0.829);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  @media screen and (min-width: 450px) {
     width: 66%;
  }
}

.modal-header {
  margin-top: 1rem;
}

.modal-body {
  margin: 10px 0;
}

.button-container {
  display: flex;
  justify-content: flex-start;
  margin-left: -4.5rem;
  margin-top: -3rem;
}
.modal-default-button {     
  border-style: solid;
  border-radius: 9999px;
  background-color: rgba(224, 222, 222, 0.678);
  color: #00b084;
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>