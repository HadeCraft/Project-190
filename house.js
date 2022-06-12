AFRAME.registerComponent("house", {
    schema: {
        state: { type: "string", default: "places-list" },
    },
    init:function() {
        this.placesContainer = this.el;
        this.createCards()
    },

    createCards: function() {

        const thumbNailsRef = [
            {
                id: "house1",
                title: "HOUSE NO.1",
                url: "./assets/thumb/house1.jpg"
            },
            {
                id: "house2",
                title: "HOUSE NO.2",
                url: "./assets/thumb/house2.jpg"
            }
        ]

        let previousXposition = -66;
        for(var item of thumbNailsRef){
            const posX = previousXposition + 22;
            const posY = 10;
            const posZ = -20;
            const position = { x: posX, y: posY, z: posZ}
            previousXposition = posX;

            const borderEl = this.createBorder(position, item.id);
            this.placesContainer.appendChild(borderEl);

            const thumbNail = this.createThumbnails(item);
            borderEl.appendChild(thumbNail);

            const titleEl = this.createTitleEl(position, item);
            borderEl.appendChild(titleEl);
        }
    },

    createThumbnails: function(item) {
        const thumb = document.createElement("a-entity")
        thumb.setAttribute("visible", true)
        thumb.setAttribute("geometry", {
            primitive: "circle",
            radius: 9,
        })
        thumb.setAttribute("material", {src: item.url})

        return thumb
    },

    createBorder: function(position, id) {
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10,
        });
        entityEl.setAttribute("material", {
            color:"cyan",
            opacity:1,
        });
        entityEl.setAttribute("cursor-listener", {})
        return entityEl
    },


    createTitleEl: function(position, item) {
        const titleEl = document.createElement("a-entity");

        titleEl.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 60,
            color: "#e65100",
            value: item.title,
        })

        const elPosition = position;
        elPosition.y = -20;
        elPosition.x = 20
        titleEl.setAttribute("position", elPosition);
        titleEl.setAttribute("visible", true);

        return titleEl
    }

})