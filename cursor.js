AFRAME.registerComponent("cursor-listener", {
   schema: {
       selectedItemId: { default: "", type: "string" }
   },
   init: function(){
       this.handleMouseEnter();
       this.handleMouseLeave();
   },

   handleMouseEnter: function(){
    this.el.addEventListener("mouseenter", () => {
        const placesContainer = document.querySelector("#placesContainer");
        const {state} = placesContainer.getAttribute("house");
        if (state === "places-list") {
            this.handlePlacesListState();
          }
    })
   },

   handlePlacesListState: function(){
    const id = this.el.getAttribute("id");
    const placesId = ["house1", "house2"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#placesContainer");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id
      });
      this.el.setAttribute("material", {
        color:"#D76B30",
        opacity: 1
      });
    }
   }

})