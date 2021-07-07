<template>
  <transition name="modal">
    <div class="form-modal-mask">
      <div class="form-modal-wrapper" @click="$emit('close')">
        <div class="form-modal-container" @click.stop>
          <div class="form-modal-button-container">
            <button class="form-modal-default-button" @click="$emit('close')">
              x
            </button>
          </div>
          <div class="form-modal-header">
            <slot name="header">
              <!-- default header -->
            </slot>
          </div>
          <div class="form-modal-body">
            <slot name="body">
              <!-- default body -->
            </slot>
          </div>

          <div class="form-modal-footer">
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
.form-modal-mask {
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

.form-modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.form-modal-container {
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

.form-modal-header {
  margin-top: 1rem;
}

.form-modal-body {
  margin: 10px 0;
}

.form-modal-button-container {
  display: flex;
  justify-content: flex-start;
  margin-left: -2.5rem;
  margin-top: -3.5rem;
  @media screen and (min-width: 450px) {
      margin-left: -4.5rem;
      margin-top: -3rem;
  }
}
.form-modal-default-button {     
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

.form-modal-enter {
  opacity: 0;
}

.form-modal-leave-active {
  opacity: 0;
}

.form-modal-enter .form-modal-container,
.form-modal-leave-active .form-modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>