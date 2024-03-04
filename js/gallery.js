new Vue({
  el: "#app",
  data: {
    // Array of picture categories and their images
    pictures: [
      {
        category: "Favorite Festivals",
        images: [
          { url: "images/christmas.jpg", selected: false },
          { url: "images/thanksGiving.jpg", selected: false }
          
        ],
        currentIndex: 0
      },
      {
        category: "Favorite Visiting Places",
        images: [
          { url: "images/place1.jpg", selected: false },
          { url: "images/place2.jpg", selected: false }
          
        ],
        currentIndex: 0
      },
      {
        category: "Favorite Seasons",
        images: [
          { url: "images/winter.jpg", selected: false },
          { url: "images/fall.jpg", selected: false }
        ],
        currentIndex: 0
      },
      {
        category: "My Garden",
        images: [
          { url: "images/red.jpg", selected: false },
          { url: "images/yellow.jpg", selected: false }
        ],
        currentIndex: 0
      },
      {
        category: "My Family",
        images: [
          { url: "images/family1.jpg", selected: false },
          { url: "images/family2.jpg", selected: false }
        ],
        currentIndex: 0
      },
      {
        category: "My Pets",
        images: [
          { url: "images/dog1.jpg", selected: false },
          { url: "images/bunny1.jpg", selected: false }
        ],
        currentIndex: 0
      }
    ],

    // Currently selected picture
    selectedPicture: null 
  },
  computed: {
    pictureRows() {
      // Compute rows of pictures to display in the gallery
      const rows = [];
      const totalCategoryInRow = 3;
      let currentRow = [];

      this.pictures.forEach((category) => {
        currentRow.push(category.images[category.currentIndex]);

        if (currentRow.length === totalCategoryInRow) {
          rows.push(currentRow);
          currentRow = [];
        }
      });

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      return rows;
    }
  },
  methods: {
    togglePicture(picture) {
      // Toggle selection of a picture
      if (this.selectedPicture === picture) {
        this.closeModal();
      } else {
        picture.selected = true;
        this.selectedPicture = picture;
      }
    },
    closeModal() {
      // Close the modal and deselect the picture
      this.selectedPicture.selected = false;
      this.selectedPicture = null;
    },
    prevPicture(picture) {
      // Navigate to the previous picture in its category
      const category = this.pictures.find((cat) => cat.images.includes(picture));
      category.currentIndex = 
      (category.currentIndex - 1 + category.images.length) % category.images.length;
    },
    nextPicture(picture) {
      // Navigate to the next picture in its category
      const category = this.pictures.find((cat) => cat.images.includes(picture));
      category.currentIndex = (category.currentIndex + 1) % category.images.length;
    }
  }
});
