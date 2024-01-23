$(document).ready(function(){


  $('#plan_full').fullpage({
   //options here
   menu: '#menu',
   autoScrolling:true,
   scrollHorizontally: true,
   nagivation: true,
   navigationPosition: 'right',
   showActiveTooltip: true,
   anchors: ['div1', 'div2', 'div3', 'div4', 'div5'],
   scrollingSpeed: 600,
   computed: {
   color() {
     return "color: orange";
   },
   user() {
     return this.$store.getters.getPersonalInformation;
   },
   skill() {
     return this.$store.getters.getTechnologyStack;
   },
   projects() {
     return this.$store.getters.getProject;
   }
 }
 });




 });
