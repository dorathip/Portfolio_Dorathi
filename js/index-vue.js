new Vue({
    el: '#app',
    data: {
      images: [
        'images/angular.jpg',
        'images/react.jpg',
        'images/java.jpg',
        'images/spring.jpg',
        'images/javascript.jpg',
        'images/node.jpg',
        'images/mysql.jpg',
        'images/mongo.jpg'
        
      ],
      currentIndex: 0,
      currentImage: ''
    },
    mounted() {
      this.startImageSequence();
    },
    methods: {
      startImageSequence() {
        const setAnimationTime = 1000; 
        // Set the initial image
        this.currentImage = this.images[this.currentIndex];
  
        // Start the image sequence animation
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          this.currentImage = this.images[this.currentIndex];
        }, setAnimationTime);
      }
    }
  });
  