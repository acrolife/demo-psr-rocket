List of the modules that have been customized:

vue-agile
=========

A carousel, from this npm <https://www.npmjs.com/package/vue-agile>

Still need some dependencies of this code, so didn't, keep yarn add vue-agile
Changes made to orignal code:

- added position, width and top attributes to this class, which is the buttons wrapper
 .agile__actions {
  display: flex;
  justify-content: space-between;
  position: absolute;
    width:100%;
  top: 5rem;
 }
