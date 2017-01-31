// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    titleValue: '',
    contentInputValue: '',
    editingItem: '',

    cards: [
      {
      title: 'Hi this is a header.',
      content: 'Hi this is the content.',
    },

    ]
  },

  methods: {
    addTask: function () {
     this.cards.push ({
       title: this.titleValue,
       content: this.contentInputValue
     })
     this.titleInputValue = '';
     this.contentInputValue = '';
   },
   cancel: function () {
     this.titleValue='';
     this.contentInputValue='';
   },
   removeCard: function (thisCard) {
     var cardIndex=this.cards.indexOf(thisCard);
     this.cards.splice(cardIndex,1);
   },
   editCard: function (thisCard) {
     this.editingItem=this.cards.push({

 });
 },
  }
});
